
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
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
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



/**
 * Enums
 */
exports.Prisma.ProductTypeScalarFieldEnum = {
  id: 'id',
  type: 'type'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  brandName: 'brandName',
  productTypeId: 'productTypeId'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  model: 'model',
  brandId: 'brandId'
};

exports.Prisma.SpecificationsScalarFieldEnum = {
  id: 'id',
  color: 'color',
  storage: 'storage',
  phoneType: 'phoneType',
  modelId: 'modelId'
};

exports.Prisma.InStockScalarFieldEnum = {
  id: 'id',
  price: 'price',
  quantity: 'quantity',
  IMEI: 'IMEI',
  modelId: 'modelId',
  specificationsId: 'specificationsId'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  modelId: 'modelId',
  specificationsId: 'specificationsId'
};

exports.Prisma.SalesEntryScalarFieldEnum = {
  id: 'id',
  IMEI: 'IMEI',
  price: 'price',
  modelId: 'modelId',
  customerId: 'customerId',
  specificationsId: 'specificationsId'
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
  ProductType: 'ProductType',
  Brand: 'Brand',
  Model: 'Model',
  Specifications: 'Specifications',
  InStock: 'InStock',
  Customer: 'Customer',
  SalesEntry: 'SalesEntry'
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
      "value": "H:\\web-development\\mobile-store\\next\\prisma\\generated\\client",
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
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MONGODB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICAgIHByb3ZpZGVyID0gIm1vbmdvZGIiDQogICAgLy8gdXJsICAgICAgPSAibW9uZ29kYitzcnY6Ly9zYW50b2toYW46NzI2ODY1NDI2QGNsdXN0ZXIwLmVhdTJ2Lm1vbmdvZGIubmV0L21vYmlsZS1zdG9yZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkiDQogICAgdXJsICAgICAgPSBlbnYoIk1PTkdPREJfVVJMIikNCn0NCg0KbW9kZWwgUHJvZHVjdFR5cGUgew0KICAgIGlkICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgdHlwZSAgU3RyaW5nDQogICAgQnJhbmQgQnJhbmRbXQ0KfQ0KDQptb2RlbCBCcmFuZCB7DQogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgICBicmFuZE5hbWUgICAgIFN0cmluZw0KICAgIHByb2R1Y3RUeXBlICAgUHJvZHVjdFR5cGUgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHByb2R1Y3RUeXBlSWQgU3RyaW5nICAgICAgQGRiLk9iamVjdElkDQogICAgTW9kZWwgICAgICAgICBNb2RlbFtdDQp9DQoNCm1vZGVsIE1vZGVsIHsNCiAgICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIG1vZGVsICAgICAgICAgIFN0cmluZw0KICAgIGJyYW5kICAgICAgICAgIEJyYW5kICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JyYW5kSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIGJyYW5kSWQgICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiLk9iamVjdElkDQogICAgU3BlY2lmaWNhdGlvbnMgU3BlY2lmaWNhdGlvbnNbXQ0KICAgIEluU3RvY2sgICAgICAgIEluU3RvY2tbXQ0KICAgIFNhbGVzRW50cnkgICAgIFNhbGVzRW50cnlbXQ0KICAgIEN1c3RvbWVyICAgICAgIEN1c3RvbWVyW10NCn0NCg0KbW9kZWwgU3BlY2lmaWNhdGlvbnMgew0KICAgIGlkICAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIGNvbG9yICAgICAgU3RyaW5nDQogICAgc3RvcmFnZSAgICBTdHJpbmcNCiAgICBwaG9uZVR5cGUgIFN0cmluZw0KICAgIG1vZGVsICAgICAgTW9kZWwgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttb2RlbElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBtb2RlbElkICAgIFN0cmluZyAgICAgICBAZGIuT2JqZWN0SWQNCiAgICBJblN0b2NrICAgIEluU3RvY2tbXQ0KICAgIFNhbGVzRW50cnkgU2FsZXNFbnRyeVtdDQogICAgQ3VzdG9tZXIgICBDdXN0b21lcltdDQp9DQoNCi8vIFdlIHdpbGwgaW5wdXQgSU1FSSB3aGVuIGFkZGluZyBwcm9kdWN0IHRvIHN0b2NrDQptb2RlbCBJblN0b2NrIHsNCiAgICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIHByaWNlICAgICAgICAgICAgU3RyaW5nDQogICAgcXVhbnRpdHkgICAgICAgICBTdHJpbmcNCiAgICBJTUVJICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEB1bmlxdWUNCiAgICBtb2RlbCAgICAgICAgICAgIE1vZGVsICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttb2RlbElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBtb2RlbElkICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5PYmplY3RJZA0KICAgIHNwZWNpZmljYXRpb25zICAgU3BlY2lmaWNhdGlvbnMgQHJlbGF0aW9uKGZpZWxkczogW3NwZWNpZmljYXRpb25zSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHNwZWNpZmljYXRpb25zSWQgU3RyaW5nICAgICAgICAgQGRiLk9iamVjdElkDQp9DQoNCi8vIFBhcnQgb2YgU2FsZXNFbnRyeQ0KbW9kZWwgQ3VzdG9tZXIgew0KICAgIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIG5hbWUgICAgICAgICAgICAgU3RyaW5nDQogICAgZW1haWwgICAgICAgICAgICBTdHJpbmcNCiAgICBwaG9uZSAgICAgICAgICAgIFN0cmluZw0KICAgIE1vZGVsICAgICAgICAgICAgTW9kZWw/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttb2RlbElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBtb2RlbElkICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuT2JqZWN0SWQNCiAgICBTcGVjaWZpY2F0aW9ucyAgIFNwZWNpZmljYXRpb25zPyBAcmVsYXRpb24oZmllbGRzOiBbc3BlY2lmaWNhdGlvbnNJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgc3BlY2lmaWNhdGlvbnNJZCBTdHJpbmc/ICAgICAgICAgQGRiLk9iamVjdElkDQogICAgU2FsZXNFbnRyeSAgICAgICBTYWxlc0VudHJ5W10NCn0NCg0KbW9kZWwgU2FsZXNFbnRyeSB7DQogICAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgSU1FSSAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQ0KICAgIHByaWNlICAgICAgICAgICAgU3RyaW5nDQogICAgbW9kZWwgICAgICAgICAgICBNb2RlbCAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21vZGVsSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG1vZGVsSWQgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBkYi5PYmplY3RJZA0KICAgIGN1c3RvbWVyICAgICAgICAgQ3VzdG9tZXIgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjdXN0b21lcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBjdXN0b21lcklkICAgICAgIFN0cmluZyAgICAgICAgICBAZGIuT2JqZWN0SWQNCiAgICBTcGVjaWZpY2F0aW9ucyAgIFNwZWNpZmljYXRpb25zPyBAcmVsYXRpb24oZmllbGRzOiBbc3BlY2lmaWNhdGlvbnNJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgc3BlY2lmaWNhdGlvbnNJZCBTdHJpbmc/ICAgICAgICAgQGRiLk9iamVjdElkDQp9DQo=",
  "inlineSchemaHash": "3ebea9e183b1febb80d36a64d103629af8a7fbc1d3ac9af2539b13bff926293e",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ProductType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Brand\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToProductType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brand\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"relationName\":\"BrandToProductType\",\"relationFromFields\":[\"productTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Model\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"BrandToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Model\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToModel\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Specifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Specifications\",\"relationName\":\"ModelToSpecifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InStock\",\"relationName\":\"InStockToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"ModelToSalesEntry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Specifications\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"ModelToSpecifications\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InStock\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InStock\",\"relationName\":\"InStockToSpecifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"SalesEntryToSpecifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToSpecifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InStock\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMEI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"InStockToModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specifications\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Specifications\",\"relationName\":\"InStockToSpecifications\",\"relationFromFields\":[\"specificationsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specificationsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"CustomerToModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Specifications\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Specifications\",\"relationName\":\"CustomerToSpecifications\",\"relationFromFields\":[\"specificationsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specificationsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SalesEntry\",\"relationName\":\"CustomerToSalesEntry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SalesEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMEI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Model\",\"relationName\":\"ModelToSalesEntry\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToSalesEntry\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Specifications\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Specifications\",\"relationName\":\"SalesEntryToSpecifications\",\"relationFromFields\":[\"specificationsId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specificationsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    MONGODB_URL: typeof globalThis !== 'undefined' && globalThis['MONGODB_URL'] || typeof process !== 'undefined' && process.env && process.env.MONGODB_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

