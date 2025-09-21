export type StockAndroidPOST = {
  name: string
  IMEI: string
  modelId: string
  brandId: string
  productTypeId: string
  purchasePrice: number
  sellingPrice: number
  color: string
  ram: string | null
  rom: string | null
  dealerId?: string
}

export type StockButtonPOST = {
  name: string
  modelId: string
  brandId: string
  productTypeId: string
  purchasePrice: number
  sellingPrice: number
  color: string
  quantity: number
  dealerId?: string
}

export type StockAccessoriesPOST = {
  name: string
  modelId: string
  brandId: string
  productTypeId: string
  purchasePrice: number
  sellingPrice: number
  quantity: number
  dealerId?: string
}