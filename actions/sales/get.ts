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
}: {
  imei?: string;
}): Promise<SaleResponse[] | undefined> {
  try {
    let salesData: SalesResponse = await prisma.salesEntry.findMany({
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
