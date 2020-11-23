export type Maybe<T> = T | null;
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

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<Maybe<User>>;
  userById?: Maybe<User>;
  /**
   *  Generates a new answer for th
   * guessing game
   */
  answer: Array<Scalars['Int']>;
  testArr1?: Maybe<Array<Maybe<Scalars['String']>>>;
  testArr2: Array<Maybe<Scalars['String']>>;
  testArr3: Array<Scalars['String']>;
};

export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};
