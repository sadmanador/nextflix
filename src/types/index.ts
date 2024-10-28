import { Breakpoint } from "../config/breakpoints";
import { MutableRefObject } from "react";
import { IconType } from "react-icons";

export type Maybe<T> = T | null;

export type DimensionDetail = {
  dimension: {
    height: number;
    width: number;
  };
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type DialogProps = {
  visible: boolean;
  classname?: string;
  onClose: () => void;
  dialogRef: MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
};

export type ButtonProps = {
  filled?: boolean;
  label?: string;
  Icon: IconType;
  rounded?: boolean;
  onClick?: () => void;
  hidden?: boolean;
};
export type CardsProps = {
  defaultCard?: boolean;
  item: Media;
  mediaType?: string;
};

export enum MediaType {
  MOVIE = "movie",
  TV = "tv",
}

export type Genre = {
  id: number;
  name: string;
};

export type Media = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string,
  title: string;
  video: boolean,
  vote_average: number;
  vote_count: number;
  key?: string;
  type?: string;
  genres?: Genre[];
};

export type MoviesResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  genres?: [];
  results: Media[];
};

export type ImageType = "poster" | "original";

export type Section = {
  heading: string;
  endpoint: string;
  defaultCard?: boolean;
  topList?: boolean;
};

export type Video = {
  id: string;
  key: string;
  type: string;
  name: string;
  site: string;
};

export type MediaItem = {
  id: number;
  type: "movie" | "tv";
  title: string;
};

export type FeatureCardProps = {
  index: number;
  item: Media;
  mediaType: string;
};

export type ChildrenProvider = {
  children: React.ReactNode;
};

export type MovieSectionProps = {
  defaultCard?: boolean;
  heading: string;
  topList?: boolean;
  endpoint: string;
  mediaType?: string;
};

export type NavbarProps = {
  isScrolled: boolean;
};

export type SimilarMediaProps = {
  id: number;
};

export type TopMoviesProps = {
  item: Media;
  removeMovie: (id: number) => void;
};

export type Modal = {
  modalData: Media;
  setModalData: (item: Media) => void;
  isModal: boolean;
  setIsModal: (isModal: boolean) => void;
};

export type AudioControl = {
  mute: () => void;
  unMute: () => void;
};
