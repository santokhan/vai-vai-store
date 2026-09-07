"use server";

import { prisma } from "@/lib/prisma";
import { SaleResponse, SalesResponse } from "@/types";

export type SalesInclude_C_S = SaleResponse;

export async function getSalesIndividual(
  id: string,
): Promise<SaleResponse | null | undefined> {
  try {
    return await prisma.salesEntry.findFirst({
      where: {
        id,
      },
      include: {
        customer: true,
        seller: true,
      },
    });
  } catch (error) {
    console.error("Error creating model:", error);
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

export async function getSalesIndividualIncludeProducts(
  id: string,
): Promise<SaleResponse | null | undefined> {
  try {
    const sale = await prisma.salesEntry.findFirst({
      where: {
        id,
      },
      include: {
        customer: true,
        seller: true,
      },
    });

    let entity = sale?.entity || [];

    if (!Array.isArray(entity)) {
      return sale;
    }

    const data = JSON.parse(JSON.stringify(sale));

    entity = await Promise.all(
      entity?.map(async (item: any) => {
        const stock = await prisma.stockAndroid.findFirst({
          where: {
            id: item.stockId,
          },
          include: {
            productType: true,
            brand: true,
            model: true,
          },
        });

        item.brandName = stock?.brand?.brandName;
        item.model = stock?.model?.model;
        item.ram = stock?.ram;
        item.rom = stock?.rom;
        item.IMEI = stock?.IMEI;
        item.modelId = stock?.modelId;

        return item;
      }),
    );

    data.entity = entity;
    return data;
  } catch (error) {
    console.error("Error creating model:", error);
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

export async function getSalesMany({
  imei,
  startDate,
  endDate,
}: {
  imei?: string;
  startDate?: string;
  endDate?: string;
}): Promise<SaleResponse[] | undefined> {
  try {
    const createdAt: { gte?: Date; lt?: Date } = {};
    if (startDate) createdAt.gte = new Date(`${startDate}T00:00:00`);
    if (endDate) {
      const end = new Date(`${endDate}T00:00:00`);
      end.setDate(end.getDate() + 1);
      createdAt.lt = end;
    }
    let salesData: SalesResponse = await prisma.salesEntry.findMany({
      where: Object.keys(createdAt).length ? { createdAt } : undefined,
      include: {
        customer: true,
        seller: true,
      },
    });

    const IMEI = imei?.trim();
    if (IMEI) {
      const stockId = await prisma.stockAndroid.findFirst({
        where: {
          IMEI,
        },
        select: {
          id: true,
        },
      });

      salesData = salesData.filter((sale) => {
        if (!Array.isArray(sale.entity)) return false;

        return sale.entity.some(
          (item) =>
            item &&
            typeof item === "object" &&
            "stockId" in item &&
            (item as { stockId?: string }).stockId === stockId?.id,
        );
      });
    }

    return salesData?.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getSalesPage({
  imei, startDate, endDate, page = 1,
}: {
  imei?: string; startDate?: string; endDate?: string; page?: number;
}) {
  const sales = (await getSalesMany({ imei, startDate, endDate })) ?? [];
  const safePageSize = 10;
  const totalPages = Math.max(1, Math.ceil(sales.length / safePageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  return { sales: sales.slice((safePage - 1) * safePageSize, safePage * safePageSize), totalRows: sales.length, page: safePage, totalPages };
}

export async function getSingleSaleItemByStockId(stockId: string) {
  try {
    const sale = await prisma.salesEntry.findFirst({
      where: {
        entity: {
          equals: { stockId },
        },
      },
    });
    return sale;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
