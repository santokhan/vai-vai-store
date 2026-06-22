'use server'

import { prisma } from "@/lib/prisma";
import { getStockByType } from "../stock/get-stock-by-type";
import { ProductTypeKeys } from "@/utils/product-type";

export interface Entity {
  stockId: string;
  quantity: number;
  price: number;
  type: string;
}

export interface DailyReportItem {
  stockId: string;
  type: ProductTypeKeys;
  quantity: number;
  price: number;
  total: number;
  brandName?: string;
  modelName?: string;
  imei?: string;
  color?: string;
  ram?: string | null;
  rom?: string | null;
}

export interface DailyReportSale {
  id: string;
  customerName: string;
  customerPhone?: string | null;
  sellerName: string;
  createdAt: Date;
  dueDate?: Date | null;
  due: number;
  discount: number;
  totalSale: number;
  totalItems: number;
  items: DailyReportItem[];
}

export interface DailyReport {
  date: string;
  totalSale: number;
  itemsSold: number;
  profit: number;
  dueAmount: number;
  totalDiscount: number;
  salesCount: number;
  salesByCategory: Record<string, number>;
  sales: DailyReportSale[];
}

function toProductType(value: string): ProductTypeKeys | null {
  if (value === "android" || value === "button" || value === "accessories") {
    return value;
  }
  return null;
}

type RawItem = {
  stockId: string;
  quantity: number;
  price: number;
  type: string;
};

async function resolveItem(item: RawItem): Promise<DailyReportItem | null> {
  const type = toProductType(item.type);
  if (!type) {
    return null;
  }

  const quantity = Number(item.quantity || 0);
  const price = Number(item.price || 0);
  const total = price * quantity;
  const stock = await getStockByType(type, item.stockId);

  return {
    stockId: item.stockId,
    type,
    quantity,
    price,
    total,
    brandName: stock?.brand?.brandName,
    modelName: stock?.model?.model,
    imei: stock && "IMEI" in stock ? stock.IMEI : undefined,
    color: stock && "color" in stock ? stock.color : undefined,
    ram: stock && "ram" in stock ? stock.ram ?? null : null,
    rom: stock && "rom" in stock ? stock.rom ?? null : null,
  };
}

export async function dailyReportStat(date: string): Promise<DailyReport | null> {
  try {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    const data = await prisma.salesEntry.findMany({
      where: {
        createdAt: {
          gte: start,
          lte: end
        }
      },
      include: {
        customer: true,
        seller: true,
        salesItems: {
          include: {
            type: true
          }
        }
      }
    });

    let totalSale = 0;
    let itemsSold = 0;
    let totalDiscount = 0;
    const salesByCategory: Record<string, number> = {};

    const sales = await Promise.all(data.map(async (entry) => {
      const rawItems: RawItem[] = Array.isArray(entry.entity) && entry.entity.length > 0
        ? (entry.entity as unknown as Entity[])
        : entry.salesItems.map((salesItem) => ({
          stockId: salesItem.stockId,
          quantity: salesItem.quantity,
          price: Number(salesItem.unitPrice || 0),
          type: salesItem.type.type,
        }));

      const items = await Promise.all(rawItems.map(resolveItem));
      const filteredItems = items.filter((item): item is DailyReportItem => item !== null);
      const totalSaleByEntry = filteredItems.reduce((sum, item) => sum + item.total, 0);
      const totalItemsByEntry = filteredItems.reduce((sum, item) => sum + item.quantity, 0);

      filteredItems.forEach((item) => {
        totalSale += item.total;
        itemsSold += item.quantity;
        salesByCategory[item.type] = (salesByCategory[item.type] || 0) + item.total;
      });

      totalDiscount += Number(entry.discount || 0);

      return {
        id: entry.id,
        customerName: entry.customer.name,
        customerPhone: entry.customer.phone,
        sellerName: entry.seller.name,
        createdAt: entry.createdAt,
        dueDate: entry.dueDate,
        due: Number(entry.due || 0),
        discount: Number(entry.discount || 0),
        totalSale: totalSaleByEntry,
        totalItems: totalItemsByEntry,
        items: filteredItems,
      };
    }));

    const profit = totalSale * 0.18; // example
    const dueAmount = data.reduce((sum, entry) => sum + (entry.due || 0), 0);

    return {
      date,
      totalSale,
      itemsSold,
      profit,
      dueAmount,
      totalDiscount,
      salesCount: data.length,
      salesByCategory,
      sales,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
