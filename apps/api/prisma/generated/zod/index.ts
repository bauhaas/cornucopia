import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','displayTop10','displayRecentlyWatched','displayWatchlist']);

export const MovieScalarFieldEnumSchema = z.enum(['id','tmdb_id','title','poster_path','backdrop_path','release_date','genres','runtime','director']);

export const UserMovieScalarFieldEnumSchema = z.enum(['id','user_id','movie_id','status']);

export const ActorScalarFieldEnumSchema = z.enum(['id','tmdb_id','name','profile_path','filmography_tmdb_ids']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  displayTop10: z.boolean(),
  displayRecentlyWatched: z.boolean(),
  displayWatchlist: z.boolean(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// MOVIE SCHEMA
/////////////////////////////////////////

export const MovieSchema = z.object({
  id: z.number().int(),
  tmdb_id: z.string(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  release_date: z.coerce.date(),
  genres: z.string().array(),
  runtime: z.number().int(),
  director: z.string(),
})

export type Movie = z.infer<typeof MovieSchema>

/////////////////////////////////////////
// USER MOVIE SCHEMA
/////////////////////////////////////////

export const UserMovieSchema = z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  movie_id: z.number().int(),
  status: z.string().array(),
})

export type UserMovie = z.infer<typeof UserMovieSchema>

/////////////////////////////////////////
// ACTOR SCHEMA
/////////////////////////////////////////

export const ActorSchema = z.object({
  id: z.number().int(),
  tmdb_id: z.string(),
  name: z.string(),
  profile_path: z.string(),
  filmography_tmdb_ids: z.string().array(),
})

export type Actor = z.infer<typeof ActorSchema>
