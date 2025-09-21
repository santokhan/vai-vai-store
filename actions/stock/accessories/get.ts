'use server'

import { prisma } from '@/lib/prisma'
import {
  Brand,
  Dealer,
  Model,
  StockAccessories
} from '@/prisma/generated/client'

export interface AccIncBM extends StockAccessories {
  model: Model
  brand: Brand
  dealer?: Dealer
}

export async function getAccessoriesMany () {
  try {
    const accessories = await prisma.stockAccessories.findMany({
      include: {
        productType: true,
        brand: true,
        model: true,
        dealer: true
      }
    })
    if (accessories) {
      return accessories.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return b.createdAt.getTime() - a.createdAt.getTime()
        } else {
          return 1
        }
      })
    }
  } catch (error) {
    console.error('Data does not exist ', error)
  } finally {
    await prisma.$disconnect()
  }
}

export async function getAccessoriesByModel (
  modelId: string
): Promise<AccIncBM | undefined | null> {
  try {
    const founded = await prisma.stockAccessories.findFirst({
      where: {
        modelId,
        quantity: {
          gt: 0
        }
      },
      include: {
        brand: true,
        model: true
      }
    })
    return founded
  } catch (error) {
    console.error('Data does not exist ', error)
  } finally {
    await prisma.$disconnect()
  }
}

export async function getAccessoriesById (
  id: string
): Promise<AccIncBM | undefined> {
  try {
    const founded = await prisma.stockAccessories.findFirst({
      where: {
        id
      },
      include: {
        brand: true,
        model: true
      }
    })
    if (founded) {
      return founded
    }
  } catch (error) {
    console.error('Data does not exist ', error)
  } finally {
    await prisma.$disconnect()
  }
}
