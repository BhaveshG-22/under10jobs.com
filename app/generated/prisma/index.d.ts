
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model peferenceGroup
 * 
 */
export type peferenceGroup = $Result.DefaultSelection<Prisma.$peferenceGroupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const experienceLevelType: {
  ANY: 'ANY',
  INTERNSHIP: 'INTERNSHIP',
  ASSOCIATE: 'ASSOCIATE',
  MIDSENIOR: 'MIDSENIOR',
  DIRECTOR: 'DIRECTOR',
  EXECUTIVE: 'EXECUTIVE'
};

export type experienceLevelType = (typeof experienceLevelType)[keyof typeof experienceLevelType]


export const remoteType: {
  ANY: 'ANY',
  ONSITE: 'ONSITE',
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID'
};

export type remoteType = (typeof remoteType)[keyof typeof remoteType]

}

export type experienceLevelType = $Enums.experienceLevelType

export const experienceLevelType: typeof $Enums.experienceLevelType

export type remoteType = $Enums.remoteType

export const remoteType: typeof $Enums.remoteType

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peferenceGroup`: Exposes CRUD operations for the **peferenceGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeferenceGroups
    * const peferenceGroups = await prisma.peferenceGroup.findMany()
    * ```
    */
  get peferenceGroup(): Prisma.peferenceGroupDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UserPreferences: 'UserPreferences',
    peferenceGroup: 'peferenceGroup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userPreferences" | "peferenceGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      peferenceGroup: {
        payload: Prisma.$peferenceGroupPayload<ExtArgs>
        fields: Prisma.peferenceGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peferenceGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peferenceGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          findFirst: {
            args: Prisma.peferenceGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peferenceGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          findMany: {
            args: Prisma.peferenceGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>[]
          }
          create: {
            args: Prisma.peferenceGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          createMany: {
            args: Prisma.peferenceGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.peferenceGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>[]
          }
          delete: {
            args: Prisma.peferenceGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          update: {
            args: Prisma.peferenceGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          deleteMany: {
            args: Prisma.peferenceGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peferenceGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.peferenceGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>[]
          }
          upsert: {
            args: Prisma.peferenceGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peferenceGroupPayload>
          }
          aggregate: {
            args: Prisma.PeferenceGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeferenceGroup>
          }
          groupBy: {
            args: Prisma.peferenceGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeferenceGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.peferenceGroupCountArgs<ExtArgs>
            result: $Utils.Optional<PeferenceGroupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userPreferences?: UserPreferencesOmit
    peferenceGroup?: peferenceGroupOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobPreferences: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPreferences?: boolean | UserCountOutputTypeCountJobPreferencesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
  }


  /**
   * Count Type PeferenceGroupCountOutputType
   */

  export type PeferenceGroupCountOutputType = {
    Users: number
  }

  export type PeferenceGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | PeferenceGroupCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PeferenceGroupCountOutputType without action
   */
  export type PeferenceGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeferenceGroupCountOutputType
     */
    select?: PeferenceGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeferenceGroupCountOutputType without action
   */
  export type PeferenceGroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
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
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
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
    createdAt: Date
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
    createdAt?: boolean
    jobPreferences?: boolean | User$jobPreferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPreferences?: boolean | User$jobPreferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobPreferences: Prisma.$UserPreferencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPreferences<T extends User$jobPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$jobPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.jobPreferences
   */
  export type User$jobPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    cursor?: UserPreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    groupid: string | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    groupid: string | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    groupid: number
    _all: number
  }


  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    groupid?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    groupid?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    groupid?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    groupid: string
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    groupid?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupid", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | peferenceGroupDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$peferenceGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      groupid: string
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
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
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends peferenceGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peferenceGroupDefaultArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly groupid: FieldRef<"UserPreferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model peferenceGroup
   */

  export type AggregatePeferenceGroup = {
    _count: PeferenceGroupCountAggregateOutputType | null
    _min: PeferenceGroupMinAggregateOutputType | null
    _max: PeferenceGroupMaxAggregateOutputType | null
  }

  export type PeferenceGroupMinAggregateOutputType = {
    id: string | null
    hash: string | null
    jobLocationTimezone: string | null
  }

  export type PeferenceGroupMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    jobLocationTimezone: string | null
  }

  export type PeferenceGroupCountAggregateOutputType = {
    id: number
    hash: number
    jobTitles: number
    location: number
    jobLocationTimezone: number
    experienceLevel: number
    remote: number
    _all: number
  }


  export type PeferenceGroupMinAggregateInputType = {
    id?: true
    hash?: true
    jobLocationTimezone?: true
  }

  export type PeferenceGroupMaxAggregateInputType = {
    id?: true
    hash?: true
    jobLocationTimezone?: true
  }

  export type PeferenceGroupCountAggregateInputType = {
    id?: true
    hash?: true
    jobTitles?: true
    location?: true
    jobLocationTimezone?: true
    experienceLevel?: true
    remote?: true
    _all?: true
  }

  export type PeferenceGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peferenceGroup to aggregate.
     */
    where?: peferenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peferenceGroups to fetch.
     */
    orderBy?: peferenceGroupOrderByWithRelationInput | peferenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peferenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peferenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peferenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peferenceGroups
    **/
    _count?: true | PeferenceGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeferenceGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeferenceGroupMaxAggregateInputType
  }

  export type GetPeferenceGroupAggregateType<T extends PeferenceGroupAggregateArgs> = {
        [P in keyof T & keyof AggregatePeferenceGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeferenceGroup[P]>
      : GetScalarType<T[P], AggregatePeferenceGroup[P]>
  }




  export type peferenceGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peferenceGroupWhereInput
    orderBy?: peferenceGroupOrderByWithAggregationInput | peferenceGroupOrderByWithAggregationInput[]
    by: PeferenceGroupScalarFieldEnum[] | PeferenceGroupScalarFieldEnum
    having?: peferenceGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeferenceGroupCountAggregateInputType | true
    _min?: PeferenceGroupMinAggregateInputType
    _max?: PeferenceGroupMaxAggregateInputType
  }

  export type PeferenceGroupGroupByOutputType = {
    id: string
    hash: string
    jobTitles: string[]
    location: string[]
    jobLocationTimezone: string
    experienceLevel: $Enums.experienceLevelType[]
    remote: $Enums.remoteType[]
    _count: PeferenceGroupCountAggregateOutputType | null
    _min: PeferenceGroupMinAggregateOutputType | null
    _max: PeferenceGroupMaxAggregateOutputType | null
  }

  type GetPeferenceGroupGroupByPayload<T extends peferenceGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeferenceGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeferenceGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeferenceGroupGroupByOutputType[P]>
            : GetScalarType<T[P], PeferenceGroupGroupByOutputType[P]>
        }
      >
    >


  export type peferenceGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    jobTitles?: boolean
    location?: boolean
    jobLocationTimezone?: boolean
    experienceLevel?: boolean
    remote?: boolean
    Users?: boolean | peferenceGroup$UsersArgs<ExtArgs>
    _count?: boolean | PeferenceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peferenceGroup"]>

  export type peferenceGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    jobTitles?: boolean
    location?: boolean
    jobLocationTimezone?: boolean
    experienceLevel?: boolean
    remote?: boolean
  }, ExtArgs["result"]["peferenceGroup"]>

  export type peferenceGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    jobTitles?: boolean
    location?: boolean
    jobLocationTimezone?: boolean
    experienceLevel?: boolean
    remote?: boolean
  }, ExtArgs["result"]["peferenceGroup"]>

  export type peferenceGroupSelectScalar = {
    id?: boolean
    hash?: boolean
    jobTitles?: boolean
    location?: boolean
    jobLocationTimezone?: boolean
    experienceLevel?: boolean
    remote?: boolean
  }

  export type peferenceGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash" | "jobTitles" | "location" | "jobLocationTimezone" | "experienceLevel" | "remote", ExtArgs["result"]["peferenceGroup"]>
  export type peferenceGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | peferenceGroup$UsersArgs<ExtArgs>
    _count?: boolean | PeferenceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type peferenceGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type peferenceGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $peferenceGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peferenceGroup"
    objects: {
      Users: Prisma.$UserPreferencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hash: string
      jobTitles: string[]
      location: string[]
      jobLocationTimezone: string
      experienceLevel: $Enums.experienceLevelType[]
      remote: $Enums.remoteType[]
    }, ExtArgs["result"]["peferenceGroup"]>
    composites: {}
  }

  type peferenceGroupGetPayload<S extends boolean | null | undefined | peferenceGroupDefaultArgs> = $Result.GetResult<Prisma.$peferenceGroupPayload, S>

  type peferenceGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peferenceGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeferenceGroupCountAggregateInputType | true
    }

  export interface peferenceGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peferenceGroup'], meta: { name: 'peferenceGroup' } }
    /**
     * Find zero or one PeferenceGroup that matches the filter.
     * @param {peferenceGroupFindUniqueArgs} args - Arguments to find a PeferenceGroup
     * @example
     * // Get one PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peferenceGroupFindUniqueArgs>(args: SelectSubset<T, peferenceGroupFindUniqueArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeferenceGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peferenceGroupFindUniqueOrThrowArgs} args - Arguments to find a PeferenceGroup
     * @example
     * // Get one PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peferenceGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, peferenceGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeferenceGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupFindFirstArgs} args - Arguments to find a PeferenceGroup
     * @example
     * // Get one PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peferenceGroupFindFirstArgs>(args?: SelectSubset<T, peferenceGroupFindFirstArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeferenceGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupFindFirstOrThrowArgs} args - Arguments to find a PeferenceGroup
     * @example
     * // Get one PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peferenceGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, peferenceGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeferenceGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeferenceGroups
     * const peferenceGroups = await prisma.peferenceGroup.findMany()
     * 
     * // Get first 10 PeferenceGroups
     * const peferenceGroups = await prisma.peferenceGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peferenceGroupWithIdOnly = await prisma.peferenceGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends peferenceGroupFindManyArgs>(args?: SelectSubset<T, peferenceGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeferenceGroup.
     * @param {peferenceGroupCreateArgs} args - Arguments to create a PeferenceGroup.
     * @example
     * // Create one PeferenceGroup
     * const PeferenceGroup = await prisma.peferenceGroup.create({
     *   data: {
     *     // ... data to create a PeferenceGroup
     *   }
     * })
     * 
     */
    create<T extends peferenceGroupCreateArgs>(args: SelectSubset<T, peferenceGroupCreateArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeferenceGroups.
     * @param {peferenceGroupCreateManyArgs} args - Arguments to create many PeferenceGroups.
     * @example
     * // Create many PeferenceGroups
     * const peferenceGroup = await prisma.peferenceGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peferenceGroupCreateManyArgs>(args?: SelectSubset<T, peferenceGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeferenceGroups and returns the data saved in the database.
     * @param {peferenceGroupCreateManyAndReturnArgs} args - Arguments to create many PeferenceGroups.
     * @example
     * // Create many PeferenceGroups
     * const peferenceGroup = await prisma.peferenceGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeferenceGroups and only return the `id`
     * const peferenceGroupWithIdOnly = await prisma.peferenceGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends peferenceGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, peferenceGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeferenceGroup.
     * @param {peferenceGroupDeleteArgs} args - Arguments to delete one PeferenceGroup.
     * @example
     * // Delete one PeferenceGroup
     * const PeferenceGroup = await prisma.peferenceGroup.delete({
     *   where: {
     *     // ... filter to delete one PeferenceGroup
     *   }
     * })
     * 
     */
    delete<T extends peferenceGroupDeleteArgs>(args: SelectSubset<T, peferenceGroupDeleteArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeferenceGroup.
     * @param {peferenceGroupUpdateArgs} args - Arguments to update one PeferenceGroup.
     * @example
     * // Update one PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peferenceGroupUpdateArgs>(args: SelectSubset<T, peferenceGroupUpdateArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeferenceGroups.
     * @param {peferenceGroupDeleteManyArgs} args - Arguments to filter PeferenceGroups to delete.
     * @example
     * // Delete a few PeferenceGroups
     * const { count } = await prisma.peferenceGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peferenceGroupDeleteManyArgs>(args?: SelectSubset<T, peferenceGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeferenceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeferenceGroups
     * const peferenceGroup = await prisma.peferenceGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peferenceGroupUpdateManyArgs>(args: SelectSubset<T, peferenceGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeferenceGroups and returns the data updated in the database.
     * @param {peferenceGroupUpdateManyAndReturnArgs} args - Arguments to update many PeferenceGroups.
     * @example
     * // Update many PeferenceGroups
     * const peferenceGroup = await prisma.peferenceGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeferenceGroups and only return the `id`
     * const peferenceGroupWithIdOnly = await prisma.peferenceGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends peferenceGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, peferenceGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeferenceGroup.
     * @param {peferenceGroupUpsertArgs} args - Arguments to update or create a PeferenceGroup.
     * @example
     * // Update or create a PeferenceGroup
     * const peferenceGroup = await prisma.peferenceGroup.upsert({
     *   create: {
     *     // ... data to create a PeferenceGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeferenceGroup we want to update
     *   }
     * })
     */
    upsert<T extends peferenceGroupUpsertArgs>(args: SelectSubset<T, peferenceGroupUpsertArgs<ExtArgs>>): Prisma__peferenceGroupClient<$Result.GetResult<Prisma.$peferenceGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeferenceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupCountArgs} args - Arguments to filter PeferenceGroups to count.
     * @example
     * // Count the number of PeferenceGroups
     * const count = await prisma.peferenceGroup.count({
     *   where: {
     *     // ... the filter for the PeferenceGroups we want to count
     *   }
     * })
    **/
    count<T extends peferenceGroupCountArgs>(
      args?: Subset<T, peferenceGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeferenceGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeferenceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeferenceGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeferenceGroupAggregateArgs>(args: Subset<T, PeferenceGroupAggregateArgs>): Prisma.PrismaPromise<GetPeferenceGroupAggregateType<T>>

    /**
     * Group by PeferenceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peferenceGroupGroupByArgs} args - Group by arguments.
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
      T extends peferenceGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peferenceGroupGroupByArgs['orderBy'] }
        : { orderBy?: peferenceGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peferenceGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeferenceGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peferenceGroup model
   */
  readonly fields: peferenceGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peferenceGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peferenceGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends peferenceGroup$UsersArgs<ExtArgs> = {}>(args?: Subset<T, peferenceGroup$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the peferenceGroup model
   */
  interface peferenceGroupFieldRefs {
    readonly id: FieldRef<"peferenceGroup", 'String'>
    readonly hash: FieldRef<"peferenceGroup", 'String'>
    readonly jobTitles: FieldRef<"peferenceGroup", 'String[]'>
    readonly location: FieldRef<"peferenceGroup", 'String[]'>
    readonly jobLocationTimezone: FieldRef<"peferenceGroup", 'String'>
    readonly experienceLevel: FieldRef<"peferenceGroup", 'experienceLevelType[]'>
    readonly remote: FieldRef<"peferenceGroup", 'remoteType[]'>
  }
    

  // Custom InputTypes
  /**
   * peferenceGroup findUnique
   */
  export type peferenceGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which peferenceGroup to fetch.
     */
    where: peferenceGroupWhereUniqueInput
  }

  /**
   * peferenceGroup findUniqueOrThrow
   */
  export type peferenceGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which peferenceGroup to fetch.
     */
    where: peferenceGroupWhereUniqueInput
  }

  /**
   * peferenceGroup findFirst
   */
  export type peferenceGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which peferenceGroup to fetch.
     */
    where?: peferenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peferenceGroups to fetch.
     */
    orderBy?: peferenceGroupOrderByWithRelationInput | peferenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peferenceGroups.
     */
    cursor?: peferenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peferenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peferenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peferenceGroups.
     */
    distinct?: PeferenceGroupScalarFieldEnum | PeferenceGroupScalarFieldEnum[]
  }

  /**
   * peferenceGroup findFirstOrThrow
   */
  export type peferenceGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which peferenceGroup to fetch.
     */
    where?: peferenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peferenceGroups to fetch.
     */
    orderBy?: peferenceGroupOrderByWithRelationInput | peferenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peferenceGroups.
     */
    cursor?: peferenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peferenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peferenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peferenceGroups.
     */
    distinct?: PeferenceGroupScalarFieldEnum | PeferenceGroupScalarFieldEnum[]
  }

  /**
   * peferenceGroup findMany
   */
  export type peferenceGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which peferenceGroups to fetch.
     */
    where?: peferenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peferenceGroups to fetch.
     */
    orderBy?: peferenceGroupOrderByWithRelationInput | peferenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peferenceGroups.
     */
    cursor?: peferenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peferenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peferenceGroups.
     */
    skip?: number
    distinct?: PeferenceGroupScalarFieldEnum | PeferenceGroupScalarFieldEnum[]
  }

  /**
   * peferenceGroup create
   */
  export type peferenceGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a peferenceGroup.
     */
    data: XOR<peferenceGroupCreateInput, peferenceGroupUncheckedCreateInput>
  }

  /**
   * peferenceGroup createMany
   */
  export type peferenceGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peferenceGroups.
     */
    data: peferenceGroupCreateManyInput | peferenceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peferenceGroup createManyAndReturn
   */
  export type peferenceGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * The data used to create many peferenceGroups.
     */
    data: peferenceGroupCreateManyInput | peferenceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peferenceGroup update
   */
  export type peferenceGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a peferenceGroup.
     */
    data: XOR<peferenceGroupUpdateInput, peferenceGroupUncheckedUpdateInput>
    /**
     * Choose, which peferenceGroup to update.
     */
    where: peferenceGroupWhereUniqueInput
  }

  /**
   * peferenceGroup updateMany
   */
  export type peferenceGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peferenceGroups.
     */
    data: XOR<peferenceGroupUpdateManyMutationInput, peferenceGroupUncheckedUpdateManyInput>
    /**
     * Filter which peferenceGroups to update
     */
    where?: peferenceGroupWhereInput
    /**
     * Limit how many peferenceGroups to update.
     */
    limit?: number
  }

  /**
   * peferenceGroup updateManyAndReturn
   */
  export type peferenceGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * The data used to update peferenceGroups.
     */
    data: XOR<peferenceGroupUpdateManyMutationInput, peferenceGroupUncheckedUpdateManyInput>
    /**
     * Filter which peferenceGroups to update
     */
    where?: peferenceGroupWhereInput
    /**
     * Limit how many peferenceGroups to update.
     */
    limit?: number
  }

  /**
   * peferenceGroup upsert
   */
  export type peferenceGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the peferenceGroup to update in case it exists.
     */
    where: peferenceGroupWhereUniqueInput
    /**
     * In case the peferenceGroup found by the `where` argument doesn't exist, create a new peferenceGroup with this data.
     */
    create: XOR<peferenceGroupCreateInput, peferenceGroupUncheckedCreateInput>
    /**
     * In case the peferenceGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peferenceGroupUpdateInput, peferenceGroupUncheckedUpdateInput>
  }

  /**
   * peferenceGroup delete
   */
  export type peferenceGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
    /**
     * Filter which peferenceGroup to delete.
     */
    where: peferenceGroupWhereUniqueInput
  }

  /**
   * peferenceGroup deleteMany
   */
  export type peferenceGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peferenceGroups to delete
     */
    where?: peferenceGroupWhereInput
    /**
     * Limit how many peferenceGroups to delete.
     */
    limit?: number
  }

  /**
   * peferenceGroup.Users
   */
  export type peferenceGroup$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    cursor?: UserPreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * peferenceGroup without action
   */
  export type peferenceGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peferenceGroup
     */
    select?: peferenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peferenceGroup
     */
    omit?: peferenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peferenceGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupid: 'groupid'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const PeferenceGroupScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    jobTitles: 'jobTitles',
    location: 'location',
    jobLocationTimezone: 'jobLocationTimezone',
    experienceLevel: 'experienceLevel',
    remote: 'remote'
  };

  export type PeferenceGroupScalarFieldEnum = (typeof PeferenceGroupScalarFieldEnum)[keyof typeof PeferenceGroupScalarFieldEnum]


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
   * Reference to a field of type 'experienceLevelType[]'
   */
  export type ListEnumexperienceLevelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'experienceLevelType[]'>
    


  /**
   * Reference to a field of type 'experienceLevelType'
   */
  export type EnumexperienceLevelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'experienceLevelType'>
    


  /**
   * Reference to a field of type 'remoteType[]'
   */
  export type ListEnumremoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'remoteType[]'>
    


  /**
   * Reference to a field of type 'remoteType'
   */
  export type EnumremoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'remoteType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    jobPreferences?: UserPreferencesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    jobPreferences?: UserPreferencesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    jobPreferences?: UserPreferencesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    groupid?: StringFilter<"UserPreferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<PeferenceGroupScalarRelationFilter, peferenceGroupWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupid?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: peferenceGroupOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    userId?: StringFilter<"UserPreferences"> | string
    groupid?: StringFilter<"UserPreferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<PeferenceGroupScalarRelationFilter, peferenceGroupWhereInput>
  }, "id">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupid?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    groupid?: StringWithAggregatesFilter<"UserPreferences"> | string
  }

  export type peferenceGroupWhereInput = {
    AND?: peferenceGroupWhereInput | peferenceGroupWhereInput[]
    OR?: peferenceGroupWhereInput[]
    NOT?: peferenceGroupWhereInput | peferenceGroupWhereInput[]
    id?: StringFilter<"peferenceGroup"> | string
    hash?: StringFilter<"peferenceGroup"> | string
    jobTitles?: StringNullableListFilter<"peferenceGroup">
    location?: StringNullableListFilter<"peferenceGroup">
    jobLocationTimezone?: StringFilter<"peferenceGroup"> | string
    experienceLevel?: EnumexperienceLevelTypeNullableListFilter<"peferenceGroup">
    remote?: EnumremoteTypeNullableListFilter<"peferenceGroup">
    Users?: UserPreferencesListRelationFilter
  }

  export type peferenceGroupOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    jobTitles?: SortOrder
    location?: SortOrder
    jobLocationTimezone?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    Users?: UserPreferencesOrderByRelationAggregateInput
  }

  export type peferenceGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: peferenceGroupWhereInput | peferenceGroupWhereInput[]
    OR?: peferenceGroupWhereInput[]
    NOT?: peferenceGroupWhereInput | peferenceGroupWhereInput[]
    hash?: StringFilter<"peferenceGroup"> | string
    jobTitles?: StringNullableListFilter<"peferenceGroup">
    location?: StringNullableListFilter<"peferenceGroup">
    jobLocationTimezone?: StringFilter<"peferenceGroup"> | string
    experienceLevel?: EnumexperienceLevelTypeNullableListFilter<"peferenceGroup">
    remote?: EnumremoteTypeNullableListFilter<"peferenceGroup">
    Users?: UserPreferencesListRelationFilter
  }, "id">

  export type peferenceGroupOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    jobTitles?: SortOrder
    location?: SortOrder
    jobLocationTimezone?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    _count?: peferenceGroupCountOrderByAggregateInput
    _max?: peferenceGroupMaxOrderByAggregateInput
    _min?: peferenceGroupMinOrderByAggregateInput
  }

  export type peferenceGroupScalarWhereWithAggregatesInput = {
    AND?: peferenceGroupScalarWhereWithAggregatesInput | peferenceGroupScalarWhereWithAggregatesInput[]
    OR?: peferenceGroupScalarWhereWithAggregatesInput[]
    NOT?: peferenceGroupScalarWhereWithAggregatesInput | peferenceGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"peferenceGroup"> | string
    hash?: StringWithAggregatesFilter<"peferenceGroup"> | string
    jobTitles?: StringNullableListFilter<"peferenceGroup">
    location?: StringNullableListFilter<"peferenceGroup">
    jobLocationTimezone?: StringWithAggregatesFilter<"peferenceGroup"> | string
    experienceLevel?: EnumexperienceLevelTypeNullableListFilter<"peferenceGroup">
    remote?: EnumremoteTypeNullableListFilter<"peferenceGroup">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    jobPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    jobPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutJobPreferencesInput
    group: peferenceGroupCreateNestedOneWithoutUsersInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    groupid: string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJobPreferencesNestedInput
    group?: peferenceGroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupid?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    groupid: string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupid?: StringFieldUpdateOperationsInput | string
  }

  export type peferenceGroupCreateInput = {
    id?: string
    hash: string
    jobTitles?: peferenceGroupCreatejobTitlesInput | string[]
    location?: peferenceGroupCreatelocationInput | string[]
    jobLocationTimezone: string
    experienceLevel?: peferenceGroupCreateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupCreateremoteInput | $Enums.remoteType[]
    Users?: UserPreferencesCreateNestedManyWithoutGroupInput
  }

  export type peferenceGroupUncheckedCreateInput = {
    id?: string
    hash: string
    jobTitles?: peferenceGroupCreatejobTitlesInput | string[]
    location?: peferenceGroupCreatelocationInput | string[]
    jobLocationTimezone: string
    experienceLevel?: peferenceGroupCreateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupCreateremoteInput | $Enums.remoteType[]
    Users?: UserPreferencesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type peferenceGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
    Users?: UserPreferencesUpdateManyWithoutGroupNestedInput
  }

  export type peferenceGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
    Users?: UserPreferencesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type peferenceGroupCreateManyInput = {
    id?: string
    hash: string
    jobTitles?: peferenceGroupCreatejobTitlesInput | string[]
    location?: peferenceGroupCreatelocationInput | string[]
    jobLocationTimezone: string
    experienceLevel?: peferenceGroupCreateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupCreateremoteInput | $Enums.remoteType[]
  }

  export type peferenceGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
  }

  export type peferenceGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserPreferencesListRelationFilter = {
    every?: UserPreferencesWhereInput
    some?: UserPreferencesWhereInput
    none?: UserPreferencesWhereInput
  }

  export type UserPreferencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PeferenceGroupScalarRelationFilter = {
    is?: peferenceGroupWhereInput
    isNot?: peferenceGroupWhereInput
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupid?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupid?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupid?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumexperienceLevelTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.experienceLevelType[] | ListEnumexperienceLevelTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.experienceLevelType | EnumexperienceLevelTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.experienceLevelType[] | ListEnumexperienceLevelTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.experienceLevelType[] | ListEnumexperienceLevelTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumremoteTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.remoteType[] | ListEnumremoteTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.remoteType | EnumremoteTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.remoteType[] | ListEnumremoteTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.remoteType[] | ListEnumremoteTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type peferenceGroupCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    jobTitles?: SortOrder
    location?: SortOrder
    jobLocationTimezone?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
  }

  export type peferenceGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    jobLocationTimezone?: SortOrder
  }

  export type peferenceGroupMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    jobLocationTimezone?: SortOrder
  }

  export type UserPreferencesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPreferencesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutUserInput | UserPreferencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutUserInput | UserPreferencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutUserInput | UserPreferencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutUserInput | UserPreferencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutUserInput | UserPreferencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutUserInput | UserPreferencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJobPreferencesInput = {
    create?: XOR<UserCreateWithoutJobPreferencesInput, UserUncheckedCreateWithoutJobPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type peferenceGroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<peferenceGroupCreateWithoutUsersInput, peferenceGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: peferenceGroupCreateOrConnectWithoutUsersInput
    connect?: peferenceGroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJobPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutJobPreferencesInput, UserUncheckedCreateWithoutJobPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPreferencesInput
    upsert?: UserUpsertWithoutJobPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobPreferencesInput, UserUpdateWithoutJobPreferencesInput>, UserUncheckedUpdateWithoutJobPreferencesInput>
  }

  export type peferenceGroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<peferenceGroupCreateWithoutUsersInput, peferenceGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: peferenceGroupCreateOrConnectWithoutUsersInput
    upsert?: peferenceGroupUpsertWithoutUsersInput
    connect?: peferenceGroupWhereUniqueInput
    update?: XOR<XOR<peferenceGroupUpdateToOneWithWhereWithoutUsersInput, peferenceGroupUpdateWithoutUsersInput>, peferenceGroupUncheckedUpdateWithoutUsersInput>
  }

  export type peferenceGroupCreatejobTitlesInput = {
    set: string[]
  }

  export type peferenceGroupCreatelocationInput = {
    set: string[]
  }

  export type peferenceGroupCreateexperienceLevelInput = {
    set: $Enums.experienceLevelType[]
  }

  export type peferenceGroupCreateremoteInput = {
    set: $Enums.remoteType[]
  }

  export type UserPreferencesCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput> | UserPreferencesCreateWithoutGroupInput[] | UserPreferencesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutGroupInput | UserPreferencesCreateOrConnectWithoutGroupInput[]
    createMany?: UserPreferencesCreateManyGroupInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput> | UserPreferencesCreateWithoutGroupInput[] | UserPreferencesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutGroupInput | UserPreferencesCreateOrConnectWithoutGroupInput[]
    createMany?: UserPreferencesCreateManyGroupInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type peferenceGroupUpdatejobTitlesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type peferenceGroupUpdatelocationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type peferenceGroupUpdateexperienceLevelInput = {
    set?: $Enums.experienceLevelType[]
    push?: $Enums.experienceLevelType | $Enums.experienceLevelType[]
  }

  export type peferenceGroupUpdateremoteInput = {
    set?: $Enums.remoteType[]
    push?: $Enums.remoteType | $Enums.remoteType[]
  }

  export type UserPreferencesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput> | UserPreferencesCreateWithoutGroupInput[] | UserPreferencesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutGroupInput | UserPreferencesCreateOrConnectWithoutGroupInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutGroupInput | UserPreferencesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserPreferencesCreateManyGroupInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutGroupInput | UserPreferencesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutGroupInput | UserPreferencesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput> | UserPreferencesCreateWithoutGroupInput[] | UserPreferencesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutGroupInput | UserPreferencesCreateOrConnectWithoutGroupInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutGroupInput | UserPreferencesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserPreferencesCreateManyGroupInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutGroupInput | UserPreferencesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutGroupInput | UserPreferencesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    group: peferenceGroupCreateNestedOneWithoutUsersInput
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    groupid: string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesCreateManyUserInputEnvelope = {
    data: UserPreferencesCreateManyUserInput | UserPreferencesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferencesScalarWhereInput
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferencesScalarWhereInput = {
    AND?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    OR?: UserPreferencesScalarWhereInput[]
    NOT?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    groupid?: StringFilter<"UserPreferences"> | string
  }

  export type UserCreateWithoutJobPreferencesInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutJobPreferencesInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutJobPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobPreferencesInput, UserUncheckedCreateWithoutJobPreferencesInput>
  }

  export type peferenceGroupCreateWithoutUsersInput = {
    id?: string
    hash: string
    jobTitles?: peferenceGroupCreatejobTitlesInput | string[]
    location?: peferenceGroupCreatelocationInput | string[]
    jobLocationTimezone: string
    experienceLevel?: peferenceGroupCreateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupCreateremoteInput | $Enums.remoteType[]
  }

  export type peferenceGroupUncheckedCreateWithoutUsersInput = {
    id?: string
    hash: string
    jobTitles?: peferenceGroupCreatejobTitlesInput | string[]
    location?: peferenceGroupCreatelocationInput | string[]
    jobLocationTimezone: string
    experienceLevel?: peferenceGroupCreateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupCreateremoteInput | $Enums.remoteType[]
  }

  export type peferenceGroupCreateOrConnectWithoutUsersInput = {
    where: peferenceGroupWhereUniqueInput
    create: XOR<peferenceGroupCreateWithoutUsersInput, peferenceGroupUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutJobPreferencesInput = {
    update: XOR<UserUpdateWithoutJobPreferencesInput, UserUncheckedUpdateWithoutJobPreferencesInput>
    create: XOR<UserCreateWithoutJobPreferencesInput, UserUncheckedCreateWithoutJobPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobPreferencesInput, UserUncheckedUpdateWithoutJobPreferencesInput>
  }

  export type UserUpdateWithoutJobPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutJobPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peferenceGroupUpsertWithoutUsersInput = {
    update: XOR<peferenceGroupUpdateWithoutUsersInput, peferenceGroupUncheckedUpdateWithoutUsersInput>
    create: XOR<peferenceGroupCreateWithoutUsersInput, peferenceGroupUncheckedCreateWithoutUsersInput>
    where?: peferenceGroupWhereInput
  }

  export type peferenceGroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: peferenceGroupWhereInput
    data: XOR<peferenceGroupUpdateWithoutUsersInput, peferenceGroupUncheckedUpdateWithoutUsersInput>
  }

  export type peferenceGroupUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
  }

  export type peferenceGroupUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    jobTitles?: peferenceGroupUpdatejobTitlesInput | string[]
    location?: peferenceGroupUpdatelocationInput | string[]
    jobLocationTimezone?: StringFieldUpdateOperationsInput | string
    experienceLevel?: peferenceGroupUpdateexperienceLevelInput | $Enums.experienceLevelType[]
    remote?: peferenceGroupUpdateremoteInput | $Enums.remoteType[]
  }

  export type UserPreferencesCreateWithoutGroupInput = {
    id?: string
    user: UserCreateNestedOneWithoutJobPreferencesInput
  }

  export type UserPreferencesUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
  }

  export type UserPreferencesCreateOrConnectWithoutGroupInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput>
  }

  export type UserPreferencesCreateManyGroupInputEnvelope = {
    data: UserPreferencesCreateManyGroupInput | UserPreferencesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserPreferencesWhereUniqueInput
    update: XOR<UserPreferencesUpdateWithoutGroupInput, UserPreferencesUncheckedUpdateWithoutGroupInput>
    create: XOR<UserPreferencesCreateWithoutGroupInput, UserPreferencesUncheckedCreateWithoutGroupInput>
  }

  export type UserPreferencesUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserPreferencesWhereUniqueInput
    data: XOR<UserPreferencesUpdateWithoutGroupInput, UserPreferencesUncheckedUpdateWithoutGroupInput>
  }

  export type UserPreferencesUpdateManyWithWhereWithoutGroupInput = {
    where: UserPreferencesScalarWhereInput
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserPreferencesCreateManyUserInput = {
    id?: string
    groupid: string
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: peferenceGroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupid?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupid?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateManyGroupInput = {
    id?: string
    userId: string
  }

  export type UserPreferencesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJobPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



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