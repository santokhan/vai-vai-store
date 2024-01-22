
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Seller
 * 
 */
export type Seller = $Result.DefaultSelection<Prisma.$SellerPayload>
/**
 * Model ProductType
 * 
 */
export type ProductType = $Result.DefaultSelection<Prisma.$ProductTypePayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model InStock
 * 
 */
export type InStock = $Result.DefaultSelection<Prisma.$InStockPayload>
/**
 * Model SalesEntry
 * 
 */
export type SalesEntry = $Result.DefaultSelection<Prisma.$SalesEntryPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.seller`: Exposes CRUD operations for the **Seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.SellerDelegate<ExtArgs>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<ExtArgs>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs>;

  /**
   * `prisma.inStock`: Exposes CRUD operations for the **InStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InStocks
    * const inStocks = await prisma.inStock.findMany()
    * ```
    */
  get inStock(): Prisma.InStockDelegate<ExtArgs>;

  /**
   * `prisma.salesEntry`: Exposes CRUD operations for the **SalesEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesEntries
    * const salesEntries = await prisma.salesEntry.findMany()
    * ```
    */
  get salesEntry(): Prisma.SalesEntryDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Seller: 'Seller',
    ProductType: 'ProductType',
    Brand: 'Brand',
    Model: 'Model',
    InStock: 'InStock',
    SalesEntry: 'SalesEntry',
    Customer: 'Customer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'seller' | 'productType' | 'brand' | 'model' | 'inStock' | 'salesEntry' | 'customer'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Seller: {
        payload: Prisma.$SellerPayload<ExtArgs>
        fields: Prisma.SellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findFirst: {
            args: Prisma.SellerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findMany: {
            args: Prisma.SellerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          create: {
            args: Prisma.SellerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          createMany: {
            args: Prisma.SellerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SellerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          update: {
            args: Prisma.SellerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          deleteMany: {
            args: Prisma.SellerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SellerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SellerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.SellerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SellerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SellerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SellerCountArgs<ExtArgs>,
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      ProductType: {
        payload: Prisma.$ProductTypePayload<ExtArgs>
        fields: Prisma.ProductTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findFirst: {
            args: Prisma.ProductTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findMany: {
            args: Prisma.ProductTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>[]
          }
          create: {
            args: Prisma.ProductTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          createMany: {
            args: Prisma.ProductTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          update: {
            args: Prisma.ProductTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          deleteMany: {
            args: Prisma.ProductTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          aggregate: {
            args: Prisma.ProductTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductType>
          }
          groupBy: {
            args: Prisma.ProductTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductTypeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductTypeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ProductTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductTypeCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BrandFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BrandAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ModelFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ModelAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>,
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      InStock: {
        payload: Prisma.$InStockPayload<ExtArgs>
        fields: Prisma.InStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InStockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InStockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          findFirst: {
            args: Prisma.InStockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InStockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          findMany: {
            args: Prisma.InStockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>[]
          }
          create: {
            args: Prisma.InStockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          createMany: {
            args: Prisma.InStockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InStockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          update: {
            args: Prisma.InStockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          deleteMany: {
            args: Prisma.InStockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InStockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InStockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InStockPayload>
          }
          aggregate: {
            args: Prisma.InStockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInStock>
          }
          groupBy: {
            args: Prisma.InStockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InStockGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InStockFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.InStockAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.InStockCountArgs<ExtArgs>,
            result: $Utils.Optional<InStockCountAggregateOutputType> | number
          }
        }
      }
      SalesEntry: {
        payload: Prisma.$SalesEntryPayload<ExtArgs>
        fields: Prisma.SalesEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          findFirst: {
            args: Prisma.SalesEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          findMany: {
            args: Prisma.SalesEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>[]
          }
          create: {
            args: Prisma.SalesEntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          createMany: {
            args: Prisma.SalesEntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SalesEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          update: {
            args: Prisma.SalesEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          deleteMany: {
            args: Prisma.SalesEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SalesEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SalesEntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SalesEntryPayload>
          }
          aggregate: {
            args: Prisma.SalesEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSalesEntry>
          }
          groupBy: {
            args: Prisma.SalesEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SalesEntryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SalesEntryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SalesEntryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SalesEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<SalesEntryCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CustomerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CustomerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SellerCountOutputType
   */

  export type SellerCountOutputType = {
    SalesEntry: number
  }

  export type SellerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesEntry?: boolean | SellerCountOutputTypeCountSalesEntryArgs
  }

  // Custom InputTypes

  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerCountOutputType
     */
    select?: SellerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeCountSalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesEntryWhereInput
  }



  /**
   * Count Type ProductTypeCountOutputType
   */

  export type ProductTypeCountOutputType = {
    Brand: number
    InStock: number
  }

  export type ProductTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | ProductTypeCountOutputTypeCountBrandArgs
    InStock?: boolean | ProductTypeCountOutputTypeCountInStockArgs
  }

  // Custom InputTypes

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTypeCountOutputType
     */
    select?: ProductTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
  }


  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountInStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InStockWhereInput
  }



  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Model: number
    InStock: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Model?: boolean | BrandCountOutputTypeCountModelArgs
    InStock?: boolean | BrandCountOutputTypeCountInStockArgs
  }

  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountInStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InStockWhereInput
  }



  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    InStock: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InStock?: boolean | ModelCountOutputTypeCountInStockArgs
  }

  // Custom InputTypes

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountInStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InStockWhereInput
  }



  /**
   * Count Type InStockCountOutputType
   */

  export type InStockCountOutputType = {
    SalesEntry: number
  }

  export type InStockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesEntry?: boolean | InStockCountOutputTypeCountSalesEntryArgs
  }

  // Custom InputTypes

  /**
   * InStockCountOutputType without action
   */
  export type InStockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStockCountOutputType
     */
    select?: InStockCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InStockCountOutputType without action
   */
  export type InStockCountOutputTypeCountSalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesEntryWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    SalesEntry: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesEntry?: boolean | CustomerCountOutputTypeCountSalesEntryArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesEntryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    role: string
    createdAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string
      createdAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SellerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SellerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SellerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SellerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SellerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seller to aggregate.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type SellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithAggregationInput | SellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: SellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    id: string
    name: string
    createdAt: Date | null
    _count: SellerCountAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type SellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    SalesEntry?: boolean | Seller$SalesEntryArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesEntry?: boolean | Seller$SalesEntryArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seller"
    objects: {
      SalesEntry: Prisma.$SalesEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date | null
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }


  type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = $Result.GetResult<Prisma.$SellerPayload, S>

  type SellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SellerCountAggregateInputType | true
    }

  export interface SellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seller'], meta: { name: 'Seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {SellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SellerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Seller that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SellerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerFindFirstArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerWithIdOnly = await prisma.seller.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SellerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Seller.
     * @param {SellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
    **/
    create<T extends SellerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SellerCreateArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sellers.
     *     @param {SellerCreateManyArgs} args - Arguments to create many Sellers.
     *     @example
     *     // Create many Sellers
     *     const seller = await prisma.seller.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SellerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seller.
     * @param {SellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
    **/
    delete<T extends SellerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SellerDeleteArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Seller.
     * @param {SellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SellerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SellerUpdateArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sellers.
     * @param {SellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SellerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SellerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seller.
     * @param {SellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
    **/
    upsert<T extends SellerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SellerUpsertArgs<ExtArgs>>
    ): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Sellers that matches the filter.
     * @param {SellerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const seller = await prisma.seller.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SellerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Seller.
     * @param {SellerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const seller = await prisma.seller.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SellerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends SellerCountArgs>(
      args?: Subset<T, SellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerGroupByArgs['orderBy'] }
        : { orderBy?: SellerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seller model
   */
  readonly fields: SellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SalesEntry<T extends Seller$SalesEntryArgs<ExtArgs> = {}>(args?: Subset<T, Seller$SalesEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Seller model
   */ 
  interface SellerFieldRefs {
    readonly id: FieldRef<"Seller", 'String'>
    readonly name: FieldRef<"Seller", 'String'>
    readonly createdAt: FieldRef<"Seller", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Seller findUnique
   */
  export type SellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }


  /**
   * Seller findUniqueOrThrow
   */
  export type SellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }


  /**
   * Seller findFirst
   */
  export type SellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }


  /**
   * Seller findFirstOrThrow
   */
  export type SellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }


  /**
   * Seller findMany
   */
  export type SellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Sellers to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }


  /**
   * Seller create
   */
  export type SellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to create a Seller.
     */
    data: XOR<SellerCreateInput, SellerUncheckedCreateInput>
  }


  /**
   * Seller createMany
   */
  export type SellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
  }


  /**
   * Seller update
   */
  export type SellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to update a Seller.
     */
    data: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
    /**
     * Choose, which Seller to update.
     */
    where: SellerWhereUniqueInput
  }


  /**
   * Seller updateMany
   */
  export type SellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
  }


  /**
   * Seller upsert
   */
  export type SellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The filter to search for the Seller to update in case it exists.
     */
    where: SellerWhereUniqueInput
    /**
     * In case the Seller found by the `where` argument doesn't exist, create a new Seller with this data.
     */
    create: XOR<SellerCreateInput, SellerUncheckedCreateInput>
    /**
     * In case the Seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
  }


  /**
   * Seller delete
   */
  export type SellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter which Seller to delete.
     */
    where: SellerWhereUniqueInput
  }


  /**
   * Seller deleteMany
   */
  export type SellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sellers to delete
     */
    where?: SellerWhereInput
  }


  /**
   * Seller findRaw
   */
  export type SellerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Seller aggregateRaw
   */
  export type SellerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Seller.SalesEntry
   */
  export type Seller$SalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    where?: SalesEntryWhereInput
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    cursor?: SalesEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * Seller without action
   */
  export type SellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SellerInclude<ExtArgs> | null
  }



  /**
   * Model ProductType
   */

  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeMinAggregateOutputType = {
    id: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    id: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ProductTypeCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    _all: number
  }


  export type ProductTypeMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
  }

  export type ProductTypeCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithAggregationInput | ProductTypeOrderByWithAggregationInput[]
    by: ProductTypeScalarFieldEnum[] | ProductTypeScalarFieldEnum
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }

  export type ProductTypeGroupByOutputType = {
    id: string
    type: string
    createdAt: Date | null
    _count: ProductTypeCountAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    Brand?: boolean | ProductType$BrandArgs<ExtArgs>
    InStock?: boolean | ProductType$InStockArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productType"]>

  export type ProductTypeSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type ProductTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | ProductType$BrandArgs<ExtArgs>
    InStock?: boolean | ProductType$InStockArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductType"
    objects: {
      Brand: Prisma.$BrandPayload<ExtArgs>[]
      InStock: Prisma.$InStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      createdAt: Date | null
    }, ExtArgs["result"]["productType"]>
    composites: {}
  }


  type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeDefaultArgs> = $Result.GetResult<Prisma.$ProductTypePayload, S>

  type ProductTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductTypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductType'], meta: { name: 'ProductType' } }
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindFirstArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTypeWithIdOnly = await prisma.productType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
    **/
    create<T extends ProductTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeCreateArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductTypes.
     *     @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     *     @example
     *     // Create many ProductTypes
     *     const productType = await prisma.productType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
    **/
    delete<T extends ProductTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeDeleteArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpdateArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
    **/
    upsert<T extends ProductTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpsertArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * @param {ProductTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productType = await prisma.productType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductTypeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductType.
     * @param {ProductTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productType = await prisma.productType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductTypeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductType model
   */
  readonly fields: ProductTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Brand<T extends ProductType$BrandArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$BrandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findMany'> | Null>;

    InStock<T extends ProductType$InStockArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$InStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductType model
   */ 
  interface ProductTypeFieldRefs {
    readonly id: FieldRef<"ProductType", 'String'>
    readonly type: FieldRef<"ProductType", 'String'>
    readonly createdAt: FieldRef<"ProductType", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProductType findUnique
   */
  export type ProductTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType findFirst
   */
  export type ProductTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }


  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }


  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }


  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }


  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTypes.
     */
    data: ProductTypeCreateManyInput | ProductTypeCreateManyInput[]
  }


  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
  }


  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }


  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
  }


  /**
   * ProductType findRaw
   */
  export type ProductTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ProductType aggregateRaw
   */
  export type ProductTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ProductType.Brand
   */
  export type ProductType$BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    cursor?: BrandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * ProductType.InStock
   */
  export type ProductType$InStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    where?: InStockWhereInput
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    cursor?: InStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * ProductType without action
   */
  export type ProductTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude<ExtArgs> | null
  }



  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    brandName: string | null
    productTypeId: string | null
    createdAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    brandName: string | null
    productTypeId: string | null
    createdAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    brandName: number
    productTypeId: number
    createdAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    brandName?: true
    productTypeId?: true
    createdAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    brandName?: true
    productTypeId?: true
    createdAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    brandName?: true
    productTypeId?: true
    createdAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    brandName: string
    productTypeId: string
    createdAt: Date | null
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    productTypeId?: boolean
    createdAt?: boolean
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    Model?: boolean | Brand$ModelArgs<ExtArgs>
    InStock?: boolean | Brand$InStockArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    brandName?: boolean
    productTypeId?: boolean
    createdAt?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    Model?: boolean | Brand$ModelArgs<ExtArgs>
    InStock?: boolean | Brand$InStockArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      productType: Prisma.$ProductTypePayload<ExtArgs>
      Model: Prisma.$ModelPayload<ExtArgs>[]
      InStock: Prisma.$InStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandName: string
      productTypeId: string
      createdAt: Date | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }


  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandCreateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * @param {BrandFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brand = await prisma.brand.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BrandFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Brand.
     * @param {BrandAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brand = await prisma.brand.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BrandAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productType<T extends ProductTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductTypeDefaultArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Model<T extends Brand$ModelArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ModelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'> | Null>;

    InStock<T extends Brand$InStockArgs<ExtArgs> = {}>(args?: Subset<T, Brand$InStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly brandName: FieldRef<"Brand", 'String'>
    readonly productTypeId: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }


  /**
   * Brand findRaw
   */
  export type BrandFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Brand aggregateRaw
   */
  export type BrandAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Brand.Model
   */
  export type Brand$ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Brand.InStock
   */
  export type Brand$InStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    where?: InStockWhereInput
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    cursor?: InStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
  }



  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    model: string | null
    brandId: string | null
    createdAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    model: string | null
    brandId: string | null
    createdAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    model: number
    brandId: number
    createdAt: number
    _all: number
  }


  export type ModelMinAggregateInputType = {
    id?: true
    model?: true
    brandId?: true
    createdAt?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    model?: true
    brandId?: true
    createdAt?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    model?: true
    brandId?: true
    createdAt?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: string
    model: string
    brandId: string
    createdAt: Date | null
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    brandId?: boolean
    createdAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    InStock?: boolean | Model$InStockArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    model?: boolean
    brandId?: boolean
    createdAt?: boolean
  }

  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    InStock?: boolean | Model$InStockArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      InStock: Prisma.$InStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      brandId: string
      createdAt: Date | null
    }, ExtArgs["result"]["model"]>
    composites: {}
  }


  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Model that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelCreateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Models.
     *     @param {ModelCreateManyArgs} args - Arguments to create many Models.
     *     @example
     *     // Create many Models
     *     const model = await prisma.model.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * @param {ModelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const model = await prisma.model.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ModelFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Model.
     * @param {ModelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const model = await prisma.model.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ModelAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    InStock<T extends Model$InStockArgs<ExtArgs> = {}>(args?: Subset<T, Model$InStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Model model
   */ 
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'String'>
    readonly model: FieldRef<"Model", 'String'>
    readonly brandId: FieldRef<"Model", 'String'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
  }


  /**
   * Model findRaw
   */
  export type ModelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Model aggregateRaw
   */
  export type ModelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Model.InStock
   */
  export type Model$InStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    where?: InStockWhereInput
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    cursor?: InStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
  }



  /**
   * Model InStock
   */

  export type AggregateInStock = {
    _count: InStockCountAggregateOutputType | null
    _avg: InStockAvgAggregateOutputType | null
    _sum: InStockSumAggregateOutputType | null
    _min: InStockMinAggregateOutputType | null
    _max: InStockMaxAggregateOutputType | null
  }

  export type InStockAvgAggregateOutputType = {
    purchasePrice: number | null
    price: number | null
  }

  export type InStockSumAggregateOutputType = {
    purchasePrice: number | null
    price: number | null
  }

  export type InStockMinAggregateOutputType = {
    id: string | null
    name: string | null
    IMEI: string | null
    modelId: string | null
    brandId: string | null
    productTypeId: string | null
    purchasePrice: number | null
    price: number | null
    sold: boolean | null
    color: string | null
    ram: string | null
    rom: string | null
    createdAt: Date | null
  }

  export type InStockMaxAggregateOutputType = {
    id: string | null
    name: string | null
    IMEI: string | null
    modelId: string | null
    brandId: string | null
    productTypeId: string | null
    purchasePrice: number | null
    price: number | null
    sold: boolean | null
    color: string | null
    ram: string | null
    rom: string | null
    createdAt: Date | null
  }

  export type InStockCountAggregateOutputType = {
    id: number
    name: number
    IMEI: number
    modelId: number
    brandId: number
    productTypeId: number
    purchasePrice: number
    price: number
    sold: number
    color: number
    ram: number
    rom: number
    createdAt: number
    _all: number
  }


  export type InStockAvgAggregateInputType = {
    purchasePrice?: true
    price?: true
  }

  export type InStockSumAggregateInputType = {
    purchasePrice?: true
    price?: true
  }

  export type InStockMinAggregateInputType = {
    id?: true
    name?: true
    IMEI?: true
    modelId?: true
    brandId?: true
    productTypeId?: true
    purchasePrice?: true
    price?: true
    sold?: true
    color?: true
    ram?: true
    rom?: true
    createdAt?: true
  }

  export type InStockMaxAggregateInputType = {
    id?: true
    name?: true
    IMEI?: true
    modelId?: true
    brandId?: true
    productTypeId?: true
    purchasePrice?: true
    price?: true
    sold?: true
    color?: true
    ram?: true
    rom?: true
    createdAt?: true
  }

  export type InStockCountAggregateInputType = {
    id?: true
    name?: true
    IMEI?: true
    modelId?: true
    brandId?: true
    productTypeId?: true
    purchasePrice?: true
    price?: true
    sold?: true
    color?: true
    ram?: true
    rom?: true
    createdAt?: true
    _all?: true
  }

  export type InStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InStock to aggregate.
     */
    where?: InStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InStocks to fetch.
     */
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InStocks
    **/
    _count?: true | InStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InStockMaxAggregateInputType
  }

  export type GetInStockAggregateType<T extends InStockAggregateArgs> = {
        [P in keyof T & keyof AggregateInStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInStock[P]>
      : GetScalarType<T[P], AggregateInStock[P]>
  }




  export type InStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InStockWhereInput
    orderBy?: InStockOrderByWithAggregationInput | InStockOrderByWithAggregationInput[]
    by: InStockScalarFieldEnum[] | InStockScalarFieldEnum
    having?: InStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InStockCountAggregateInputType | true
    _avg?: InStockAvgAggregateInputType
    _sum?: InStockSumAggregateInputType
    _min?: InStockMinAggregateInputType
    _max?: InStockMaxAggregateInputType
  }

  export type InStockGroupByOutputType = {
    id: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold: boolean
    color: string
    ram: string | null
    rom: string | null
    createdAt: Date | null
    _count: InStockCountAggregateOutputType | null
    _avg: InStockAvgAggregateOutputType | null
    _sum: InStockSumAggregateOutputType | null
    _min: InStockMinAggregateOutputType | null
    _max: InStockMaxAggregateOutputType | null
  }

  type GetInStockGroupByPayload<T extends InStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InStockGroupByOutputType[P]>
            : GetScalarType<T[P], InStockGroupByOutputType[P]>
        }
      >
    >


  export type InStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    IMEI?: boolean
    modelId?: boolean
    brandId?: boolean
    productTypeId?: boolean
    purchasePrice?: boolean
    price?: boolean
    sold?: boolean
    color?: boolean
    ram?: boolean
    rom?: boolean
    createdAt?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    SalesEntry?: boolean | InStock$SalesEntryArgs<ExtArgs>
    _count?: boolean | InStockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inStock"]>

  export type InStockSelectScalar = {
    id?: boolean
    name?: boolean
    IMEI?: boolean
    modelId?: boolean
    brandId?: boolean
    productTypeId?: boolean
    purchasePrice?: boolean
    price?: boolean
    sold?: boolean
    color?: boolean
    ram?: boolean
    rom?: boolean
    createdAt?: boolean
  }

  export type InStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productType?: boolean | ProductTypeDefaultArgs<ExtArgs>
    SalesEntry?: boolean | InStock$SalesEntryArgs<ExtArgs>
    _count?: boolean | InStockCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $InStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InStock"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      productType: Prisma.$ProductTypePayload<ExtArgs>
      SalesEntry: Prisma.$SalesEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      IMEI: string
      modelId: string
      brandId: string
      productTypeId: string
      purchasePrice: number
      price: number
      sold: boolean
      color: string
      ram: string | null
      rom: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["inStock"]>
    composites: {}
  }


  type InStockGetPayload<S extends boolean | null | undefined | InStockDefaultArgs> = $Result.GetResult<Prisma.$InStockPayload, S>

  type InStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InStockFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InStockCountAggregateInputType | true
    }

  export interface InStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InStock'], meta: { name: 'InStock' } }
    /**
     * Find zero or one InStock that matches the filter.
     * @param {InStockFindUniqueArgs} args - Arguments to find a InStock
     * @example
     * // Get one InStock
     * const inStock = await prisma.inStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InStockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InStockFindUniqueArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InStock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InStockFindUniqueOrThrowArgs} args - Arguments to find a InStock
     * @example
     * // Get one InStock
     * const inStock = await prisma.inStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InStockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockFindFirstArgs} args - Arguments to find a InStock
     * @example
     * // Get one InStock
     * const inStock = await prisma.inStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InStockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockFindFirstArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockFindFirstOrThrowArgs} args - Arguments to find a InStock
     * @example
     * // Get one InStock
     * const inStock = await prisma.inStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InStockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InStocks
     * const inStocks = await prisma.inStock.findMany()
     * 
     * // Get first 10 InStocks
     * const inStocks = await prisma.inStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inStockWithIdOnly = await prisma.inStock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InStockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InStock.
     * @param {InStockCreateArgs} args - Arguments to create a InStock.
     * @example
     * // Create one InStock
     * const InStock = await prisma.inStock.create({
     *   data: {
     *     // ... data to create a InStock
     *   }
     * })
     * 
    **/
    create<T extends InStockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InStockCreateArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InStocks.
     *     @param {InStockCreateManyArgs} args - Arguments to create many InStocks.
     *     @example
     *     // Create many InStocks
     *     const inStock = await prisma.inStock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InStockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InStock.
     * @param {InStockDeleteArgs} args - Arguments to delete one InStock.
     * @example
     * // Delete one InStock
     * const InStock = await prisma.inStock.delete({
     *   where: {
     *     // ... filter to delete one InStock
     *   }
     * })
     * 
    **/
    delete<T extends InStockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InStockDeleteArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InStock.
     * @param {InStockUpdateArgs} args - Arguments to update one InStock.
     * @example
     * // Update one InStock
     * const inStock = await prisma.inStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InStockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InStockUpdateArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InStocks.
     * @param {InStockDeleteManyArgs} args - Arguments to filter InStocks to delete.
     * @example
     * // Delete a few InStocks
     * const { count } = await prisma.inStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InStockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InStockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InStocks
     * const inStock = await prisma.inStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InStockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InStockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InStock.
     * @param {InStockUpsertArgs} args - Arguments to update or create a InStock.
     * @example
     * // Update or create a InStock
     * const inStock = await prisma.inStock.upsert({
     *   create: {
     *     // ... data to create a InStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InStock we want to update
     *   }
     * })
    **/
    upsert<T extends InStockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InStockUpsertArgs<ExtArgs>>
    ): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more InStocks that matches the filter.
     * @param {InStockFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inStock = await prisma.inStock.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: InStockFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InStock.
     * @param {InStockAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inStock = await prisma.inStock.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: InStockAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of InStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockCountArgs} args - Arguments to filter InStocks to count.
     * @example
     * // Count the number of InStocks
     * const count = await prisma.inStock.count({
     *   where: {
     *     // ... the filter for the InStocks we want to count
     *   }
     * })
    **/
    count<T extends InStockCountArgs>(
      args?: Subset<T, InStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InStockAggregateArgs>(args: Subset<T, InStockAggregateArgs>): Prisma.PrismaPromise<GetInStockAggregateType<T>>

    /**
     * Group by InStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InStockGroupByArgs['orderBy'] }
        : { orderBy?: InStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InStock model
   */
  readonly fields: InStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    productType<T extends ProductTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductTypeDefaultArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    SalesEntry<T extends InStock$SalesEntryArgs<ExtArgs> = {}>(args?: Subset<T, InStock$SalesEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InStock model
   */ 
  interface InStockFieldRefs {
    readonly id: FieldRef<"InStock", 'String'>
    readonly name: FieldRef<"InStock", 'String'>
    readonly IMEI: FieldRef<"InStock", 'String'>
    readonly modelId: FieldRef<"InStock", 'String'>
    readonly brandId: FieldRef<"InStock", 'String'>
    readonly productTypeId: FieldRef<"InStock", 'String'>
    readonly purchasePrice: FieldRef<"InStock", 'Int'>
    readonly price: FieldRef<"InStock", 'Int'>
    readonly sold: FieldRef<"InStock", 'Boolean'>
    readonly color: FieldRef<"InStock", 'String'>
    readonly ram: FieldRef<"InStock", 'String'>
    readonly rom: FieldRef<"InStock", 'String'>
    readonly createdAt: FieldRef<"InStock", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * InStock findUnique
   */
  export type InStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter, which InStock to fetch.
     */
    where: InStockWhereUniqueInput
  }


  /**
   * InStock findUniqueOrThrow
   */
  export type InStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter, which InStock to fetch.
     */
    where: InStockWhereUniqueInput
  }


  /**
   * InStock findFirst
   */
  export type InStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter, which InStock to fetch.
     */
    where?: InStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InStocks to fetch.
     */
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InStocks.
     */
    cursor?: InStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InStocks.
     */
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * InStock findFirstOrThrow
   */
  export type InStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter, which InStock to fetch.
     */
    where?: InStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InStocks to fetch.
     */
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InStocks.
     */
    cursor?: InStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InStocks.
     */
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * InStock findMany
   */
  export type InStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter, which InStocks to fetch.
     */
    where?: InStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InStocks to fetch.
     */
    orderBy?: InStockOrderByWithRelationInput | InStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InStocks.
     */
    cursor?: InStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InStocks.
     */
    skip?: number
    distinct?: InStockScalarFieldEnum | InStockScalarFieldEnum[]
  }


  /**
   * InStock create
   */
  export type InStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * The data needed to create a InStock.
     */
    data: XOR<InStockCreateInput, InStockUncheckedCreateInput>
  }


  /**
   * InStock createMany
   */
  export type InStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InStocks.
     */
    data: InStockCreateManyInput | InStockCreateManyInput[]
  }


  /**
   * InStock update
   */
  export type InStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * The data needed to update a InStock.
     */
    data: XOR<InStockUpdateInput, InStockUncheckedUpdateInput>
    /**
     * Choose, which InStock to update.
     */
    where: InStockWhereUniqueInput
  }


  /**
   * InStock updateMany
   */
  export type InStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InStocks.
     */
    data: XOR<InStockUpdateManyMutationInput, InStockUncheckedUpdateManyInput>
    /**
     * Filter which InStocks to update
     */
    where?: InStockWhereInput
  }


  /**
   * InStock upsert
   */
  export type InStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * The filter to search for the InStock to update in case it exists.
     */
    where: InStockWhereUniqueInput
    /**
     * In case the InStock found by the `where` argument doesn't exist, create a new InStock with this data.
     */
    create: XOR<InStockCreateInput, InStockUncheckedCreateInput>
    /**
     * In case the InStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InStockUpdateInput, InStockUncheckedUpdateInput>
  }


  /**
   * InStock delete
   */
  export type InStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
    /**
     * Filter which InStock to delete.
     */
    where: InStockWhereUniqueInput
  }


  /**
   * InStock deleteMany
   */
  export type InStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InStocks to delete
     */
    where?: InStockWhereInput
  }


  /**
   * InStock findRaw
   */
  export type InStockFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * InStock aggregateRaw
   */
  export type InStockAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * InStock.SalesEntry
   */
  export type InStock$SalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    where?: SalesEntryWhereInput
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    cursor?: SalesEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * InStock without action
   */
  export type InStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InStock
     */
    select?: InStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InStockInclude<ExtArgs> | null
  }



  /**
   * Model SalesEntry
   */

  export type AggregateSalesEntry = {
    _count: SalesEntryCountAggregateOutputType | null
    _avg: SalesEntryAvgAggregateOutputType | null
    _sum: SalesEntrySumAggregateOutputType | null
    _min: SalesEntryMinAggregateOutputType | null
    _max: SalesEntryMaxAggregateOutputType | null
  }

  export type SalesEntryAvgAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type SalesEntrySumAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type SalesEntryMinAggregateOutputType = {
    id: string | null
    instockId: string | null
    IMEI: string | null
    price: number | null
    discount: number | null
    sellerId: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type SalesEntryMaxAggregateOutputType = {
    id: string | null
    instockId: string | null
    IMEI: string | null
    price: number | null
    discount: number | null
    sellerId: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type SalesEntryCountAggregateOutputType = {
    id: number
    instockId: number
    IMEI: number
    price: number
    discount: number
    sellerId: number
    customerId: number
    createdAt: number
    _all: number
  }


  export type SalesEntryAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type SalesEntrySumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type SalesEntryMinAggregateInputType = {
    id?: true
    instockId?: true
    IMEI?: true
    price?: true
    discount?: true
    sellerId?: true
    customerId?: true
    createdAt?: true
  }

  export type SalesEntryMaxAggregateInputType = {
    id?: true
    instockId?: true
    IMEI?: true
    price?: true
    discount?: true
    sellerId?: true
    customerId?: true
    createdAt?: true
  }

  export type SalesEntryCountAggregateInputType = {
    id?: true
    instockId?: true
    IMEI?: true
    price?: true
    discount?: true
    sellerId?: true
    customerId?: true
    createdAt?: true
    _all?: true
  }

  export type SalesEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesEntry to aggregate.
     */
    where?: SalesEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesEntries to fetch.
     */
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesEntries
    **/
    _count?: true | SalesEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesEntryMaxAggregateInputType
  }

  export type GetSalesEntryAggregateType<T extends SalesEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesEntry[P]>
      : GetScalarType<T[P], AggregateSalesEntry[P]>
  }




  export type SalesEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesEntryWhereInput
    orderBy?: SalesEntryOrderByWithAggregationInput | SalesEntryOrderByWithAggregationInput[]
    by: SalesEntryScalarFieldEnum[] | SalesEntryScalarFieldEnum
    having?: SalesEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesEntryCountAggregateInputType | true
    _avg?: SalesEntryAvgAggregateInputType
    _sum?: SalesEntrySumAggregateInputType
    _min?: SalesEntryMinAggregateInputType
    _max?: SalesEntryMaxAggregateInputType
  }

  export type SalesEntryGroupByOutputType = {
    id: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    customerId: string
    createdAt: Date | null
    _count: SalesEntryCountAggregateOutputType | null
    _avg: SalesEntryAvgAggregateOutputType | null
    _sum: SalesEntrySumAggregateOutputType | null
    _min: SalesEntryMinAggregateOutputType | null
    _max: SalesEntryMaxAggregateOutputType | null
  }

  type GetSalesEntryGroupByPayload<T extends SalesEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesEntryGroupByOutputType[P]>
            : GetScalarType<T[P], SalesEntryGroupByOutputType[P]>
        }
      >
    >


  export type SalesEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instockId?: boolean
    IMEI?: boolean
    price?: boolean
    discount?: boolean
    sellerId?: boolean
    customerId?: boolean
    createdAt?: boolean
    instock?: boolean | InStockDefaultArgs<ExtArgs>
    Seller?: boolean | SellerDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesEntry"]>

  export type SalesEntrySelectScalar = {
    id?: boolean
    instockId?: boolean
    IMEI?: boolean
    price?: boolean
    discount?: boolean
    sellerId?: boolean
    customerId?: boolean
    createdAt?: boolean
  }

  export type SalesEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instock?: boolean | InStockDefaultArgs<ExtArgs>
    Seller?: boolean | SellerDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }


  export type $SalesEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesEntry"
    objects: {
      instock: Prisma.$InStockPayload<ExtArgs>
      Seller: Prisma.$SellerPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instockId: string
      IMEI: string
      price: number
      discount: number
      sellerId: string
      customerId: string
      createdAt: Date | null
    }, ExtArgs["result"]["salesEntry"]>
    composites: {}
  }


  type SalesEntryGetPayload<S extends boolean | null | undefined | SalesEntryDefaultArgs> = $Result.GetResult<Prisma.$SalesEntryPayload, S>

  type SalesEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesEntryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SalesEntryCountAggregateInputType | true
    }

  export interface SalesEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesEntry'], meta: { name: 'SalesEntry' } }
    /**
     * Find zero or one SalesEntry that matches the filter.
     * @param {SalesEntryFindUniqueArgs} args - Arguments to find a SalesEntry
     * @example
     * // Get one SalesEntry
     * const salesEntry = await prisma.salesEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SalesEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SalesEntryFindUniqueOrThrowArgs} args - Arguments to find a SalesEntry
     * @example
     * // Get one SalesEntry
     * const salesEntry = await prisma.salesEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SalesEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SalesEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryFindFirstArgs} args - Arguments to find a SalesEntry
     * @example
     * // Get one SalesEntry
     * const salesEntry = await prisma.salesEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryFindFirstArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SalesEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryFindFirstOrThrowArgs} args - Arguments to find a SalesEntry
     * @example
     * // Get one SalesEntry
     * const salesEntry = await prisma.salesEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SalesEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SalesEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesEntries
     * const salesEntries = await prisma.salesEntry.findMany()
     * 
     * // Get first 10 SalesEntries
     * const salesEntries = await prisma.salesEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesEntryWithIdOnly = await prisma.salesEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SalesEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SalesEntry.
     * @param {SalesEntryCreateArgs} args - Arguments to create a SalesEntry.
     * @example
     * // Create one SalesEntry
     * const SalesEntry = await prisma.salesEntry.create({
     *   data: {
     *     // ... data to create a SalesEntry
     *   }
     * })
     * 
    **/
    create<T extends SalesEntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryCreateArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SalesEntries.
     *     @param {SalesEntryCreateManyArgs} args - Arguments to create many SalesEntries.
     *     @example
     *     // Create many SalesEntries
     *     const salesEntry = await prisma.salesEntry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesEntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesEntry.
     * @param {SalesEntryDeleteArgs} args - Arguments to delete one SalesEntry.
     * @example
     * // Delete one SalesEntry
     * const SalesEntry = await prisma.salesEntry.delete({
     *   where: {
     *     // ... filter to delete one SalesEntry
     *   }
     * })
     * 
    **/
    delete<T extends SalesEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryDeleteArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SalesEntry.
     * @param {SalesEntryUpdateArgs} args - Arguments to update one SalesEntry.
     * @example
     * // Update one SalesEntry
     * const salesEntry = await prisma.salesEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryUpdateArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SalesEntries.
     * @param {SalesEntryDeleteManyArgs} args - Arguments to filter SalesEntries to delete.
     * @example
     * // Delete a few SalesEntries
     * const { count } = await prisma.salesEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesEntries
     * const salesEntry = await prisma.salesEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesEntry.
     * @param {SalesEntryUpsertArgs} args - Arguments to update or create a SalesEntry.
     * @example
     * // Update or create a SalesEntry
     * const salesEntry = await prisma.salesEntry.upsert({
     *   create: {
     *     // ... data to create a SalesEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesEntry we want to update
     *   }
     * })
    **/
    upsert<T extends SalesEntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SalesEntryUpsertArgs<ExtArgs>>
    ): Prisma__SalesEntryClient<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more SalesEntries that matches the filter.
     * @param {SalesEntryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const salesEntry = await prisma.salesEntry.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SalesEntryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SalesEntry.
     * @param {SalesEntryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const salesEntry = await prisma.salesEntry.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SalesEntryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of SalesEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryCountArgs} args - Arguments to filter SalesEntries to count.
     * @example
     * // Count the number of SalesEntries
     * const count = await prisma.salesEntry.count({
     *   where: {
     *     // ... the filter for the SalesEntries we want to count
     *   }
     * })
    **/
    count<T extends SalesEntryCountArgs>(
      args?: Subset<T, SalesEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesEntryAggregateArgs>(args: Subset<T, SalesEntryAggregateArgs>): Prisma.PrismaPromise<GetSalesEntryAggregateType<T>>

    /**
     * Group by SalesEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesEntryGroupByArgs['orderBy'] }
        : { orderBy?: SalesEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesEntry model
   */
  readonly fields: SalesEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    instock<T extends InStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InStockDefaultArgs<ExtArgs>>): Prisma__InStockClient<$Result.GetResult<Prisma.$InStockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Seller<T extends SellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerDefaultArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SalesEntry model
   */ 
  interface SalesEntryFieldRefs {
    readonly id: FieldRef<"SalesEntry", 'String'>
    readonly instockId: FieldRef<"SalesEntry", 'String'>
    readonly IMEI: FieldRef<"SalesEntry", 'String'>
    readonly price: FieldRef<"SalesEntry", 'Int'>
    readonly discount: FieldRef<"SalesEntry", 'Int'>
    readonly sellerId: FieldRef<"SalesEntry", 'String'>
    readonly customerId: FieldRef<"SalesEntry", 'String'>
    readonly createdAt: FieldRef<"SalesEntry", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SalesEntry findUnique
   */
  export type SalesEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter, which SalesEntry to fetch.
     */
    where: SalesEntryWhereUniqueInput
  }


  /**
   * SalesEntry findUniqueOrThrow
   */
  export type SalesEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter, which SalesEntry to fetch.
     */
    where: SalesEntryWhereUniqueInput
  }


  /**
   * SalesEntry findFirst
   */
  export type SalesEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter, which SalesEntry to fetch.
     */
    where?: SalesEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesEntries to fetch.
     */
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesEntries.
     */
    cursor?: SalesEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesEntries.
     */
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * SalesEntry findFirstOrThrow
   */
  export type SalesEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter, which SalesEntry to fetch.
     */
    where?: SalesEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesEntries to fetch.
     */
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesEntries.
     */
    cursor?: SalesEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesEntries.
     */
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * SalesEntry findMany
   */
  export type SalesEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter, which SalesEntries to fetch.
     */
    where?: SalesEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesEntries to fetch.
     */
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesEntries.
     */
    cursor?: SalesEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesEntries.
     */
    skip?: number
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * SalesEntry create
   */
  export type SalesEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesEntry.
     */
    data: XOR<SalesEntryCreateInput, SalesEntryUncheckedCreateInput>
  }


  /**
   * SalesEntry createMany
   */
  export type SalesEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesEntries.
     */
    data: SalesEntryCreateManyInput | SalesEntryCreateManyInput[]
  }


  /**
   * SalesEntry update
   */
  export type SalesEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesEntry.
     */
    data: XOR<SalesEntryUpdateInput, SalesEntryUncheckedUpdateInput>
    /**
     * Choose, which SalesEntry to update.
     */
    where: SalesEntryWhereUniqueInput
  }


  /**
   * SalesEntry updateMany
   */
  export type SalesEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesEntries.
     */
    data: XOR<SalesEntryUpdateManyMutationInput, SalesEntryUncheckedUpdateManyInput>
    /**
     * Filter which SalesEntries to update
     */
    where?: SalesEntryWhereInput
  }


  /**
   * SalesEntry upsert
   */
  export type SalesEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesEntry to update in case it exists.
     */
    where: SalesEntryWhereUniqueInput
    /**
     * In case the SalesEntry found by the `where` argument doesn't exist, create a new SalesEntry with this data.
     */
    create: XOR<SalesEntryCreateInput, SalesEntryUncheckedCreateInput>
    /**
     * In case the SalesEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesEntryUpdateInput, SalesEntryUncheckedUpdateInput>
  }


  /**
   * SalesEntry delete
   */
  export type SalesEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    /**
     * Filter which SalesEntry to delete.
     */
    where: SalesEntryWhereUniqueInput
  }


  /**
   * SalesEntry deleteMany
   */
  export type SalesEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesEntries to delete
     */
    where?: SalesEntryWhereInput
  }


  /**
   * SalesEntry findRaw
   */
  export type SalesEntryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SalesEntry aggregateRaw
   */
  export type SalesEntryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SalesEntry without action
   */
  export type SalesEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
  }



  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    createdAt: Date | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    SalesEntry?: boolean | Customer$SalesEntryArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesEntry?: boolean | Customer$SalesEntryArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      SalesEntry: Prisma.$SalesEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * @param {CustomerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customer = await prisma.customer.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CustomerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Customer.
     * @param {CustomerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customer = await prisma.customer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CustomerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SalesEntry<T extends Customer$SalesEntryArgs<ExtArgs> = {}>(args?: Subset<T, Customer$SalesEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer findRaw
   */
  export type CustomerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Customer aggregateRaw
   */
  export type CustomerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Customer.SalesEntry
   */
  export type Customer$SalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesEntry
     */
    select?: SalesEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SalesEntryInclude<ExtArgs> | null
    where?: SalesEntryWhereInput
    orderBy?: SalesEntryOrderByWithRelationInput | SalesEntryOrderByWithRelationInput[]
    cursor?: SalesEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesEntryScalarFieldEnum | SalesEntryScalarFieldEnum[]
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SellerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName',
    productTypeId: 'productTypeId',
    createdAt: 'createdAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    model: 'model',
    brandId: 'brandId',
    createdAt: 'createdAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const InStockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    IMEI: 'IMEI',
    modelId: 'modelId',
    brandId: 'brandId',
    productTypeId: 'productTypeId',
    purchasePrice: 'purchasePrice',
    price: 'price',
    sold: 'sold',
    color: 'color',
    ram: 'ram',
    rom: 'rom',
    createdAt: 'createdAt'
  };

  export type InStockScalarFieldEnum = (typeof InStockScalarFieldEnum)[keyof typeof InStockScalarFieldEnum]


  export const SalesEntryScalarFieldEnum: {
    id: 'id',
    instockId: 'instockId',
    IMEI: 'IMEI',
    price: 'price',
    discount: 'discount',
    sellerId: 'sellerId',
    customerId: 'customerId',
    createdAt: 'createdAt'
  };

  export type SalesEntryScalarFieldEnum = (typeof SalesEntryScalarFieldEnum)[keyof typeof SalesEntryScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SellerWhereInput = {
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    id?: StringFilter<"Seller"> | string
    name?: StringFilter<"Seller"> | string
    createdAt?: DateTimeNullableFilter<"Seller"> | Date | string | null
    SalesEntry?: SalesEntryListRelationFilter
  }

  export type SellerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    SalesEntry?: SalesEntryOrderByRelationAggregateInput
  }

  export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    name?: StringFilter<"Seller"> | string
    createdAt?: DateTimeNullableFilter<"Seller"> | Date | string | null
    SalesEntry?: SalesEntryListRelationFilter
  }, "id">

  export type SellerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SellerCountOrderByAggregateInput
    _max?: SellerMaxOrderByAggregateInput
    _min?: SellerMinOrderByAggregateInput
  }

  export type SellerScalarWhereWithAggregatesInput = {
    AND?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    OR?: SellerScalarWhereWithAggregatesInput[]
    NOT?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seller"> | string
    name?: StringWithAggregatesFilter<"Seller"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Seller"> | Date | string | null
  }

  export type ProductTypeWhereInput = {
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    id?: StringFilter<"ProductType"> | string
    type?: StringFilter<"ProductType"> | string
    createdAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    Brand?: BrandListRelationFilter
    InStock?: InStockListRelationFilter
  }

  export type ProductTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    Brand?: BrandOrderByRelationAggregateInput
    InStock?: InStockOrderByRelationAggregateInput
  }

  export type ProductTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    type?: StringFilter<"ProductType"> | string
    createdAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    Brand?: BrandListRelationFilter
    InStock?: InStockListRelationFilter
  }, "id">

  export type ProductTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    OR?: ProductTypeScalarWhereWithAggregatesInput[]
    NOT?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductType"> | string
    type?: StringWithAggregatesFilter<"ProductType"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"ProductType"> | Date | string | null
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    brandName?: StringFilter<"Brand"> | string
    productTypeId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    productType?: XOR<ProductTypeRelationFilter, ProductTypeWhereInput>
    Model?: ModelListRelationFilter
    InStock?: InStockListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    productTypeId?: SortOrder
    createdAt?: SortOrder
    productType?: ProductTypeOrderByWithRelationInput
    Model?: ModelOrderByRelationAggregateInput
    InStock?: InStockOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    brandName?: StringFilter<"Brand"> | string
    productTypeId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    productType?: XOR<ProductTypeRelationFilter, ProductTypeWhereInput>
    Model?: ModelListRelationFilter
    InStock?: InStockListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    productTypeId?: SortOrder
    createdAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    brandName?: StringWithAggregatesFilter<"Brand"> | string
    productTypeId?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: StringFilter<"Model"> | string
    model?: StringFilter<"Model"> | string
    brandId?: StringFilter<"Model"> | string
    createdAt?: DateTimeNullableFilter<"Model"> | Date | string | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    InStock?: InStockListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    InStock?: InStockOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    model?: StringFilter<"Model"> | string
    brandId?: StringFilter<"Model"> | string
    createdAt?: DateTimeNullableFilter<"Model"> | Date | string | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    InStock?: InStockListRelationFilter
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Model"> | string
    model?: StringWithAggregatesFilter<"Model"> | string
    brandId?: StringWithAggregatesFilter<"Model"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Model"> | Date | string | null
  }

  export type InStockWhereInput = {
    AND?: InStockWhereInput | InStockWhereInput[]
    OR?: InStockWhereInput[]
    NOT?: InStockWhereInput | InStockWhereInput[]
    id?: StringFilter<"InStock"> | string
    name?: StringFilter<"InStock"> | string
    IMEI?: StringFilter<"InStock"> | string
    modelId?: StringFilter<"InStock"> | string
    brandId?: StringFilter<"InStock"> | string
    productTypeId?: StringFilter<"InStock"> | string
    purchasePrice?: IntFilter<"InStock"> | number
    price?: IntFilter<"InStock"> | number
    sold?: BoolFilter<"InStock"> | boolean
    color?: StringFilter<"InStock"> | string
    ram?: StringNullableFilter<"InStock"> | string | null
    rom?: StringNullableFilter<"InStock"> | string | null
    createdAt?: DateTimeNullableFilter<"InStock"> | Date | string | null
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    productType?: XOR<ProductTypeRelationFilter, ProductTypeWhereInput>
    SalesEntry?: SalesEntryListRelationFilter
  }

  export type InStockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    IMEI?: SortOrder
    modelId?: SortOrder
    brandId?: SortOrder
    productTypeId?: SortOrder
    purchasePrice?: SortOrder
    price?: SortOrder
    sold?: SortOrder
    color?: SortOrder
    ram?: SortOrder
    rom?: SortOrder
    createdAt?: SortOrder
    model?: ModelOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    productType?: ProductTypeOrderByWithRelationInput
    SalesEntry?: SalesEntryOrderByRelationAggregateInput
  }

  export type InStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    IMEI?: string
    AND?: InStockWhereInput | InStockWhereInput[]
    OR?: InStockWhereInput[]
    NOT?: InStockWhereInput | InStockWhereInput[]
    name?: StringFilter<"InStock"> | string
    modelId?: StringFilter<"InStock"> | string
    brandId?: StringFilter<"InStock"> | string
    productTypeId?: StringFilter<"InStock"> | string
    purchasePrice?: IntFilter<"InStock"> | number
    price?: IntFilter<"InStock"> | number
    sold?: BoolFilter<"InStock"> | boolean
    color?: StringFilter<"InStock"> | string
    ram?: StringNullableFilter<"InStock"> | string | null
    rom?: StringNullableFilter<"InStock"> | string | null
    createdAt?: DateTimeNullableFilter<"InStock"> | Date | string | null
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    productType?: XOR<ProductTypeRelationFilter, ProductTypeWhereInput>
    SalesEntry?: SalesEntryListRelationFilter
  }, "id" | "IMEI">

  export type InStockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    IMEI?: SortOrder
    modelId?: SortOrder
    brandId?: SortOrder
    productTypeId?: SortOrder
    purchasePrice?: SortOrder
    price?: SortOrder
    sold?: SortOrder
    color?: SortOrder
    ram?: SortOrder
    rom?: SortOrder
    createdAt?: SortOrder
    _count?: InStockCountOrderByAggregateInput
    _avg?: InStockAvgOrderByAggregateInput
    _max?: InStockMaxOrderByAggregateInput
    _min?: InStockMinOrderByAggregateInput
    _sum?: InStockSumOrderByAggregateInput
  }

  export type InStockScalarWhereWithAggregatesInput = {
    AND?: InStockScalarWhereWithAggregatesInput | InStockScalarWhereWithAggregatesInput[]
    OR?: InStockScalarWhereWithAggregatesInput[]
    NOT?: InStockScalarWhereWithAggregatesInput | InStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InStock"> | string
    name?: StringWithAggregatesFilter<"InStock"> | string
    IMEI?: StringWithAggregatesFilter<"InStock"> | string
    modelId?: StringWithAggregatesFilter<"InStock"> | string
    brandId?: StringWithAggregatesFilter<"InStock"> | string
    productTypeId?: StringWithAggregatesFilter<"InStock"> | string
    purchasePrice?: IntWithAggregatesFilter<"InStock"> | number
    price?: IntWithAggregatesFilter<"InStock"> | number
    sold?: BoolWithAggregatesFilter<"InStock"> | boolean
    color?: StringWithAggregatesFilter<"InStock"> | string
    ram?: StringNullableWithAggregatesFilter<"InStock"> | string | null
    rom?: StringNullableWithAggregatesFilter<"InStock"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"InStock"> | Date | string | null
  }

  export type SalesEntryWhereInput = {
    AND?: SalesEntryWhereInput | SalesEntryWhereInput[]
    OR?: SalesEntryWhereInput[]
    NOT?: SalesEntryWhereInput | SalesEntryWhereInput[]
    id?: StringFilter<"SalesEntry"> | string
    instockId?: StringFilter<"SalesEntry"> | string
    IMEI?: StringFilter<"SalesEntry"> | string
    price?: IntFilter<"SalesEntry"> | number
    discount?: IntFilter<"SalesEntry"> | number
    sellerId?: StringFilter<"SalesEntry"> | string
    customerId?: StringFilter<"SalesEntry"> | string
    createdAt?: DateTimeNullableFilter<"SalesEntry"> | Date | string | null
    instock?: XOR<InStockRelationFilter, InStockWhereInput>
    Seller?: XOR<SellerRelationFilter, SellerWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type SalesEntryOrderByWithRelationInput = {
    id?: SortOrder
    instockId?: SortOrder
    IMEI?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    instock?: InStockOrderByWithRelationInput
    Seller?: SellerOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type SalesEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    IMEI?: string
    AND?: SalesEntryWhereInput | SalesEntryWhereInput[]
    OR?: SalesEntryWhereInput[]
    NOT?: SalesEntryWhereInput | SalesEntryWhereInput[]
    instockId?: StringFilter<"SalesEntry"> | string
    price?: IntFilter<"SalesEntry"> | number
    discount?: IntFilter<"SalesEntry"> | number
    sellerId?: StringFilter<"SalesEntry"> | string
    customerId?: StringFilter<"SalesEntry"> | string
    createdAt?: DateTimeNullableFilter<"SalesEntry"> | Date | string | null
    instock?: XOR<InStockRelationFilter, InStockWhereInput>
    Seller?: XOR<SellerRelationFilter, SellerWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id" | "IMEI">

  export type SalesEntryOrderByWithAggregationInput = {
    id?: SortOrder
    instockId?: SortOrder
    IMEI?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    _count?: SalesEntryCountOrderByAggregateInput
    _avg?: SalesEntryAvgOrderByAggregateInput
    _max?: SalesEntryMaxOrderByAggregateInput
    _min?: SalesEntryMinOrderByAggregateInput
    _sum?: SalesEntrySumOrderByAggregateInput
  }

  export type SalesEntryScalarWhereWithAggregatesInput = {
    AND?: SalesEntryScalarWhereWithAggregatesInput | SalesEntryScalarWhereWithAggregatesInput[]
    OR?: SalesEntryScalarWhereWithAggregatesInput[]
    NOT?: SalesEntryScalarWhereWithAggregatesInput | SalesEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesEntry"> | string
    instockId?: StringWithAggregatesFilter<"SalesEntry"> | string
    IMEI?: StringWithAggregatesFilter<"SalesEntry"> | string
    price?: IntWithAggregatesFilter<"SalesEntry"> | number
    discount?: IntWithAggregatesFilter<"SalesEntry"> | number
    sellerId?: StringWithAggregatesFilter<"SalesEntry"> | string
    customerId?: StringWithAggregatesFilter<"SalesEntry"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"SalesEntry"> | Date | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    SalesEntry?: SalesEntryListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    SalesEntry?: SalesEntryOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    SalesEntry?: SalesEntryListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    role: string
    createdAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    role: string
    createdAt?: Date | string | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    role: string
    createdAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SellerCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
  }

  export type SellerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeCreateInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    Brand?: BrandCreateNestedManyWithoutProductTypeInput
    InStock?: InStockCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    Brand?: BrandUncheckedCreateNestedManyWithoutProductTypeInput
    InStock?: InStockUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Brand?: BrandUpdateManyWithoutProductTypeNestedInput
    InStock?: InStockUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Brand?: BrandUncheckedUpdateManyWithoutProductTypeNestedInput
    InStock?: InStockUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeCreateManyInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
  }

  export type ProductTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandCreateInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
    productType: ProductTypeCreateNestedOneWithoutBrandInput
    Model?: ModelCreateNestedManyWithoutBrandInput
    InStock?: InStockCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    brandName: string
    productTypeId: string
    createdAt?: Date | string | null
    Model?: ModelUncheckedCreateNestedManyWithoutBrandInput
    InStock?: InStockUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productType?: ProductTypeUpdateOneRequiredWithoutBrandNestedInput
    Model?: ModelUpdateManyWithoutBrandNestedInput
    InStock?: InStockUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Model?: ModelUncheckedUpdateManyWithoutBrandNestedInput
    InStock?: InStockUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    brandName: string
    productTypeId: string
    createdAt?: Date | string | null
  }

  export type BrandUpdateManyMutationInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModelCreateInput = {
    id?: string
    model: string
    createdAt?: Date | string | null
    brand: BrandCreateNestedOneWithoutModelInput
    InStock?: InStockCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    model: string
    brandId: string
    createdAt?: Date | string | null
    InStock?: InStockUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandUpdateOneRequiredWithoutModelNestedInput
    InStock?: InStockUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    model: string
    brandId: string
    createdAt?: Date | string | null
  }

  export type ModelUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModelUncheckedUpdateManyInput = {
    model?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InStockCreateInput = {
    id?: string
    name: string
    IMEI: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    model: ModelCreateNestedOneWithoutInStockInput
    brand: BrandCreateNestedOneWithoutInStockInput
    productType: ProductTypeCreateNestedOneWithoutInStockInput
    SalesEntry?: SalesEntryCreateNestedManyWithoutInstockInput
  }

  export type InStockUncheckedCreateInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutInstockInput
  }

  export type InStockUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutInStockNestedInput
    brand?: BrandUpdateOneRequiredWithoutInStockNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutInStockNestedInput
    SalesEntry?: SalesEntryUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutInstockNestedInput
  }

  export type InStockCreateManyInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
  }

  export type InStockUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InStockUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryCreateInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    createdAt?: Date | string | null
    instock: InStockCreateNestedOneWithoutSalesEntryInput
    Seller: SellerCreateNestedOneWithoutSalesEntryInput
    customer: CustomerCreateNestedOneWithoutSalesEntryInput
  }

  export type SalesEntryUncheckedCreateInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryUpdateInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instock?: InStockUpdateOneRequiredWithoutSalesEntryNestedInput
    Seller?: SellerUpdateOneRequiredWithoutSalesEntryNestedInput
    customer?: CustomerUpdateOneRequiredWithoutSalesEntryNestedInput
  }

  export type SalesEntryUncheckedUpdateInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryCreateManyInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryUpdateManyMutationInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryUncheckedUpdateManyInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SalesEntryListRelationFilter = {
    every?: SalesEntryWhereInput
    some?: SalesEntryWhereInput
    none?: SalesEntryWhereInput
  }

  export type SalesEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandListRelationFilter = {
    every?: BrandWhereInput
    some?: BrandWhereInput
    none?: BrandWhereInput
  }

  export type InStockListRelationFilter = {
    every?: InStockWhereInput
    some?: InStockWhereInput
    none?: InStockWhereInput
  }

  export type BrandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductTypeRelationFilter = {
    is?: ProductTypeWhereInput
    isNot?: ProductTypeWhereInput
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ModelRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type InStockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    IMEI?: SortOrder
    modelId?: SortOrder
    brandId?: SortOrder
    productTypeId?: SortOrder
    purchasePrice?: SortOrder
    price?: SortOrder
    sold?: SortOrder
    color?: SortOrder
    ram?: SortOrder
    rom?: SortOrder
    createdAt?: SortOrder
  }

  export type InStockAvgOrderByAggregateInput = {
    purchasePrice?: SortOrder
    price?: SortOrder
  }

  export type InStockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    IMEI?: SortOrder
    modelId?: SortOrder
    brandId?: SortOrder
    productTypeId?: SortOrder
    purchasePrice?: SortOrder
    price?: SortOrder
    sold?: SortOrder
    color?: SortOrder
    ram?: SortOrder
    rom?: SortOrder
    createdAt?: SortOrder
  }

  export type InStockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    IMEI?: SortOrder
    modelId?: SortOrder
    brandId?: SortOrder
    productTypeId?: SortOrder
    purchasePrice?: SortOrder
    price?: SortOrder
    sold?: SortOrder
    color?: SortOrder
    ram?: SortOrder
    rom?: SortOrder
    createdAt?: SortOrder
  }

  export type InStockSumOrderByAggregateInput = {
    purchasePrice?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type InStockRelationFilter = {
    is?: InStockWhereInput
    isNot?: InStockWhereInput
  }

  export type SellerRelationFilter = {
    is?: SellerWhereInput
    isNot?: SellerWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SalesEntryCountOrderByAggregateInput = {
    id?: SortOrder
    instockId?: SortOrder
    IMEI?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesEntryAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type SalesEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    instockId?: SortOrder
    IMEI?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesEntryMinOrderByAggregateInput = {
    id?: SortOrder
    instockId?: SortOrder
    IMEI?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesEntrySumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SalesEntryCreateNestedManyWithoutSellerInput = {
    create?: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput> | SalesEntryCreateWithoutSellerInput[] | SalesEntryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutSellerInput | SalesEntryCreateOrConnectWithoutSellerInput[]
    createMany?: SalesEntryCreateManySellerInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type SalesEntryUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput> | SalesEntryCreateWithoutSellerInput[] | SalesEntryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutSellerInput | SalesEntryCreateOrConnectWithoutSellerInput[]
    createMany?: SalesEntryCreateManySellerInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type SalesEntryUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput> | SalesEntryCreateWithoutSellerInput[] | SalesEntryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutSellerInput | SalesEntryCreateOrConnectWithoutSellerInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutSellerInput | SalesEntryUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SalesEntryCreateManySellerInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutSellerInput | SalesEntryUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutSellerInput | SalesEntryUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type SalesEntryUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput> | SalesEntryCreateWithoutSellerInput[] | SalesEntryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutSellerInput | SalesEntryCreateOrConnectWithoutSellerInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutSellerInput | SalesEntryUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SalesEntryCreateManySellerInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutSellerInput | SalesEntryUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutSellerInput | SalesEntryUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type BrandCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput> | BrandCreateWithoutProductTypeInput[] | BrandUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutProductTypeInput | BrandCreateOrConnectWithoutProductTypeInput[]
    createMany?: BrandCreateManyProductTypeInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type InStockCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput> | InStockCreateWithoutProductTypeInput[] | InStockUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutProductTypeInput | InStockCreateOrConnectWithoutProductTypeInput[]
    createMany?: InStockCreateManyProductTypeInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type BrandUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput> | BrandCreateWithoutProductTypeInput[] | BrandUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutProductTypeInput | BrandCreateOrConnectWithoutProductTypeInput[]
    createMany?: BrandCreateManyProductTypeInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type InStockUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput> | InStockCreateWithoutProductTypeInput[] | InStockUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutProductTypeInput | InStockCreateOrConnectWithoutProductTypeInput[]
    createMany?: InStockCreateManyProductTypeInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type BrandUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput> | BrandCreateWithoutProductTypeInput[] | BrandUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutProductTypeInput | BrandCreateOrConnectWithoutProductTypeInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutProductTypeInput | BrandUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: BrandCreateManyProductTypeInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutProductTypeInput | BrandUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutProductTypeInput | BrandUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type InStockUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput> | InStockCreateWithoutProductTypeInput[] | InStockUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutProductTypeInput | InStockCreateOrConnectWithoutProductTypeInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutProductTypeInput | InStockUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: InStockCreateManyProductTypeInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutProductTypeInput | InStockUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutProductTypeInput | InStockUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type BrandUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput> | BrandCreateWithoutProductTypeInput[] | BrandUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutProductTypeInput | BrandCreateOrConnectWithoutProductTypeInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutProductTypeInput | BrandUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: BrandCreateManyProductTypeInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutProductTypeInput | BrandUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutProductTypeInput | BrandUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type InStockUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput> | InStockCreateWithoutProductTypeInput[] | InStockUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutProductTypeInput | InStockCreateOrConnectWithoutProductTypeInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutProductTypeInput | InStockUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: InStockCreateManyProductTypeInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutProductTypeInput | InStockUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutProductTypeInput | InStockUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type ProductTypeCreateNestedOneWithoutBrandInput = {
    create?: XOR<ProductTypeCreateWithoutBrandInput, ProductTypeUncheckedCreateWithoutBrandInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutBrandInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type ModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput> | ModelCreateWithoutBrandInput[] | ModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutBrandInput | ModelCreateOrConnectWithoutBrandInput[]
    createMany?: ModelCreateManyBrandInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type InStockCreateNestedManyWithoutBrandInput = {
    create?: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput> | InStockCreateWithoutBrandInput[] | InStockUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutBrandInput | InStockCreateOrConnectWithoutBrandInput[]
    createMany?: InStockCreateManyBrandInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput> | ModelCreateWithoutBrandInput[] | ModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutBrandInput | ModelCreateOrConnectWithoutBrandInput[]
    createMany?: ModelCreateManyBrandInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type InStockUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput> | InStockCreateWithoutBrandInput[] | InStockUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutBrandInput | InStockCreateOrConnectWithoutBrandInput[]
    createMany?: InStockCreateManyBrandInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type ProductTypeUpdateOneRequiredWithoutBrandNestedInput = {
    create?: XOR<ProductTypeCreateWithoutBrandInput, ProductTypeUncheckedCreateWithoutBrandInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutBrandInput
    upsert?: ProductTypeUpsertWithoutBrandInput
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutBrandInput, ProductTypeUpdateWithoutBrandInput>, ProductTypeUncheckedUpdateWithoutBrandInput>
  }

  export type ModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput> | ModelCreateWithoutBrandInput[] | ModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutBrandInput | ModelCreateOrConnectWithoutBrandInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutBrandInput | ModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ModelCreateManyBrandInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutBrandInput | ModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutBrandInput | ModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type InStockUpdateManyWithoutBrandNestedInput = {
    create?: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput> | InStockCreateWithoutBrandInput[] | InStockUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutBrandInput | InStockCreateOrConnectWithoutBrandInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutBrandInput | InStockUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: InStockCreateManyBrandInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutBrandInput | InStockUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutBrandInput | InStockUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput> | ModelCreateWithoutBrandInput[] | ModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutBrandInput | ModelCreateOrConnectWithoutBrandInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutBrandInput | ModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ModelCreateManyBrandInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutBrandInput | ModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutBrandInput | ModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type InStockUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput> | InStockCreateWithoutBrandInput[] | InStockUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutBrandInput | InStockCreateOrConnectWithoutBrandInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutBrandInput | InStockUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: InStockCreateManyBrandInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutBrandInput | InStockUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutBrandInput | InStockUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutModelInput = {
    create?: XOR<BrandCreateWithoutModelInput, BrandUncheckedCreateWithoutModelInput>
    connectOrCreate?: BrandCreateOrConnectWithoutModelInput
    connect?: BrandWhereUniqueInput
  }

  export type InStockCreateNestedManyWithoutModelInput = {
    create?: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput> | InStockCreateWithoutModelInput[] | InStockUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutModelInput | InStockCreateOrConnectWithoutModelInput[]
    createMany?: InStockCreateManyModelInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type InStockUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput> | InStockCreateWithoutModelInput[] | InStockUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutModelInput | InStockCreateOrConnectWithoutModelInput[]
    createMany?: InStockCreateManyModelInputEnvelope
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutModelNestedInput = {
    create?: XOR<BrandCreateWithoutModelInput, BrandUncheckedCreateWithoutModelInput>
    connectOrCreate?: BrandCreateOrConnectWithoutModelInput
    upsert?: BrandUpsertWithoutModelInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutModelInput, BrandUpdateWithoutModelInput>, BrandUncheckedUpdateWithoutModelInput>
  }

  export type InStockUpdateManyWithoutModelNestedInput = {
    create?: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput> | InStockCreateWithoutModelInput[] | InStockUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutModelInput | InStockCreateOrConnectWithoutModelInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutModelInput | InStockUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: InStockCreateManyModelInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutModelInput | InStockUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutModelInput | InStockUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type InStockUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput> | InStockCreateWithoutModelInput[] | InStockUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InStockCreateOrConnectWithoutModelInput | InStockCreateOrConnectWithoutModelInput[]
    upsert?: InStockUpsertWithWhereUniqueWithoutModelInput | InStockUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: InStockCreateManyModelInputEnvelope
    set?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    disconnect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    delete?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    connect?: InStockWhereUniqueInput | InStockWhereUniqueInput[]
    update?: InStockUpdateWithWhereUniqueWithoutModelInput | InStockUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: InStockUpdateManyWithWhereWithoutModelInput | InStockUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: InStockScalarWhereInput | InStockScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutInStockInput = {
    create?: XOR<ModelCreateWithoutInStockInput, ModelUncheckedCreateWithoutInStockInput>
    connectOrCreate?: ModelCreateOrConnectWithoutInStockInput
    connect?: ModelWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutInStockInput = {
    create?: XOR<BrandCreateWithoutInStockInput, BrandUncheckedCreateWithoutInStockInput>
    connectOrCreate?: BrandCreateOrConnectWithoutInStockInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutInStockInput = {
    create?: XOR<ProductTypeCreateWithoutInStockInput, ProductTypeUncheckedCreateWithoutInStockInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutInStockInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type SalesEntryCreateNestedManyWithoutInstockInput = {
    create?: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput> | SalesEntryCreateWithoutInstockInput[] | SalesEntryUncheckedCreateWithoutInstockInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutInstockInput | SalesEntryCreateOrConnectWithoutInstockInput[]
    createMany?: SalesEntryCreateManyInstockInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type SalesEntryUncheckedCreateNestedManyWithoutInstockInput = {
    create?: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput> | SalesEntryCreateWithoutInstockInput[] | SalesEntryUncheckedCreateWithoutInstockInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutInstockInput | SalesEntryCreateOrConnectWithoutInstockInput[]
    createMany?: SalesEntryCreateManyInstockInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ModelUpdateOneRequiredWithoutInStockNestedInput = {
    create?: XOR<ModelCreateWithoutInStockInput, ModelUncheckedCreateWithoutInStockInput>
    connectOrCreate?: ModelCreateOrConnectWithoutInStockInput
    upsert?: ModelUpsertWithoutInStockInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutInStockInput, ModelUpdateWithoutInStockInput>, ModelUncheckedUpdateWithoutInStockInput>
  }

  export type BrandUpdateOneRequiredWithoutInStockNestedInput = {
    create?: XOR<BrandCreateWithoutInStockInput, BrandUncheckedCreateWithoutInStockInput>
    connectOrCreate?: BrandCreateOrConnectWithoutInStockInput
    upsert?: BrandUpsertWithoutInStockInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutInStockInput, BrandUpdateWithoutInStockInput>, BrandUncheckedUpdateWithoutInStockInput>
  }

  export type ProductTypeUpdateOneRequiredWithoutInStockNestedInput = {
    create?: XOR<ProductTypeCreateWithoutInStockInput, ProductTypeUncheckedCreateWithoutInStockInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutInStockInput
    upsert?: ProductTypeUpsertWithoutInStockInput
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutInStockInput, ProductTypeUpdateWithoutInStockInput>, ProductTypeUncheckedUpdateWithoutInStockInput>
  }

  export type SalesEntryUpdateManyWithoutInstockNestedInput = {
    create?: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput> | SalesEntryCreateWithoutInstockInput[] | SalesEntryUncheckedCreateWithoutInstockInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutInstockInput | SalesEntryCreateOrConnectWithoutInstockInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutInstockInput | SalesEntryUpsertWithWhereUniqueWithoutInstockInput[]
    createMany?: SalesEntryCreateManyInstockInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutInstockInput | SalesEntryUpdateWithWhereUniqueWithoutInstockInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutInstockInput | SalesEntryUpdateManyWithWhereWithoutInstockInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type SalesEntryUncheckedUpdateManyWithoutInstockNestedInput = {
    create?: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput> | SalesEntryCreateWithoutInstockInput[] | SalesEntryUncheckedCreateWithoutInstockInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutInstockInput | SalesEntryCreateOrConnectWithoutInstockInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutInstockInput | SalesEntryUpsertWithWhereUniqueWithoutInstockInput[]
    createMany?: SalesEntryCreateManyInstockInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutInstockInput | SalesEntryUpdateWithWhereUniqueWithoutInstockInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutInstockInput | SalesEntryUpdateManyWithWhereWithoutInstockInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type InStockCreateNestedOneWithoutSalesEntryInput = {
    create?: XOR<InStockCreateWithoutSalesEntryInput, InStockUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: InStockCreateOrConnectWithoutSalesEntryInput
    connect?: InStockWhereUniqueInput
  }

  export type SellerCreateNestedOneWithoutSalesEntryInput = {
    create?: XOR<SellerCreateWithoutSalesEntryInput, SellerUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: SellerCreateOrConnectWithoutSalesEntryInput
    connect?: SellerWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutSalesEntryInput = {
    create?: XOR<CustomerCreateWithoutSalesEntryInput, CustomerUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesEntryInput
    connect?: CustomerWhereUniqueInput
  }

  export type InStockUpdateOneRequiredWithoutSalesEntryNestedInput = {
    create?: XOR<InStockCreateWithoutSalesEntryInput, InStockUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: InStockCreateOrConnectWithoutSalesEntryInput
    upsert?: InStockUpsertWithoutSalesEntryInput
    connect?: InStockWhereUniqueInput
    update?: XOR<XOR<InStockUpdateToOneWithWhereWithoutSalesEntryInput, InStockUpdateWithoutSalesEntryInput>, InStockUncheckedUpdateWithoutSalesEntryInput>
  }

  export type SellerUpdateOneRequiredWithoutSalesEntryNestedInput = {
    create?: XOR<SellerCreateWithoutSalesEntryInput, SellerUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: SellerCreateOrConnectWithoutSalesEntryInput
    upsert?: SellerUpsertWithoutSalesEntryInput
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutSalesEntryInput, SellerUpdateWithoutSalesEntryInput>, SellerUncheckedUpdateWithoutSalesEntryInput>
  }

  export type CustomerUpdateOneRequiredWithoutSalesEntryNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesEntryInput, CustomerUncheckedCreateWithoutSalesEntryInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesEntryInput
    upsert?: CustomerUpsertWithoutSalesEntryInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesEntryInput, CustomerUpdateWithoutSalesEntryInput>, CustomerUncheckedUpdateWithoutSalesEntryInput>
  }

  export type SalesEntryCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput> | SalesEntryCreateWithoutCustomerInput[] | SalesEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutCustomerInput | SalesEntryCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesEntryCreateManyCustomerInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type SalesEntryUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput> | SalesEntryCreateWithoutCustomerInput[] | SalesEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutCustomerInput | SalesEntryCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesEntryCreateManyCustomerInputEnvelope
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
  }

  export type SalesEntryUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput> | SalesEntryCreateWithoutCustomerInput[] | SalesEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutCustomerInput | SalesEntryCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutCustomerInput | SalesEntryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesEntryCreateManyCustomerInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutCustomerInput | SalesEntryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutCustomerInput | SalesEntryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type SalesEntryUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput> | SalesEntryCreateWithoutCustomerInput[] | SalesEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesEntryCreateOrConnectWithoutCustomerInput | SalesEntryCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesEntryUpsertWithWhereUniqueWithoutCustomerInput | SalesEntryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesEntryCreateManyCustomerInputEnvelope
    set?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    disconnect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    delete?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    connect?: SalesEntryWhereUniqueInput | SalesEntryWhereUniqueInput[]
    update?: SalesEntryUpdateWithWhereUniqueWithoutCustomerInput | SalesEntryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesEntryUpdateManyWithWhereWithoutCustomerInput | SalesEntryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SalesEntryCreateWithoutSellerInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    createdAt?: Date | string | null
    instock: InStockCreateNestedOneWithoutSalesEntryInput
    customer: CustomerCreateNestedOneWithoutSalesEntryInput
  }

  export type SalesEntryUncheckedCreateWithoutSellerInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryCreateOrConnectWithoutSellerInput = {
    where: SalesEntryWhereUniqueInput
    create: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput>
  }

  export type SalesEntryCreateManySellerInputEnvelope = {
    data: SalesEntryCreateManySellerInput | SalesEntryCreateManySellerInput[]
  }

  export type SalesEntryUpsertWithWhereUniqueWithoutSellerInput = {
    where: SalesEntryWhereUniqueInput
    update: XOR<SalesEntryUpdateWithoutSellerInput, SalesEntryUncheckedUpdateWithoutSellerInput>
    create: XOR<SalesEntryCreateWithoutSellerInput, SalesEntryUncheckedCreateWithoutSellerInput>
  }

  export type SalesEntryUpdateWithWhereUniqueWithoutSellerInput = {
    where: SalesEntryWhereUniqueInput
    data: XOR<SalesEntryUpdateWithoutSellerInput, SalesEntryUncheckedUpdateWithoutSellerInput>
  }

  export type SalesEntryUpdateManyWithWhereWithoutSellerInput = {
    where: SalesEntryScalarWhereInput
    data: XOR<SalesEntryUpdateManyMutationInput, SalesEntryUncheckedUpdateManyWithoutSellerInput>
  }

  export type SalesEntryScalarWhereInput = {
    AND?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
    OR?: SalesEntryScalarWhereInput[]
    NOT?: SalesEntryScalarWhereInput | SalesEntryScalarWhereInput[]
    id?: StringFilter<"SalesEntry"> | string
    instockId?: StringFilter<"SalesEntry"> | string
    IMEI?: StringFilter<"SalesEntry"> | string
    price?: IntFilter<"SalesEntry"> | number
    discount?: IntFilter<"SalesEntry"> | number
    sellerId?: StringFilter<"SalesEntry"> | string
    customerId?: StringFilter<"SalesEntry"> | string
    createdAt?: DateTimeNullableFilter<"SalesEntry"> | Date | string | null
  }

  export type BrandCreateWithoutProductTypeInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
    Model?: ModelCreateNestedManyWithoutBrandInput
    InStock?: InStockCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutProductTypeInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
    Model?: ModelUncheckedCreateNestedManyWithoutBrandInput
    InStock?: InStockUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutProductTypeInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput>
  }

  export type BrandCreateManyProductTypeInputEnvelope = {
    data: BrandCreateManyProductTypeInput | BrandCreateManyProductTypeInput[]
  }

  export type InStockCreateWithoutProductTypeInput = {
    id?: string
    name: string
    IMEI: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    model: ModelCreateNestedOneWithoutInStockInput
    brand: BrandCreateNestedOneWithoutInStockInput
    SalesEntry?: SalesEntryCreateNestedManyWithoutInstockInput
  }

  export type InStockUncheckedCreateWithoutProductTypeInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutInstockInput
  }

  export type InStockCreateOrConnectWithoutProductTypeInput = {
    where: InStockWhereUniqueInput
    create: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput>
  }

  export type InStockCreateManyProductTypeInputEnvelope = {
    data: InStockCreateManyProductTypeInput | InStockCreateManyProductTypeInput[]
  }

  export type BrandUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: BrandWhereUniqueInput
    update: XOR<BrandUpdateWithoutProductTypeInput, BrandUncheckedUpdateWithoutProductTypeInput>
    create: XOR<BrandCreateWithoutProductTypeInput, BrandUncheckedCreateWithoutProductTypeInput>
  }

  export type BrandUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: BrandWhereUniqueInput
    data: XOR<BrandUpdateWithoutProductTypeInput, BrandUncheckedUpdateWithoutProductTypeInput>
  }

  export type BrandUpdateManyWithWhereWithoutProductTypeInput = {
    where: BrandScalarWhereInput
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type BrandScalarWhereInput = {
    AND?: BrandScalarWhereInput | BrandScalarWhereInput[]
    OR?: BrandScalarWhereInput[]
    NOT?: BrandScalarWhereInput | BrandScalarWhereInput[]
    id?: StringFilter<"Brand"> | string
    brandName?: StringFilter<"Brand"> | string
    productTypeId?: StringFilter<"Brand"> | string
    createdAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
  }

  export type InStockUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: InStockWhereUniqueInput
    update: XOR<InStockUpdateWithoutProductTypeInput, InStockUncheckedUpdateWithoutProductTypeInput>
    create: XOR<InStockCreateWithoutProductTypeInput, InStockUncheckedCreateWithoutProductTypeInput>
  }

  export type InStockUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: InStockWhereUniqueInput
    data: XOR<InStockUpdateWithoutProductTypeInput, InStockUncheckedUpdateWithoutProductTypeInput>
  }

  export type InStockUpdateManyWithWhereWithoutProductTypeInput = {
    where: InStockScalarWhereInput
    data: XOR<InStockUpdateManyMutationInput, InStockUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type InStockScalarWhereInput = {
    AND?: InStockScalarWhereInput | InStockScalarWhereInput[]
    OR?: InStockScalarWhereInput[]
    NOT?: InStockScalarWhereInput | InStockScalarWhereInput[]
    id?: StringFilter<"InStock"> | string
    name?: StringFilter<"InStock"> | string
    IMEI?: StringFilter<"InStock"> | string
    modelId?: StringFilter<"InStock"> | string
    brandId?: StringFilter<"InStock"> | string
    productTypeId?: StringFilter<"InStock"> | string
    purchasePrice?: IntFilter<"InStock"> | number
    price?: IntFilter<"InStock"> | number
    sold?: BoolFilter<"InStock"> | boolean
    color?: StringFilter<"InStock"> | string
    ram?: StringNullableFilter<"InStock"> | string | null
    rom?: StringNullableFilter<"InStock"> | string | null
    createdAt?: DateTimeNullableFilter<"InStock"> | Date | string | null
  }

  export type ProductTypeCreateWithoutBrandInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    InStock?: InStockCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateWithoutBrandInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    InStock?: InStockUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeCreateOrConnectWithoutBrandInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutBrandInput, ProductTypeUncheckedCreateWithoutBrandInput>
  }

  export type ModelCreateWithoutBrandInput = {
    id?: string
    model: string
    createdAt?: Date | string | null
    InStock?: InStockCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutBrandInput = {
    id?: string
    model: string
    createdAt?: Date | string | null
    InStock?: InStockUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutBrandInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput>
  }

  export type ModelCreateManyBrandInputEnvelope = {
    data: ModelCreateManyBrandInput | ModelCreateManyBrandInput[]
  }

  export type InStockCreateWithoutBrandInput = {
    id?: string
    name: string
    IMEI: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    model: ModelCreateNestedOneWithoutInStockInput
    productType: ProductTypeCreateNestedOneWithoutInStockInput
    SalesEntry?: SalesEntryCreateNestedManyWithoutInstockInput
  }

  export type InStockUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutInstockInput
  }

  export type InStockCreateOrConnectWithoutBrandInput = {
    where: InStockWhereUniqueInput
    create: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput>
  }

  export type InStockCreateManyBrandInputEnvelope = {
    data: InStockCreateManyBrandInput | InStockCreateManyBrandInput[]
  }

  export type ProductTypeUpsertWithoutBrandInput = {
    update: XOR<ProductTypeUpdateWithoutBrandInput, ProductTypeUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductTypeCreateWithoutBrandInput, ProductTypeUncheckedCreateWithoutBrandInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutBrandInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutBrandInput, ProductTypeUncheckedUpdateWithoutBrandInput>
  }

  export type ProductTypeUpdateWithoutBrandInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutBrandInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutBrandInput, ModelUncheckedUpdateWithoutBrandInput>
    create: XOR<ModelCreateWithoutBrandInput, ModelUncheckedCreateWithoutBrandInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutBrandInput, ModelUncheckedUpdateWithoutBrandInput>
  }

  export type ModelUpdateManyWithWhereWithoutBrandInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: StringFilter<"Model"> | string
    model?: StringFilter<"Model"> | string
    brandId?: StringFilter<"Model"> | string
    createdAt?: DateTimeNullableFilter<"Model"> | Date | string | null
  }

  export type InStockUpsertWithWhereUniqueWithoutBrandInput = {
    where: InStockWhereUniqueInput
    update: XOR<InStockUpdateWithoutBrandInput, InStockUncheckedUpdateWithoutBrandInput>
    create: XOR<InStockCreateWithoutBrandInput, InStockUncheckedCreateWithoutBrandInput>
  }

  export type InStockUpdateWithWhereUniqueWithoutBrandInput = {
    where: InStockWhereUniqueInput
    data: XOR<InStockUpdateWithoutBrandInput, InStockUncheckedUpdateWithoutBrandInput>
  }

  export type InStockUpdateManyWithWhereWithoutBrandInput = {
    where: InStockScalarWhereInput
    data: XOR<InStockUpdateManyMutationInput, InStockUncheckedUpdateManyWithoutBrandInput>
  }

  export type BrandCreateWithoutModelInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
    productType: ProductTypeCreateNestedOneWithoutBrandInput
    InStock?: InStockCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutModelInput = {
    id?: string
    brandName: string
    productTypeId: string
    createdAt?: Date | string | null
    InStock?: InStockUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutModelInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutModelInput, BrandUncheckedCreateWithoutModelInput>
  }

  export type InStockCreateWithoutModelInput = {
    id?: string
    name: string
    IMEI: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    brand: BrandCreateNestedOneWithoutInStockInput
    productType: ProductTypeCreateNestedOneWithoutInStockInput
    SalesEntry?: SalesEntryCreateNestedManyWithoutInstockInput
  }

  export type InStockUncheckedCreateWithoutModelInput = {
    id?: string
    name: string
    IMEI: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    SalesEntry?: SalesEntryUncheckedCreateNestedManyWithoutInstockInput
  }

  export type InStockCreateOrConnectWithoutModelInput = {
    where: InStockWhereUniqueInput
    create: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput>
  }

  export type InStockCreateManyModelInputEnvelope = {
    data: InStockCreateManyModelInput | InStockCreateManyModelInput[]
  }

  export type BrandUpsertWithoutModelInput = {
    update: XOR<BrandUpdateWithoutModelInput, BrandUncheckedUpdateWithoutModelInput>
    create: XOR<BrandCreateWithoutModelInput, BrandUncheckedCreateWithoutModelInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutModelInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutModelInput, BrandUncheckedUpdateWithoutModelInput>
  }

  export type BrandUpdateWithoutModelInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productType?: ProductTypeUpdateOneRequiredWithoutBrandNestedInput
    InStock?: InStockUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutModelInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type InStockUpsertWithWhereUniqueWithoutModelInput = {
    where: InStockWhereUniqueInput
    update: XOR<InStockUpdateWithoutModelInput, InStockUncheckedUpdateWithoutModelInput>
    create: XOR<InStockCreateWithoutModelInput, InStockUncheckedCreateWithoutModelInput>
  }

  export type InStockUpdateWithWhereUniqueWithoutModelInput = {
    where: InStockWhereUniqueInput
    data: XOR<InStockUpdateWithoutModelInput, InStockUncheckedUpdateWithoutModelInput>
  }

  export type InStockUpdateManyWithWhereWithoutModelInput = {
    where: InStockScalarWhereInput
    data: XOR<InStockUpdateManyMutationInput, InStockUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelCreateWithoutInStockInput = {
    id?: string
    model: string
    createdAt?: Date | string | null
    brand: BrandCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutInStockInput = {
    id?: string
    model: string
    brandId: string
    createdAt?: Date | string | null
  }

  export type ModelCreateOrConnectWithoutInStockInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutInStockInput, ModelUncheckedCreateWithoutInStockInput>
  }

  export type BrandCreateWithoutInStockInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
    productType: ProductTypeCreateNestedOneWithoutBrandInput
    Model?: ModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutInStockInput = {
    id?: string
    brandName: string
    productTypeId: string
    createdAt?: Date | string | null
    Model?: ModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutInStockInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutInStockInput, BrandUncheckedCreateWithoutInStockInput>
  }

  export type ProductTypeCreateWithoutInStockInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    Brand?: BrandCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateWithoutInStockInput = {
    id?: string
    type: string
    createdAt?: Date | string | null
    Brand?: BrandUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeCreateOrConnectWithoutInStockInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutInStockInput, ProductTypeUncheckedCreateWithoutInStockInput>
  }

  export type SalesEntryCreateWithoutInstockInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    createdAt?: Date | string | null
    Seller: SellerCreateNestedOneWithoutSalesEntryInput
    customer: CustomerCreateNestedOneWithoutSalesEntryInput
  }

  export type SalesEntryUncheckedCreateWithoutInstockInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryCreateOrConnectWithoutInstockInput = {
    where: SalesEntryWhereUniqueInput
    create: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput>
  }

  export type SalesEntryCreateManyInstockInputEnvelope = {
    data: SalesEntryCreateManyInstockInput | SalesEntryCreateManyInstockInput[]
  }

  export type ModelUpsertWithoutInStockInput = {
    update: XOR<ModelUpdateWithoutInStockInput, ModelUncheckedUpdateWithoutInStockInput>
    create: XOR<ModelCreateWithoutInStockInput, ModelUncheckedCreateWithoutInStockInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutInStockInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutInStockInput, ModelUncheckedUpdateWithoutInStockInput>
  }

  export type ModelUpdateWithoutInStockInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandUpdateOneRequiredWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutInStockInput = {
    model?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUpsertWithoutInStockInput = {
    update: XOR<BrandUpdateWithoutInStockInput, BrandUncheckedUpdateWithoutInStockInput>
    create: XOR<BrandCreateWithoutInStockInput, BrandUncheckedCreateWithoutInStockInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutInStockInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutInStockInput, BrandUncheckedUpdateWithoutInStockInput>
  }

  export type BrandUpdateWithoutInStockInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productType?: ProductTypeUpdateOneRequiredWithoutBrandNestedInput
    Model?: ModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutInStockInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Model?: ModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProductTypeUpsertWithoutInStockInput = {
    update: XOR<ProductTypeUpdateWithoutInStockInput, ProductTypeUncheckedUpdateWithoutInStockInput>
    create: XOR<ProductTypeCreateWithoutInStockInput, ProductTypeUncheckedCreateWithoutInStockInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutInStockInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutInStockInput, ProductTypeUncheckedUpdateWithoutInStockInput>
  }

  export type ProductTypeUpdateWithoutInStockInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Brand?: BrandUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutInStockInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Brand?: BrandUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type SalesEntryUpsertWithWhereUniqueWithoutInstockInput = {
    where: SalesEntryWhereUniqueInput
    update: XOR<SalesEntryUpdateWithoutInstockInput, SalesEntryUncheckedUpdateWithoutInstockInput>
    create: XOR<SalesEntryCreateWithoutInstockInput, SalesEntryUncheckedCreateWithoutInstockInput>
  }

  export type SalesEntryUpdateWithWhereUniqueWithoutInstockInput = {
    where: SalesEntryWhereUniqueInput
    data: XOR<SalesEntryUpdateWithoutInstockInput, SalesEntryUncheckedUpdateWithoutInstockInput>
  }

  export type SalesEntryUpdateManyWithWhereWithoutInstockInput = {
    where: SalesEntryScalarWhereInput
    data: XOR<SalesEntryUpdateManyMutationInput, SalesEntryUncheckedUpdateManyWithoutInstockInput>
  }

  export type InStockCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    IMEI: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
    model: ModelCreateNestedOneWithoutInStockInput
    brand: BrandCreateNestedOneWithoutInStockInput
    productType: ProductTypeCreateNestedOneWithoutInStockInput
  }

  export type InStockUncheckedCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
  }

  export type InStockCreateOrConnectWithoutSalesEntryInput = {
    where: InStockWhereUniqueInput
    create: XOR<InStockCreateWithoutSalesEntryInput, InStockUncheckedCreateWithoutSalesEntryInput>
  }

  export type SellerCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
  }

  export type SellerUncheckedCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    createdAt?: Date | string | null
  }

  export type SellerCreateOrConnectWithoutSalesEntryInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutSalesEntryInput, SellerUncheckedCreateWithoutSalesEntryInput>
  }

  export type CustomerCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string | null
  }

  export type CustomerUncheckedCreateWithoutSalesEntryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string | null
  }

  export type CustomerCreateOrConnectWithoutSalesEntryInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesEntryInput, CustomerUncheckedCreateWithoutSalesEntryInput>
  }

  export type InStockUpsertWithoutSalesEntryInput = {
    update: XOR<InStockUpdateWithoutSalesEntryInput, InStockUncheckedUpdateWithoutSalesEntryInput>
    create: XOR<InStockCreateWithoutSalesEntryInput, InStockUncheckedCreateWithoutSalesEntryInput>
    where?: InStockWhereInput
  }

  export type InStockUpdateToOneWithWhereWithoutSalesEntryInput = {
    where?: InStockWhereInput
    data: XOR<InStockUpdateWithoutSalesEntryInput, InStockUncheckedUpdateWithoutSalesEntryInput>
  }

  export type InStockUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutInStockNestedInput
    brand?: BrandUpdateOneRequiredWithoutInStockNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutInStockNestedInput
  }

  export type InStockUncheckedUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerUpsertWithoutSalesEntryInput = {
    update: XOR<SellerUpdateWithoutSalesEntryInput, SellerUncheckedUpdateWithoutSalesEntryInput>
    create: XOR<SellerCreateWithoutSalesEntryInput, SellerUncheckedCreateWithoutSalesEntryInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutSalesEntryInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutSalesEntryInput, SellerUncheckedUpdateWithoutSalesEntryInput>
  }

  export type SellerUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerUncheckedUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUpsertWithoutSalesEntryInput = {
    update: XOR<CustomerUpdateWithoutSalesEntryInput, CustomerUncheckedUpdateWithoutSalesEntryInput>
    create: XOR<CustomerCreateWithoutSalesEntryInput, CustomerUncheckedCreateWithoutSalesEntryInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesEntryInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesEntryInput, CustomerUncheckedUpdateWithoutSalesEntryInput>
  }

  export type CustomerUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateWithoutSalesEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryCreateWithoutCustomerInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    createdAt?: Date | string | null
    instock: InStockCreateNestedOneWithoutSalesEntryInput
    Seller: SellerCreateNestedOneWithoutSalesEntryInput
  }

  export type SalesEntryUncheckedCreateWithoutCustomerInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryCreateOrConnectWithoutCustomerInput = {
    where: SalesEntryWhereUniqueInput
    create: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput>
  }

  export type SalesEntryCreateManyCustomerInputEnvelope = {
    data: SalesEntryCreateManyCustomerInput | SalesEntryCreateManyCustomerInput[]
  }

  export type SalesEntryUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SalesEntryWhereUniqueInput
    update: XOR<SalesEntryUpdateWithoutCustomerInput, SalesEntryUncheckedUpdateWithoutCustomerInput>
    create: XOR<SalesEntryCreateWithoutCustomerInput, SalesEntryUncheckedCreateWithoutCustomerInput>
  }

  export type SalesEntryUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SalesEntryWhereUniqueInput
    data: XOR<SalesEntryUpdateWithoutCustomerInput, SalesEntryUncheckedUpdateWithoutCustomerInput>
  }

  export type SalesEntryUpdateManyWithWhereWithoutCustomerInput = {
    where: SalesEntryScalarWhereInput
    data: XOR<SalesEntryUpdateManyMutationInput, SalesEntryUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SalesEntryCreateManySellerInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryUpdateWithoutSellerInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instock?: InStockUpdateOneRequiredWithoutSalesEntryNestedInput
    customer?: CustomerUpdateOneRequiredWithoutSalesEntryNestedInput
  }

  export type SalesEntryUncheckedUpdateWithoutSellerInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryUncheckedUpdateManyWithoutSellerInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandCreateManyProductTypeInput = {
    id?: string
    brandName: string
    createdAt?: Date | string | null
  }

  export type InStockCreateManyProductTypeInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    brandId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
  }

  export type BrandUpdateWithoutProductTypeInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Model?: ModelUpdateManyWithoutBrandNestedInput
    InStock?: InStockUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutProductTypeInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Model?: ModelUncheckedUpdateManyWithoutBrandNestedInput
    InStock?: InStockUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateManyWithoutProductTypeInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InStockUpdateWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutInStockNestedInput
    brand?: BrandUpdateOneRequiredWithoutInStockNestedInput
    SalesEntry?: SalesEntryUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateManyWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModelCreateManyBrandInput = {
    id?: string
    model: string
    createdAt?: Date | string | null
  }

  export type InStockCreateManyBrandInput = {
    id?: string
    name: string
    IMEI: string
    modelId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
  }

  export type ModelUpdateWithoutBrandInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutBrandInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InStock?: InStockUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutBrandInput = {
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InStockUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutInStockNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutInStockNestedInput
    SalesEntry?: SalesEntryUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateManyWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InStockCreateManyModelInput = {
    id?: string
    name: string
    IMEI: string
    brandId: string
    productTypeId: string
    purchasePrice: number
    price: number
    sold?: boolean
    color: string
    ram?: string | null
    rom?: string | null
    createdAt?: Date | string | null
  }

  export type InStockUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandUpdateOneRequiredWithoutInStockNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutInStockNestedInput
    SalesEntry?: SalesEntryUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesEntry?: SalesEntryUncheckedUpdateManyWithoutInstockNestedInput
  }

  export type InStockUncheckedUpdateManyWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    productTypeId?: StringFieldUpdateOperationsInput | string
    purchasePrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sold?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryCreateManyInstockInput = {
    id?: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    customerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryUpdateWithoutInstockInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Seller?: SellerUpdateOneRequiredWithoutSalesEntryNestedInput
    customer?: CustomerUpdateOneRequiredWithoutSalesEntryNestedInput
  }

  export type SalesEntryUncheckedUpdateWithoutInstockInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryUncheckedUpdateManyWithoutInstockInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryCreateManyCustomerInput = {
    id?: string
    instockId: string
    IMEI: string
    price: number
    discount: number
    sellerId: string
    createdAt?: Date | string | null
  }

  export type SalesEntryUpdateWithoutCustomerInput = {
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instock?: InStockUpdateOneRequiredWithoutSalesEntryNestedInput
    Seller?: SellerUpdateOneRequiredWithoutSalesEntryNestedInput
  }

  export type SalesEntryUncheckedUpdateWithoutCustomerInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesEntryUncheckedUpdateManyWithoutCustomerInput = {
    instockId?: StringFieldUpdateOperationsInput | string
    IMEI?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SellerCountOutputTypeDefaultArgs instead
     */
    export type SellerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SellerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTypeCountOutputTypeDefaultArgs instead
     */
    export type ProductTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelCountOutputTypeDefaultArgs instead
     */
    export type ModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InStockCountOutputTypeDefaultArgs instead
     */
    export type InStockCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InStockCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SellerDefaultArgs instead
     */
    export type SellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SellerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTypeDefaultArgs instead
     */
    export type ProductTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelDefaultArgs instead
     */
    export type ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InStockDefaultArgs instead
     */
    export type InStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InStockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesEntryDefaultArgs instead
     */
    export type SalesEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}