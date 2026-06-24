'use server'

import { prisma } from "@/lib/prisma";
import { ProductTypeKeys } from "@/utils/product-type";

type StockType = ProductTypeKeys;

type RawItem = {
  stockId: string;
  quantity: number;
  type: string;
};

type ReportRowBase = {
  stockId: string;
  type: StockType;
  brandName?: string;
  modelName?: string;
  color?: string;
  ram?: string | null;
  rom?: string | null;
  purchasePrice: number;
  sellingPrice: number;
  availableQuantity: number;
  updatedAt: Date;
};

export interface StockAvailabilityReport {
  date: string;
  totalAvailable: number;
  totalValue: number;
  byType: Record<StockType, number>;
  rows: ReportRowBase[];
}

function toStockType(value: string): StockType | null {
  if (value === "android" || value === "button" || value === "accessories") {
    return value;
  }
  return null;
}

function normalizeDate(date: string) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  return { start, end };
}

function buildRawItems(entry: {
  entity: unknown;
  salesItems: Array<{
    stockId: string;
    quantity: number;
    type: { type: string };
  }>;
}): RawItem[] {
  if (Array.isArray(entry.entity) && entry.entity.length > 0) {
    return entry.entity as RawItem[];
  }

  return entry.salesItems.map((salesItem) => ({
    stockId: salesItem.stockId,
    quantity: salesItem.quantity,
    type: salesItem.type.type,
  }));
}

export async function stockAvailabilityReport(date: string): Promise<StockAvailabilityReport | null> {
  try {
    const { end } = normalizeDate(date);

    const [
      androidStocks,
      buttonStocks,
      accessoriesStocks,
      salesEntries,
      returns,
      androidHistory,
      buttonHistory,
      accessoriesHistory,
    ] = await Promise.all([
      prisma.stockAndroid.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
      prisma.stockButton.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
      prisma.stockAccessories.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
      prisma.salesEntry.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        select: {
          id: true,
          createdAt: true,
          entity: true,
          salesItems: {
            include: {
              type: true,
            },
          },
        },
      }),
      prisma.returnHistory.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        select: {
          stockId: true,
          createdAt: true,
        },
      }),
      prisma.historyAndroidStock.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
      prisma.historyButtonStock.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
      prisma.historyAccessoriesStock.findMany({
        where: {
          createdAt: {
            lte: end,
          },
        },
        include: {
          brand: true,
          model: true,
        },
      }),
    ]);

    const soldCountByStockId = new Map<string, number>();
    const returnCountByStockId = new Map<string, number>();
    const buttonHistoryByKey = new Map<string, number>();
    const accessoriesHistoryByKey = new Map<string, number>();

    for (const sale of salesEntries) {
      for (const item of buildRawItems(sale)) {
        const stockType = toStockType(item.type);
        if (!stockType) {
          continue;
        }

        const previous = soldCountByStockId.get(item.stockId) ?? 0;
        soldCountByStockId.set(item.stockId, previous + Number(item.quantity || 0));
      }
    }

    for (const returned of returns) {
      const previous = returnCountByStockId.get(returned.stockId) ?? 0;
      returnCountByStockId.set(returned.stockId, previous + 1);
    }

    for (const history of buttonHistory) {
      const historyCreatedAt = history.createdAt ?? end;
      if (historyCreatedAt > end) {
        continue;
      }

      const key = `${history.modelId}:${history.brandId}:${history.color}`;
      const previous = buttonHistoryByKey.get(key) ?? 0;
      buttonHistoryByKey.set(key, previous + Number(history.quantity || 0));
    }

    for (const history of accessoriesHistory) {
      const historyCreatedAt = history.createdAt ?? end;
      if (historyCreatedAt > end) {
        continue;
      }

      const key = `${history.modelId}:${history.brandId}`;
      const previous = accessoriesHistoryByKey.get(key) ?? 0;
      accessoriesHistoryByKey.set(key, previous + Number(history.quantity || 0));
    }

    const rows: ReportRowBase[] = [];

    for (const stock of androidStocks) {
      const saleEvents = soldCountByStockId.get(stock.id) ?? 0;
      const returnEvents = returnCountByStockId.get(stock.id) ?? 0;
      const availableQuantity = (saleEvents + returnEvents) % 2 === 0 ? 1 : 0;

      if (availableQuantity <= 0) {
        continue;
      }

      rows.push({
        stockId: stock.id,
        type: "android",
        brandName: stock.brand?.brandName,
        modelName: stock.model?.model,
        color: stock.color,
        ram: stock.ram ?? null,
        rom: stock.rom ?? null,
        purchasePrice: Number(stock.purchasePrice || 0),
        sellingPrice: Number(stock.sellingPrice || 0),
        availableQuantity,
        updatedAt: stock.createdAt ?? end,
      });
    }

    for (const stock of buttonStocks) {
      const key = `${stock.modelId}:${stock.brandId}:${stock.color}`;
      const historyTotal = buttonHistoryByKey.get(key) ?? 0;

      const soldTotal = soldCountByStockId.get(stock.id) ?? 0;
      const availableQuantity = historyTotal - soldTotal;

      if (availableQuantity <= 0) {
        continue;
      }

      rows.push({
        stockId: stock.id,
        type: "button",
        brandName: stock.brand?.brandName,
        modelName: stock.model?.model,
        color: stock.color,
        purchasePrice: Number(stock.purchasePrice || 0),
        sellingPrice: Number(stock.sellingPrice || 0),
        availableQuantity,
        updatedAt: stock.createdAt ?? end,
      });
    }

    for (const stock of accessoriesStocks) {
      const key = `${stock.modelId}:${stock.brandId}`;
      const historyTotal = accessoriesHistoryByKey.get(key) ?? 0;

      const soldTotal = soldCountByStockId.get(stock.id) ?? 0;
      const availableQuantity = historyTotal - soldTotal;

      if (availableQuantity <= 0) {
        continue;
      }

      rows.push({
        stockId: stock.id,
        type: "accessories",
        brandName: stock.brand?.brandName,
        modelName: stock.model?.model,
        purchasePrice: Number(stock.purchasePrice || 0),
        sellingPrice: Number(stock.sellingPrice || 0),
        availableQuantity,
        updatedAt: stock.createdAt ?? end,
      });
    }

    rows.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type.localeCompare(b.type);
      }

      const nameA = `${a.brandName ?? ""} ${a.modelName ?? ""}`.trim();
      const nameB = `${b.brandName ?? ""} ${b.modelName ?? ""}`.trim();
      return nameA.localeCompare(nameB);
    });

    const byType: Record<StockType, number> = {
      android: 0,
      button: 0,
      accessories: 0,
    };

    let totalAvailable = 0;
    let totalValue = 0;

    for (const row of rows) {
      byType[row.type] += row.availableQuantity;
      totalAvailable += row.availableQuantity;
      totalValue += row.availableQuantity * row.sellingPrice;
    }

    return {
      date,
      totalAvailable,
      totalValue,
      byType,
      rows,
    };
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
