'use server'

import { prisma } from "@/lib/prisma";

export interface Entity {
  stockId: string;
  quantity: number;
  price: number;
  type: string;
}

export async function dailyReportStat(date: string) {
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
      }
    });

    let totalSale = 0;
    let itemsSold = 0;
    const salesByCategory: Record<string, number> = {}

    data.forEach(entry => {
      // Cast entity JSON safely
      const entity = entry.entity as unknown; // Entity[]

      // Only process if entity is an array
      if (Array.isArray(entity)) {
        // Type assertion for each item
        (entity as Entity[]).forEach(item => {
          totalSale += item.price || 0;
          itemsSold += item.quantity || 0;

          if (salesByCategory[item.type]) {
            salesByCategory[item.type] += item.price || 0;
          } else {
            salesByCategory[item.type] = item.price || 0;
          }
        });
      }
    });

    const profit = totalSale * 0.18; // example
    const dueAmount = data.reduce((sum, entry) => sum + (entry.due || 0), 0);

    return {
      totalSale,
      itemsSold,
      profit,
      dueAmount,
      salesByCategory
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
