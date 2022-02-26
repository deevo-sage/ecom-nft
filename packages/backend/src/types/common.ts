export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  role: Scalars["Int"];
  social: Array<Maybe<Social>>;
  bookings: Array<Maybe<Booking>>;
};

export type Mentor = {
  __typename?: "Mentor";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  role: Scalars["Int"];
  social: Array<Maybe<Social>>;
  bookings: Array<Maybe<Booking>>;
  designation: Scalars["String"];
  profileUrl: Scalars["String"];
  field: Array<Maybe<Scalars["String"]>>;
  price: Scalars["String"];
  socials: Array<Maybe<Social>>;
  aboutMe: Scalars["String"];
  visible: Scalars["Boolean"];
  acceptingReview: Scalars["Boolean"];
};

export type Booking = {
  __typename?: "Booking";
  user: User;
  mentor: Mentor;
  requests: Array<Maybe<Request>>;
  date?: Maybe<Scalars["String"]>;
  meeting?: Maybe<Meeting>;
};

export type Meeting = {
  __typename?: "Meeting";
  id: Scalars["ID"];
  allowedList: Array<Scalars["String"]>;
  events: Array<Maybe<Event>>;
  time?: Maybe<Scalars["String"]>;
};

export type Event = {
  __typename?: "Event";
  type: Scalars["String"];
  created_at: Scalars["String"];
  trigger: User;
};

export type Request = {
  __typename?: "Request";
  sender: User;
  reciever: Mentor;
  duration: Scalars["String"];
  slots: Array<Maybe<Scalars["String"]>>;
  status: Scalars["Int"];
};

export type Social = {
  __typename?: "Social";
  type: Scalars["String"];
  url: Scalars["String"];
};

export type Schedule = {
  __typename?: "Schedule";
  weekly: Scalars["Boolean"];
  commingWeek: Scalars["String"];
};
