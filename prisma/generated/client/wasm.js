
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.SellerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.ProductTypeScalarFieldEnum = {
  id: 'id',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  brandName: 'brandName',
  productTypeId: 'productTypeId',
  createdAt: 'createdAt'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  model: 'model',
  brandId: 'brandId',
  createdAt: 'createdAt'
};

exports.Prisma.StockAndroidScalarFieldEnum = {
  id: 'id',
  name: 'name',
  IMEI: 'IMEI',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  sold: 'sold',
  color: 'color',
  ram: 'ram',
  rom: 'rom',
  createdAt: 'createdAt'
};

exports.Prisma.StockButtonScalarFieldEnum = {
  id: 'id',
  name: 'name',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  quantity: 'quantity',
  color: 'color',
  createdAt: 'createdAt'
};

exports.Prisma.StockAccessoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  quantity: 'quantity',
  createdAt: 'createdAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  createdAt: 'createdAt'
};

exports.Prisma.SalesEntryScalarFieldEnum = {
  id: 'id',
  discount: 'discount',
  due: 'due',
  dueDate: 'dueDate',
  sellerId: 'sellerId',
  customerId: 'customerId',
  createdAt: 'createdAt',
  entity: 'entity'
};

exports.Prisma.ShopRentScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.InstallmentScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.OtherCostScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.HistoryAndroidStockScalarFieldEnum = {
  id: 'id',
  IMEI: 'IMEI',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  color: 'color',
  ram: 'ram',
  rom: 'rom',
  createdAt: 'createdAt'
};

exports.Prisma.HistoryButtonStockScalarFieldEnum = {
  id: 'id',
  name: 'name',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  quantity: 'quantity',
  color: 'color',
  createdAt: 'createdAt'
};

exports.Prisma.HistoryAccessoriesStockScalarFieldEnum = {
  id: 'id',
  modelId: 'modelId',
  brandId: 'brandId',
  productTypeId: 'productTypeId',
  purchasePrice: 'purchasePrice',
  sellingPrice: 'sellingPrice',
  quantity: 'quantity',
  createdAt: 'createdAt'
};

exports.Prisma.ReturnHistoryScalarFieldEnum = {
  id: 'id',
  productTypeId: 'productTypeId',
  stockId: 'stockId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Seller: 'Seller',
  ProductType: 'ProductType',
  Brand: 'Brand',
  Model: 'Model',
  StockAndroid: 'StockAndroid',
  StockButton: 'StockButton',
  StockAccessories: 'StockAccessories',
  Customer: 'Customer',
  SalesEntry: 'SalesEntry',
  ShopRent: 'ShopRent',
  Installment: 'Installment',
  OtherCost: 'OtherCost',
  HistoryAndroidStock: 'HistoryAndroidStock',
  HistoryButtonStock: 'HistoryButtonStock',
  HistoryAccessoriesStock: 'HistoryAccessoriesStock',
  ReturnHistory: 'ReturnHistory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
