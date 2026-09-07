
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
  createdAt: 'createdAt',
  dealerId: 'dealerId'
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
  createdAt: 'createdAt',
  dealerId: 'dealerId'
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
  createdAt: 'createdAt',
  dealerId: 'dealerId'
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

exports.Prisma.SalesItemScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  stockId: 'stockId',
  typeId: 'typeId',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  discount: 'discount',
  total: 'total',
  createdAt: 'createdAt'
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
  stockId: 'stockId',
  salesId: 'salesId',
  reason: 'reason',
  createdAt: 'createdAt'
};

exports.Prisma.DealerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  phoneNumber: 'phoneNumber',
  location: 'location',
  createdAt: 'createdAt'
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
  SalesItem: 'SalesItem',
  ShopRent: 'ShopRent',
  Installment: 'Installment',
  OtherCost: 'OtherCost',
  HistoryAndroidStock: 'HistoryAndroidStock',
  HistoryButtonStock: 'HistoryButtonStock',
  HistoryAccessoriesStock: 'HistoryAccessoriesStock',
  ReturnHistory: 'ReturnHistory',
  Dealer: 'Dealer'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\local-job\\vai-vai-store\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MONGODB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICAgIG91dHB1dCAgICAgICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KICAgIGJpbmFyeVRhcmdldHMgPSBbIm5hdGl2ZSIsICJyaGVsLW9wZW5zc2wtMS4wLngiXQ0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgICBwcm92aWRlciA9ICJtb25nb2RiIg0KICAgIHVybCAgICAgID0gZW52KCJNT05HT0RCX1VSTCIpDQp9DQoNCm1vZGVsIFVzZXIgew0KICAgIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgZW1haWwgICAgIFN0cmluZyAgICBAdW5pcXVlDQogICAgcm9sZSAgICAgIFN0cmluZw0KICAgIGNyZWF0ZWRBdCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpDQp9DQoNCm1vZGVsIFNlbGxlciB7DQogICAgaWQgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgbmFtZSAgICAgICBTdHJpbmcNCiAgICBTYWxlc0VudHJ5IFNhbGVzRW50cnlbXQ0KICAgIGNyZWF0ZWRBdCAgRGF0ZVRpbWU/ICAgIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBQcm9kdWN0VHlwZSB7DQogICAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICB0eXBlICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBCcmFuZCAgICAgICAgICAgICAgICAgICBCcmFuZFtdDQogICAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgICBTdG9ja0FuZHJvaWQgICAgICAgICAgICBTdG9ja0FuZHJvaWRbXQ0KICAgIFN0b2NrQnV0dG9uICAgICAgICAgICAgIFN0b2NrQnV0dG9uW10NCiAgICBTdG9ja0FjY2Vzc29yaWVzICAgICAgICBTdG9ja0FjY2Vzc29yaWVzW10NCiAgICBIaXN0b3J5QW5kcm9pZFN0b2NrICAgICBIaXN0b3J5QW5kcm9pZFN0b2NrW10NCiAgICBIaXN0b3J5QnV0dG9uU3RvY2sgICAgICBIaXN0b3J5QnV0dG9uU3RvY2tbXQ0KICAgIEhpc3RvcnlBY2Nlc3Nvcmllc1N0b2NrIEhpc3RvcnlBY2Nlc3Nvcmllc1N0b2NrW10NCiAgICBSZXR1cm5IaXN0b3J5ICAgICAgICAgICBSZXR1cm5IaXN0b3J5W10NCiAgICBTYWxlc0l0ZW0gICAgICAgICAgICAgICBTYWxlc0l0ZW1bXQ0KfQ0KDQptb2RlbCBCcmFuZCB7DQogICAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBicmFuZE5hbWUgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBwcm9kdWN0VHlwZSAgICAgICAgICAgICBQcm9kdWN0VHlwZSAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBwcm9kdWN0VHlwZUlkICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5PYmplY3RJZA0KICAgIE1vZGVsICAgICAgICAgICAgICAgICAgIE1vZGVsW10NCiAgICBjcmVhdGVkQXQgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICAgIFN0b2NrQW5kcm9pZCAgICAgICAgICAgIFN0b2NrQW5kcm9pZFtdDQogICAgU3RvY2tCdXR0b24gICAgICAgICAgICAgU3RvY2tCdXR0b25bXQ0KICAgIFN0b2NrQWNjZXNzb3JpZXMgICAgICAgIFN0b2NrQWNjZXNzb3JpZXNbXQ0KICAgIEhpc3RvcnlBbmRyb2lkU3RvY2sgICAgIEhpc3RvcnlBbmRyb2lkU3RvY2tbXQ0KICAgIEhpc3RvcnlCdXR0b25TdG9jayAgICAgIEhpc3RvcnlCdXR0b25TdG9ja1tdDQogICAgSGlzdG9yeUFjY2Vzc29yaWVzU3RvY2sgSGlzdG9yeUFjY2Vzc29yaWVzU3RvY2tbXQ0KfQ0KDQptb2RlbCBNb2RlbCB7DQogICAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBtb2RlbCAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBicmFuZCAgICAgICAgICAgICAgICAgICBCcmFuZCAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticmFuZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBicmFuZElkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5PYmplY3RJZA0KICAgIFN0cm9ja0FuZHJvaWQgICAgICAgICAgIFN0b2NrQW5kcm9pZFtdDQogICAgU3Ryb2NrQnV0dG9uICAgICAgICAgICAgU3RvY2tCdXR0b25bXQ0KICAgIFN0cm9ja0FjY2Vzc29yaWVzICAgICAgIFN0b2NrQWNjZXNzb3JpZXNbXQ0KICAgIEhpc3RvcnlBbmRyb2lkU3RvY2sgICAgIEhpc3RvcnlBbmRyb2lkU3RvY2tbXQ0KICAgIEhpc3RvcnlCdXR0b25TdG9jayAgICAgIEhpc3RvcnlCdXR0b25TdG9ja1tdDQogICAgSGlzdG9yeUFjY2Vzc29yaWVzU3RvY2sgSGlzdG9yeUFjY2Vzc29yaWVzU3RvY2tbXQ0KICAgIGNyZWF0ZWRBdCAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpDQp9DQoNCi8vIG1vZGVsIEluU3RvY2sgew0KLy8gICAgIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQovLyAgICAgbmFtZSAgICAgICAgICBTdHJpbmcNCi8vICAgICBJTUVJICAgICAgICAgIFN0cmluZyAgICAgIEB1bmlxdWUNCi8vICAgICBtb2RlbCAgICAgICAgIE1vZGVsICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttb2RlbElkXSwgcmVmZXJlbmNlczogW2lkXSkNCi8vICAgICBtb2RlbElkICAgICAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KLy8gICAgIGJyYW5kICAgICAgICAgQnJhbmQgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JyYW5kSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICAgIGJyYW5kSWQgICAgICAgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQovLyAgICAgcHJvZHVjdFR5cGUgICBQcm9kdWN0VHlwZSBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdFR5cGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQovLyAgICAgcHJvZHVjdFR5cGVJZCBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCi8vICAgICBwdXJjaGFzZVByaWNlIEludA0KLy8gICAgIHByaWNlICAgICAgICAgSW50DQovLyAgICAgc29sZCAgICAgICAgICBCb29sZWFuICAgICBAZGVmYXVsdChmYWxzZSkNCi8vICAgICBjb2xvciAgICAgICAgIFN0cmluZw0KLy8gICAgIHJhbSAgICAgICAgICAgU3RyaW5nPw0KLy8gICAgIHJvbSAgICAgICAgICAgU3RyaW5nPw0KLy8gICAgIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWU/ICAgQGRlZmF1bHQobm93KCkpDQovLyB9DQoNCm1vZGVsIFN0b2NrQW5kcm9pZCB7DQogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBuYW1lICAgICAgICAgIFN0cmluZw0KICAgIElNRUkgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZQ0KICAgIG1vZGVsICAgICAgICAgTW9kZWwgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21vZGVsSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG1vZGVsSWQgICAgICAgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgYnJhbmQgICAgICAgICBCcmFuZCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJhbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgYnJhbmRJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBwcm9kdWN0VHlwZSAgIFByb2R1Y3RUeXBlIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBwcm9kdWN0VHlwZUlkIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHB1cmNoYXNlUHJpY2UgSW50DQogICAgc2VsbGluZ1ByaWNlICBJbnQNCiAgICBzb2xkICAgICAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KGZhbHNlKQ0KICAgIGNvbG9yICAgICAgICAgU3RyaW5nDQogICAgcmFtICAgICAgICAgICBTdHJpbmc/DQogICAgcm9tICAgICAgICAgICBTdHJpbmc/DQogICAgY3JlYXRlZEF0ICAgICBEYXRlVGltZT8gICBAZGVmYXVsdChub3coKSkNCiAgICBkZWFsZXIgICAgICAgIERlYWxlcj8gICAgIEByZWxhdGlvbigiRGVhbGVyU3RvY2tBbmRyb2lkIiwgZmllbGRzOiBbZGVhbGVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIGRlYWxlcklkICAgICAgU3RyaW5nPyAgICAgQGRiLk9iamVjdElkDQp9DQoNCm1vZGVsIFN0b2NrQnV0dG9uIHsNCiAgICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIG5hbWUgICAgICAgICAgU3RyaW5nDQogICAgbW9kZWwgICAgICAgICBNb2RlbCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kZWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgbW9kZWxJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBicmFuZCAgICAgICAgIEJyYW5kICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticmFuZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBicmFuZElkICAgICAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHByb2R1Y3RUeXBlICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHByb2R1Y3RUeXBlSWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgcHVyY2hhc2VQcmljZSBJbnQNCiAgICBzZWxsaW5nUHJpY2UgIEludA0KICAgIHF1YW50aXR5ICAgICAgSW50DQogICAgY29sb3IgICAgICAgICBTdHJpbmcNCiAgICBjcmVhdGVkQXQgICAgIERhdGVUaW1lPyAgIEBkZWZhdWx0KG5vdygpKQ0KICAgIGRlYWxlciAgICAgICAgRGVhbGVyPyAgICAgQHJlbGF0aW9uKCJEZWFsZXJTdG9ja0J1dHRvbiIsIGZpZWxkczogW2RlYWxlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBkZWFsZXJJZCAgICAgIFN0cmluZz8gICAgIEBkYi5PYmplY3RJZA0KfQ0KDQptb2RlbCBTdG9ja0FjY2Vzc29yaWVzIHsNCiAgICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIG5hbWUgICAgICAgICAgU3RyaW5nDQogICAgbW9kZWwgICAgICAgICBNb2RlbCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kZWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgbW9kZWxJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBicmFuZCAgICAgICAgIEJyYW5kICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticmFuZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBicmFuZElkICAgICAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHByb2R1Y3RUeXBlICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHByb2R1Y3RUeXBlSWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgcHVyY2hhc2VQcmljZSBJbnQNCiAgICBzZWxsaW5nUHJpY2UgIEludA0KICAgIHF1YW50aXR5ICAgICAgSW50DQogICAgY3JlYXRlZEF0ICAgICBEYXRlVGltZT8gICBAZGVmYXVsdChub3coKSkNCiAgICBkZWFsZXIgICAgICAgIERlYWxlcj8gICAgIEByZWxhdGlvbigiRGVhbGVyU3RvY2tBY2Nlc3NvcmllcyIsIGZpZWxkczogW2RlYWxlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBkZWFsZXJJZCAgICAgIFN0cmluZz8gICAgIEBkYi5PYmplY3RJZA0KfQ0KDQptb2RlbCBDdXN0b21lciB7DQogICAgaWQgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgbmFtZSAgICAgICBTdHJpbmcNCiAgICBlbWFpbCAgICAgIFN0cmluZz8NCiAgICBwaG9uZSAgICAgIFN0cmluZz8NCiAgICBTYWxlc0VudHJ5IFNhbGVzRW50cnlbXQ0KICAgIGNyZWF0ZWRBdCAgRGF0ZVRpbWU/ICAgIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBTYWxlc0VudHJ5IHsNCiAgICBpZCAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIGRpc2NvdW50ICAgSW50DQogICAgZHVlICAgICAgICBJbnQNCiAgICBkdWVEYXRlICAgIERhdGVUaW1lPyAgIEBkZWZhdWx0KG5vdygpKQ0KICAgIHNlbGxlciAgICAgU2VsbGVyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NlbGxlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBzZWxsZXJJZCAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIGN1c3RvbWVyICAgQ3VzdG9tZXIgICAgQHJlbGF0aW9uKGZpZWxkczogW2N1c3RvbWVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIGN1c3RvbWVySWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkNCiAgICBlbnRpdHkgICAgIEpzb24NCiAgICBzYWxlc0l0ZW1zIFNhbGVzSXRlbVtdDQp9DQoNCm1vZGVsIFNhbGVzSXRlbSB7DQogICAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KDQogICAgc2FsZSAgIFNhbGVzRW50cnkgQHJlbGF0aW9uKGZpZWxkczogW3NhbGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgc2FsZUlkIFN0cmluZyAgICAgQGRiLk9iamVjdElkDQoNCiAgICBzdG9ja0lkIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHR5cGUgICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3R5cGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgdHlwZUlkICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQgLy8gUmVmZXJlbmNlIHRvIFByb2R1Y3RUeXBlDQoNCiAgICBxdWFudGl0eSAgSW50DQogICAgdW5pdFByaWNlIEZsb2F0DQogICAgZGlzY291bnQgIEZsb2F0PyAvLyBpdGVtLWxldmVsIGRpc2NvdW50IChvcHRpb25hbCkNCg0KICAgIHRvdGFsIEZsb2F0IC8vIHF1YW50aXR5ICogdW5pdFByaWNlIC0gZGlzY291bnQNCg0KICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgU2hvcFJlbnQgew0KICAgIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBhbW91bnQgICAgSW50DQogICAgY29tbWVudCAgIFN0cmluZw0KICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgSW5zdGFsbG1lbnQgew0KICAgIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBhbW91bnQgICAgSW50DQogICAgY29tbWVudCAgIFN0cmluZw0KICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgT3RoZXJDb3N0IHsNCiAgICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgYW1vdW50ICAgIEludA0KICAgIGNvbW1lbnQgICBTdHJpbmcNCiAgICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQp9DQoNCi8vIEhpc3RvcnkgVGFibGUNCm1vZGVsIEhpc3RvcnlBbmRyb2lkU3RvY2sgew0KICAgIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgSU1FSSAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlDQogICAgbW9kZWwgICAgICAgICBNb2RlbCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kZWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgbW9kZWxJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBicmFuZCAgICAgICAgIEJyYW5kICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticmFuZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBicmFuZElkICAgICAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHByb2R1Y3RUeXBlICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHByb2R1Y3RUeXBlSWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgcHVyY2hhc2VQcmljZSBJbnQNCiAgICBzZWxsaW5nUHJpY2UgIEludA0KICAgIGNvbG9yICAgICAgICAgU3RyaW5nDQogICAgcmFtICAgICAgICAgICBJbnQNCiAgICByb20gICAgICAgICAgIEludA0KICAgIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQp9DQoNCm1vZGVsIEhpc3RvcnlCdXR0b25TdG9jayB7DQogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBuYW1lICAgICAgICAgIFN0cmluZw0KICAgIG1vZGVsICAgICAgICAgTW9kZWwgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21vZGVsSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG1vZGVsSWQgICAgICAgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgYnJhbmQgICAgICAgICBCcmFuZCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJhbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgYnJhbmRJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBwcm9kdWN0VHlwZSAgIFByb2R1Y3RUeXBlIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBwcm9kdWN0VHlwZUlkIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHB1cmNoYXNlUHJpY2UgSW50DQogICAgc2VsbGluZ1ByaWNlICBJbnQNCiAgICBxdWFudGl0eSAgICAgIEludA0KICAgIGNvbG9yICAgICAgICAgU3RyaW5nDQogICAgY3JlYXRlZEF0ICAgICBEYXRlVGltZT8gICBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgSGlzdG9yeUFjY2Vzc29yaWVzU3RvY2sgew0KICAgIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgbW9kZWwgICAgICAgICBNb2RlbCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kZWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgbW9kZWxJZCAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQNCiAgICBicmFuZCAgICAgICAgIEJyYW5kICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticmFuZElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBicmFuZElkICAgICAgIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHByb2R1Y3RUeXBlICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHByb2R1Y3RUeXBlSWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgcHVyY2hhc2VQcmljZSBJbnQNCiAgICBzZWxsaW5nUHJpY2UgIEludA0KICAgIHF1YW50aXR5ICAgICAgSW50DQogICAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkNCn0NCg0KbW9kZWwgUmV0dXJuSGlzdG9yeSB7DQogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBwcm9kdWN0VHlwZSAgIFByb2R1Y3RUeXBlIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBwcm9kdWN0VHlwZUlkIFN0cmluZyAgICAgIEBkYi5PYmplY3RJZA0KICAgIHN0b2NrSWQgICAgICAgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgc2FsZXNJZCAgICAgICBTdHJpbmc/ICAgICBAZGIuT2JqZWN0SWQNCiAgICByZWFzb24gICAgICAgIFN0cmluZz8NCiAgICBjcmVhdGVkQXQgICAgIERhdGVUaW1lPyAgIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBEZWFsZXIgew0KICAgIGlkICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIG5hbWUgICAgICAgIFN0cmluZw0KICAgIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgICBwaG9uZU51bWJlciBTdHJpbmc/IC8vIE9wdGlvbmFsIHBob25lIG51bWJlcg0KICAgIGxvY2F0aW9uICAgIFN0cmluZz8gLy8gT3B0aW9uYWwgbG9jYXRpb24NCiAgICBjcmVhdGVkQXQgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCg0KICAgIC8vIE9wdGlvbmFsOiByZWxhdGlvbiB0byBTYWxlc0VudHJ5IG9yIFN0b2NrIGlmIHlvdSB3YW50IHRvIHRyYWNrIHB1cmNoYXNlcw0KICAgIFN0b2NrQW5kcm9pZCAgICAgU3RvY2tBbmRyb2lkW10gICAgIEByZWxhdGlvbigiRGVhbGVyU3RvY2tBbmRyb2lkIikNCiAgICBTdG9ja0J1dHRvbiAgICAgIFN0b2NrQnV0dG9uW10gICAgICBAcmVsYXRpb24oIkRlYWxlclN0b2NrQnV0dG9uIikNCiAgICBTdG9ja0FjY2Vzc29yaWVzIFN0b2NrQWNjZXNzb3JpZXNbXSBAcmVsYXRpb24oIkRlYWxlclN0b2NrQWNjZXNzb3JpZXMiKQ0KfQ0K",
  "inlineSchemaHash": "f9bb7c19c03cd0a61f6bcb2d4c4bb6b4f4ac20a61233989f6e5b7155bc14c077",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Seller\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"SalesEntryToSeller\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Brand\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToProductType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAndroid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAndroid\",\"relationName\":\"ProductTypeToStockAndroid\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockButton\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockButton\",\"relationName\":\"ProductTypeToStockButton\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAccessories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAccessories\",\"relationName\":\"ProductTypeToStockAccessories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAndroidStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAndroidStock\",\"relationName\":\"HistoryAndroidStockToProductType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryButtonStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryButtonStock\",\"relationName\":\"HistoryButtonStockToProductType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAccessoriesStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAccessoriesStock\",\"relationName\":\"HistoryAccessoriesStockToProductType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReturnHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReturnHistory\",\"relationName\":\"ProductTypeToReturnHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesItem\",\"relationName\":\"ProductTypeToSalesItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brand\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"BrandToProductType\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Model\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"BrandToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAndroid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAndroid\",\"relationName\":\"BrandToStockAndroid\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockButton\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockButton\",\"relationName\":\"BrandToStockButton\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAccessories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAccessories\",\"relationName\":\"BrandToStockAccessories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAndroidStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAndroidStock\",\"relationName\":\"BrandToHistoryAndroidStock\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryButtonStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryButtonStock\",\"relationName\":\"BrandToHistoryButtonStock\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAccessoriesStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAccessoriesStock\",\"relationName\":\"BrandToHistoryAccessoriesStock\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Model\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToModel\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StrockAndroid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAndroid\",\"relationName\":\"ModelToStockAndroid\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StrockButton\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockButton\",\"relationName\":\"ModelToStockButton\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StrockAccessories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAccessories\",\"relationName\":\"ModelToStockAccessories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAndroidStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAndroidStock\",\"relationName\":\"HistoryAndroidStockToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryButtonStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryButtonStock\",\"relationName\":\"HistoryButtonStockToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HistoryAccessoriesStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoryAccessoriesStock\",\"relationName\":\"HistoryAccessoriesStockToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockAndroid\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMEI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"ModelToStockAndroid\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToStockAndroid\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"ProductTypeToStockAndroid\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"relationName\":\"DealerStockAndroid\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockButton\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"ModelToStockButton\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToStockButton\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"ProductTypeToStockButton\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"relationName\":\"DealerStockButton\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockAccessories\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"ModelToStockAccessories\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToStockAccessories\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"ProductTypeToStockAccessories\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"relationName\":\"DealerStockAccessories\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"CustomerToSalesEntry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SalesEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"due\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Seller\",\"relationName\":\"SalesEntryToSeller\",\"relationFromFields\":[\"sellerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToSalesEntry\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salesItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesItem\",\"relationName\":\"SalesEntryToSalesItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SalesItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sale\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"SalesEntryToSalesItem\",\"relationFromFields\":[\"saleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"ProductTypeToSalesItem\",\"relationFromFields\":[\"typeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unitPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShopRent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Installment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OtherCost\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HistoryAndroidStock\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMEI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"HistoryAndroidStockToModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToHistoryAndroidStock\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"HistoryAndroidStockToProductType\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HistoryButtonStock\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"HistoryButtonStockToModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToHistoryButtonStock\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"HistoryButtonStockToProductType\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HistoryAccessoriesStock\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"HistoryAccessoriesStockToModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToHistoryAccessoriesStock\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"HistoryAccessoriesStockToProductType\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchasePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellingPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReturnHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"ProductTypeToReturnHistory\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dealer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAndroid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAndroid\",\"relationName\":\"DealerStockAndroid\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockButton\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockButton\",\"relationName\":\"DealerStockButton\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StockAccessories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockAccessories\",\"relationName\":\"DealerStockAccessories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.0.x.so.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-rhel-openssl-1.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
