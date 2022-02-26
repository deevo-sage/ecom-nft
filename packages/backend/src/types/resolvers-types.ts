import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Category {
  LowerBody = 'LowerBody',
  UpperBody = 'UpperBody'
}

export enum Chain {
  Eth = 'eth',
  Matic = 'matic'
}

export enum Crypto {
  Ether = 'ether',
  Matic = 'matic'
}

export enum LowerBody {
  Jeans = 'Jeans',
  Pants = 'Pants',
  Shorts = 'Shorts'
}

export type Nft = {
  __typename?: 'NFT';
  Product: Product;
  Seller?: Maybe<Seller>;
  User?: Maybe<User>;
  UserId?: Maybe<Scalars['String']>;
  desc: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  productId: Scalars['String'];
  sellerId?: Maybe<Scalars['String']>;
  status: NftStatus;
  tokenId: Scalars['Int'];
  traits: Array<Maybe<Trait>>;
};

export enum NftStatus {
  NotPurchased = 'not_purchased',
  PurchasedAndNotRevealed = 'purchased_and_not_revealed',
  PurchasedAndRevealed = 'purchased_and_revealed'
}

export type Product = {
  __typename?: 'Product';
  NFTs: Array<Maybe<Nft>>;
  Seller?: Maybe<Seller>;
  category: Category;
  chain: Chain;
  id: Scalars['String'];
  method: PurchaseMethod;
  nFTId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  sellerId?: Maybe<Scalars['String']>;
  status: ProductStatus;
  stock: Scalars['Int'];
};

export enum ProductStatus {
  NotPurchased = 'not_purchased',
  PurchasedDelivered = 'purchased_delivered',
  PurchasedNotDelivered = 'purchased_not_delivered'
}

export enum PurchaseMethod {
  Card = 'Card',
  Cash = 'Cash',
  Crypto = 'Crypto'
}

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Seller = {
  __typename?: 'Seller';
  NFT: Array<Maybe<Nft>>;
  about: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  products: Array<Maybe<Product>>;
};

export type Trait = {
  __typename?: 'Trait';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum UpperBody {
  UpperBodySummer = 'UpperBodySummer',
  UpperBodyWinter = 'UpperBodyWinter'
}

export enum UpperBodySummer {
  CutSleeveTShirts = 'CutSleeveTShirts',
  HalfSleeveShirts = 'HalfSleeveShirts',
  HalfSleeveTShirts = 'HalfSleeveTShirts'
}

export enum UpperBodyWinter {
  Caps = 'Caps',
  Coats = 'Coats',
  FullSleeveShirts = 'FullSleeveShirts',
  FullSleeveTShirts = 'FullSleeveTShirts',
  Jackets = 'Jackets',
  Mufflers = 'Mufflers'
}

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  closet: Array<Maybe<Nft>>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: Category;
  Chain: Chain;
  Crypto: Crypto;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LowerBody: LowerBody;
  NFT: ResolverTypeWrapper<Nft>;
  NFTStatus: NftStatus;
  Product: ResolverTypeWrapper<Product>;
  ProductStatus: ProductStatus;
  PurchaseMethod: PurchaseMethod;
  Query: ResolverTypeWrapper<{}>;
  Seller: ResolverTypeWrapper<Seller>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Trait: ResolverTypeWrapper<Trait>;
  UpperBody: UpperBody;
  UpperBodySummer: UpperBodySummer;
  UpperBodyWinter: UpperBodyWinter;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  NFT: Nft;
  Product: Product;
  Query: {};
  Seller: Seller;
  String: Scalars['String'];
  Trait: Trait;
  User: User;
};

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFT'] = ResolversParentTypes['NFT']> = {
  Product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  Seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  UserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['NFTStatus'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  traits?: Resolver<Array<Maybe<ResolversTypes['Trait']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  NFTs?: Resolver<Array<Maybe<ResolversTypes['NFT']>>, ParentType, ContextType>;
  Seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['PurchaseMethod'], ParentType, ContextType>;
  nFTId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatus'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryGetUserArgs>>;
};

export type SellerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Seller'] = ResolversParentTypes['Seller']> = {
  NFT?: Resolver<Array<Maybe<ResolversTypes['NFT']>>, ParentType, ContextType>;
  about?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trait'] = ResolversParentTypes['Trait']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  closet?: Resolver<Array<Maybe<ResolversTypes['NFT']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  NFT?: NftResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Seller?: SellerResolvers<ContextType>;
  Trait?: TraitResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

