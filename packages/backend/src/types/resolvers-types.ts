import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Booking = {
  __typename?: 'Booking';
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meeting?: Maybe<Meeting>;
  mentor: User;
  requests: Array<Maybe<Request>>;
  slot?: Maybe<Array<Maybe<Schedule>>>;
  user: User;
};

export type CreateBookingInput = {
  mentorId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type CreateMeetingInput = {
  bookingId: Scalars['ID'];
  url: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
};

export type Education = {
  __typename?: 'Education';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  institute?: Maybe<Scalars['String']>;
  mentorProfile?: Maybe<MentorProfile>;
  present?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  created_at: Scalars['String'];
  id: Scalars['String'];
  trigger: User;
  type: Scalars['String'];
};

export type Experience = {
  __typename?: 'Experience';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mentorProfile?: Maybe<MentorProfile>;
  organisation?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Field = {
  __typename?: 'Field';
  id?: Maybe<Scalars['String']>;
  val?: Maybe<Scalars['String']>;
};

export type GetReviewsOutput = {
  __typename?: 'GetReviewsOutput';
  count: Scalars['Int'];
  data: Array<Maybe<Review>>;
};

export type LiveSession = {
  __typename?: 'LiveSession';
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Meeting = {
  __typename?: 'Meeting';
  allowedList: Array<Scalars['String']>;
  events: Array<Maybe<Event>>;
  id: Scalars['ID'];
  time?: Maybe<Scalars['String']>;
};

export type MentorApplication = {
  __typename?: 'MentorApplication';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type MentorProfile = {
  __typename?: 'MentorProfile';
  acceptingReview: Scalars['Boolean'];
  bannerUrl?: Maybe<Scalars['String']>;
  education: Array<Maybe<Education>>;
  experience: Array<Maybe<Experience>>;
  id: Scalars['ID'];
  price: Price;
  reviews: Array<Maybe<Review>>;
  visible: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addField: Field;
  addReview?: Maybe<Review>;
  applyMentor?: Maybe<MentorApplication>;
  createBooking: Booking;
  createContacts: User;
  createEducation: Education;
  createExperience: Experience;
  createLiveSession: LiveSession;
  createMeeting: Meeting;
  deleteContacts: User;
  deleteEducation: Education;
  deleteExperience: Experience;
  deleteField: Field;
  deleteLiveSession: LiveSession;
  deleteReview?: Maybe<Review>;
  updateBanner: User;
  updateBio: User;
  updateDisplayInfo: User;
  updateEducation: Education;
  updateExperiences: Experience;
  updateLiveSession: LiveSession;
  updateMentorStatus?: Maybe<MentorApplication>;
  updatePrice: User;
  updateProfilePic: User;
  updateVisibility: User;
};


export type MutationAddFieldArgs = {
  data: Scalars['String'];
};


export type MutationAddReviewArgs = {
  data: AddReviewInput;
  mentorId: Scalars['String'];
};


export type MutationCreateBookingArgs = {
  data?: Maybe<CreateBookingInput>;
};


export type MutationCreateContactsArgs = {
  data?: Maybe<SocialInput>;
};


export type MutationCreateEducationArgs = {
  data: UpdateUserEduExpInput;
};


export type MutationCreateExperienceArgs = {
  data?: Maybe<UpdateUserEduExpInput>;
};


export type MutationCreateLiveSessionArgs = {
  data?: Maybe<CreateLiveSessionInput>;
};


export type MutationCreateMeetingArgs = {
  data?: Maybe<CreateMeetingInput>;
};


export type MutationDeleteContactsArgs = {
  data?: Maybe<DeleteContactsInput>;
};


export type MutationDeleteEducationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFieldArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLiveSessionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['String'];
};


export type MutationUpdateBannerArgs = {
  url: Scalars['String'];
};


export type MutationUpdateBioArgs = {
  data?: Maybe<UpdateUserBioInput>;
};


export type MutationUpdateDisplayInfoArgs = {
  data?: Maybe<UpdateUserDisplayInfoInput>;
};


export type MutationUpdateEducationArgs = {
  data: UpdateUserEduExpInput;
  id: Scalars['String'];
};


export type MutationUpdateExperiencesArgs = {
  data: UpdateUserEduExpInput;
  id: Scalars['String'];
};


export type MutationUpdateLiveSessionArgs = {
  data?: Maybe<CreateLiveSessionInput>;
  id: Scalars['String'];
};


export type MutationUpdateMentorStatusArgs = {
  applicationId: Scalars['String'];
  status: Scalars['Boolean'];
};


export type MutationUpdatePriceArgs = {
  data?: Maybe<PriceInput>;
};


export type MutationUpdateProfilePicArgs = {
  url?: Maybe<Scalars['String']>;
};


export type MutationUpdateVisibilityArgs = {
  val: Scalars['Boolean'];
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String'];
  val: Scalars['Int'];
};

export type PriceInput = {
  currency: Scalars['String'];
  val: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetBooking: Booking;
  GetBookings: Array<Maybe<Booking>>;
  GetMeetings: Array<Maybe<Meeting>>;
  GetMentorApplications?: Maybe<Array<Maybe<MentorApplication>>>;
  GetReviews: GetReviewsOutput;
  GetUser: User;
  GetUserById: User;
  GetUserFields?: Maybe<Array<Maybe<Field>>>;
  GetUserSessions: Array<Maybe<LiveSession>>;
  GetUsers?: Maybe<Array<Maybe<User>>>;
  HomeMentor: Array<Maybe<User>>;
  HomeSession: Array<Maybe<LiveSession>>;
  SearchFields: Array<Maybe<Field>>;
  SearchMentor: SearchData;
  SearchSession: SearchSessionOutput;
};


export type QueryGetReviewsArgs = {
  mentorId: Scalars['String'];
  page: Scalars['Int'];
};


export type QueryGetUserByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetUserFieldsArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetUserSessionsArgs = {
  id: Scalars['String'];
  page: Scalars['Int'];
};


export type QuerySearchFieldsArgs = {
  text: Scalars['String'];
};


export type QuerySearchMentorArgs = {
  page: Scalars['Int'];
  text: Scalars['String'];
};


export type QuerySearchSessionArgs = {
  page: Scalars['Int'];
  text: Scalars['String'];
};

export type Request = {
  __typename?: 'Request';
  duration: Scalars['String'];
  reciever: User;
  sender: User;
  slots: Array<Maybe<Scalars['String']>>;
  status: Scalars['Int'];
};

export type Review = {
  __typename?: 'Review';
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum Role {
  Admin = 'ADMIN',
  Mentor = 'MENTOR',
  User = 'USER'
}

export type Schedule = {
  __typename?: 'Schedule';
  User?: Maybe<User>;
  day?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  request?: Maybe<Request>;
  startTime?: Maybe<Scalars['String']>;
  weekly?: Maybe<Scalars['Boolean']>;
};

export type SearchData = {
  __typename?: 'SearchData';
  count: Scalars['Int'];
  data: Array<Maybe<User>>;
};

export type SearchSessionOutput = {
  __typename?: 'SearchSessionOutput';
  count: Scalars['Int'];
  data: Array<Maybe<LiveSession>>;
};

export type Social = {
  __typename?: 'Social';
  name: Scalars['String'];
  url: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type SocialInput = {
  name: Scalars['String'];
  url: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type UpdateMentorInput = {
  name?: Maybe<Scalars['String']>;
  social: Array<Maybe<SocialInput>>;
};

export type UpdateUserDisplayInfoInput = {
  designation?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tagLine?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  aboutMe: Scalars['String'];
  bookings: Array<Maybe<Booking>>;
  createdAt?: Maybe<Scalars['String']>;
  designation: Scalars['String'];
  email: Scalars['String'];
  field: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  liveSessions: Array<Maybe<LiveSession>>;
  mentorProfile?: Maybe<MentorProfile>;
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  requests?: Maybe<Array<Maybe<Request>>>;
  reviews: Array<Maybe<Review>>;
  role: Role;
  social: Array<Maybe<Social>>;
  tagLine?: Maybe<Scalars['String']>;
};

export type AddReviewInput = {
  rating: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type CreateContactsInput = {
  data?: Maybe<SocialInput>;
};

export type CreateLiveSessionInput = {
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DeleteContactsInput = {
  url: Scalars['String'];
};

export type UpdateUserBioInput = {
  bio: Scalars['String'];
};

export type UpdateUserEduExpInput = {
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  institute?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  Booking: ResolverTypeWrapper<Booking>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateBookingInput: CreateBookingInput;
  CreateMeetingInput: CreateMeetingInput;
  CreateUserInput: CreateUserInput;
  Education: ResolverTypeWrapper<Education>;
  Event: ResolverTypeWrapper<Event>;
  Experience: ResolverTypeWrapper<Experience>;
  Field: ResolverTypeWrapper<Field>;
  GetReviewsOutput: ResolverTypeWrapper<GetReviewsOutput>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LiveSession: ResolverTypeWrapper<LiveSession>;
  Meeting: ResolverTypeWrapper<Meeting>;
  MentorApplication: ResolverTypeWrapper<MentorApplication>;
  MentorProfile: ResolverTypeWrapper<MentorProfile>;
  Mutation: ResolverTypeWrapper<{}>;
  Price: ResolverTypeWrapper<Price>;
  PriceInput: PriceInput;
  Query: ResolverTypeWrapper<{}>;
  Request: ResolverTypeWrapper<Request>;
  Review: ResolverTypeWrapper<Review>;
  Role: Role;
  Schedule: ResolverTypeWrapper<Schedule>;
  SearchData: ResolverTypeWrapper<SearchData>;
  SearchSessionOutput: ResolverTypeWrapper<SearchSessionOutput>;
  Social: ResolverTypeWrapper<Social>;
  SocialInput: SocialInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateMentorInput: UpdateMentorInput;
  UpdateUserDisplayInfoInput: UpdateUserDisplayInfoInput;
  User: ResolverTypeWrapper<User>;
  addReviewInput: AddReviewInput;
  createContactsInput: CreateContactsInput;
  createLiveSessionInput: CreateLiveSessionInput;
  deleteContactsInput: DeleteContactsInput;
  updateUserBioInput: UpdateUserBioInput;
  updateUserEduExpInput: UpdateUserEduExpInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Booking: Booking;
  Boolean: Scalars['Boolean'];
  CreateBookingInput: CreateBookingInput;
  CreateMeetingInput: CreateMeetingInput;
  CreateUserInput: CreateUserInput;
  Education: Education;
  Event: Event;
  Experience: Experience;
  Field: Field;
  GetReviewsOutput: GetReviewsOutput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LiveSession: LiveSession;
  Meeting: Meeting;
  MentorApplication: MentorApplication;
  MentorProfile: MentorProfile;
  Mutation: {};
  Price: Price;
  PriceInput: PriceInput;
  Query: {};
  Request: Request;
  Review: Review;
  Schedule: Schedule;
  SearchData: SearchData;
  SearchSessionOutput: SearchSessionOutput;
  Social: Social;
  SocialInput: SocialInput;
  String: Scalars['String'];
  UpdateMentorInput: UpdateMentorInput;
  UpdateUserDisplayInfoInput: UpdateUserDisplayInfoInput;
  User: User;
  addReviewInput: AddReviewInput;
  createContactsInput: CreateContactsInput;
  createLiveSessionInput: CreateLiveSessionInput;
  deleteContactsInput: DeleteContactsInput;
  updateUserBioInput: UpdateUserBioInput;
  updateUserEduExpInput: UpdateUserEduExpInput;
};

export type AuthenticationDirectiveArgs = { };

export type AuthenticationDirectiveResolver<Result, Parent, ContextType = any, Args = AuthenticationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorizationDirectiveArgs = {
  role?: Maybe<Role>;
};

export type AuthorizationDirectiveResolver<Result, Parent, ContextType = any, Args = AuthorizationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ToCaseDirectiveArgs = {
  key: Scalars['String'];
  to: Scalars['Int'];
};

export type ToCaseDirectiveResolver<Result, Parent, ContextType = any, Args = ToCaseDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  meeting?: Resolver<Maybe<ResolversTypes['Meeting']>, ParentType, ContextType>;
  mentor?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requests?: Resolver<Array<Maybe<ResolversTypes['Request']>>, ParentType, ContextType>;
  slot?: Resolver<Maybe<Array<Maybe<ResolversTypes['Schedule']>>>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  institute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mentorProfile?: Resolver<Maybe<ResolversTypes['MentorProfile']>, ParentType, ContextType>;
  present?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trigger?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mentorProfile?: Resolver<Maybe<ResolversTypes['MentorProfile']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  present?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Field'] = ResolversParentTypes['Field']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  val?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetReviewsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetReviewsOutput'] = ResolversParentTypes['GetReviewsOutput']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveSession'] = ResolversParentTypes['LiveSession']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeetingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meeting'] = ResolversParentTypes['Meeting']> = {
  allowedList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MentorApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MentorApplication'] = ResolversParentTypes['MentorApplication']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MentorProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['MentorProfile'] = ResolversParentTypes['MentorProfile']> = {
  acceptingReview?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bannerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  education?: Resolver<Array<Maybe<ResolversTypes['Education']>>, ParentType, ContextType>;
  experience?: Resolver<Array<Maybe<ResolversTypes['Experience']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Price'], ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addField?: Resolver<ResolversTypes['Field'], ParentType, ContextType, RequireFields<MutationAddFieldArgs, 'data'>>;
  addReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationAddReviewArgs, 'data' | 'mentorId'>>;
  applyMentor?: Resolver<Maybe<ResolversTypes['MentorApplication']>, ParentType, ContextType>;
  createBooking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<MutationCreateBookingArgs, never>>;
  createContacts?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateContactsArgs, never>>;
  createEducation?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<MutationCreateEducationArgs, 'data'>>;
  createExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationCreateExperienceArgs, never>>;
  createLiveSession?: Resolver<ResolversTypes['LiveSession'], ParentType, ContextType, RequireFields<MutationCreateLiveSessionArgs, never>>;
  createMeeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType, RequireFields<MutationCreateMeetingArgs, never>>;
  deleteContacts?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteContactsArgs, never>>;
  deleteEducation?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<MutationDeleteEducationArgs, 'id'>>;
  deleteExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationDeleteExperienceArgs, 'id'>>;
  deleteField?: Resolver<ResolversTypes['Field'], ParentType, ContextType, RequireFields<MutationDeleteFieldArgs, 'id'>>;
  deleteLiveSession?: Resolver<ResolversTypes['LiveSession'], ParentType, ContextType, RequireFields<MutationDeleteLiveSessionArgs, 'id'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'id'>>;
  updateBanner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateBannerArgs, 'url'>>;
  updateBio?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateBioArgs, never>>;
  updateDisplayInfo?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateDisplayInfoArgs, never>>;
  updateEducation?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<MutationUpdateEducationArgs, 'data' | 'id'>>;
  updateExperiences?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationUpdateExperiencesArgs, 'data' | 'id'>>;
  updateLiveSession?: Resolver<ResolversTypes['LiveSession'], ParentType, ContextType, RequireFields<MutationUpdateLiveSessionArgs, 'id'>>;
  updateMentorStatus?: Resolver<Maybe<ResolversTypes['MentorApplication']>, ParentType, ContextType, RequireFields<MutationUpdateMentorStatusArgs, 'applicationId' | 'status'>>;
  updatePrice?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdatePriceArgs, never>>;
  updateProfilePic?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateProfilePicArgs, never>>;
  updateVisibility?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateVisibilityArgs, 'val'>>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  val?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetBooking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType>;
  GetBookings?: Resolver<Array<Maybe<ResolversTypes['Booking']>>, ParentType, ContextType>;
  GetMeetings?: Resolver<Array<Maybe<ResolversTypes['Meeting']>>, ParentType, ContextType>;
  GetMentorApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['MentorApplication']>>>, ParentType, ContextType>;
  GetReviews?: Resolver<ResolversTypes['GetReviewsOutput'], ParentType, ContextType, RequireFields<QueryGetReviewsArgs, 'mentorId' | 'page'>>;
  GetUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  GetUserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, never>>;
  GetUserFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['Field']>>>, ParentType, ContextType, RequireFields<QueryGetUserFieldsArgs, never>>;
  GetUserSessions?: Resolver<Array<Maybe<ResolversTypes['LiveSession']>>, ParentType, ContextType, RequireFields<QueryGetUserSessionsArgs, 'id' | 'page'>>;
  GetUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  HomeMentor?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  HomeSession?: Resolver<Array<Maybe<ResolversTypes['LiveSession']>>, ParentType, ContextType>;
  SearchFields?: Resolver<Array<Maybe<ResolversTypes['Field']>>, ParentType, ContextType, RequireFields<QuerySearchFieldsArgs, 'text'>>;
  SearchMentor?: Resolver<ResolversTypes['SearchData'], ParentType, ContextType, RequireFields<QuerySearchMentorArgs, 'page' | 'text'>>;
  SearchSession?: Resolver<ResolversTypes['SearchSessionOutput'], ParentType, ContextType, RequireFields<QuerySearchSessionArgs, 'page' | 'text'>>;
};

export type RequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = {
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reciever?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  slots?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = {
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  request?: Resolver<Maybe<ResolversTypes['Request']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weekly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchData'] = ResolversParentTypes['SearchData']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchSessionOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchSessionOutput'] = ResolversParentTypes['SearchSessionOutput']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['LiveSession']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Social'] = ResolversParentTypes['Social']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  aboutMe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookings?: Resolver<Array<Maybe<ResolversTypes['Booking']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  field?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liveSessions?: Resolver<Array<Maybe<ResolversTypes['LiveSession']>>, ParentType, ContextType>;
  mentorProfile?: Resolver<Maybe<ResolversTypes['MentorProfile']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Request']>>>, ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  social?: Resolver<Array<Maybe<ResolversTypes['Social']>>, ParentType, ContextType>;
  tagLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Booking?: BookingResolvers<ContextType>;
  Education?: EducationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  Field?: FieldResolvers<ContextType>;
  GetReviewsOutput?: GetReviewsOutputResolvers<ContextType>;
  LiveSession?: LiveSessionResolvers<ContextType>;
  Meeting?: MeetingResolvers<ContextType>;
  MentorApplication?: MentorApplicationResolvers<ContextType>;
  MentorProfile?: MentorProfileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  SearchData?: SearchDataResolvers<ContextType>;
  SearchSessionOutput?: SearchSessionOutputResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  authentication?: AuthenticationDirectiveResolver<any, any, ContextType>;
  authorization?: AuthorizationDirectiveResolver<any, any, ContextType>;
  toCase?: ToCaseDirectiveResolver<any, any, ContextType>;
};
