import { Breakpoint } from '../config/breakpoints';

export type Maybe<T> = T | null;

export type Dimension = {
  height: number;
  width: number;
};

export type DimensionDetail = {
  dimension: Dimension;
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};


export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv'
}

export type Genre = {
  id: number;
  name: string;
};

export type Media = {
  id: number;
  name: string;
  title?: string;
  original_name: string; 
  overview: string;
  poster_path: string; 
  backdrop_path: string; 
  vote_average: number; 
  genre_ids: number[];
  genres?: Genre[];
  origin_country: string[]; 
  first_air_date?: string;
};

export type ImageType = 'poster' | 'original';

export type Section = {
  heading: string;
  endpoint: string;
  defaultCard?: boolean;
  topList?: boolean;
};

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}


export interface MediaItem {
  id: number;
  type: "movie" | "tv";
  title: string;
}