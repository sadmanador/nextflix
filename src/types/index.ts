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

export type MoviesResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  genres?: []
  results: Media[];
}

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
  name: string;
  site: string;
  type: string;
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
  mediaType: string;
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
