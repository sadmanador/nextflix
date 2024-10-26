import { MoviesResponse } from "@/types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import getInstance from "./axio";

export type AxiosErrorType = {
  code?: string;
  config: AxiosRequestConfig;
  message: string;
  name: string;
  request?: XMLHttpRequest;
  response?: AxiosResponse;
  status?: number;
  stack?: string;
};

export interface RequestError extends Error {
  status?: number;
  details?: unknown;
}

interface ApiResponse<T> {
  data?: T;
  error?: RequestError | undefined;
}

const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  const axiosInstance = getInstance();

  try {
    const response = await axiosInstance.get<T>(url, config);
    return { data: response.data };
  } catch (err) {
    const error = err as AxiosErrorType;
    const status = error.response?.status;
    const details = error.response?.data;

    return {
      error: {
        message: `Failed to fetch data from ${url}`,
        status,
        details,
        name: "",
      },
    };
  }
};

export const getMovie = async (
  endpoint: string
): Promise<ApiResponse<MoviesResponse>> => {
  const config: AxiosRequestConfig = {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      sort_by: "vote_average.desc",
      page: 1,
    },
  };

  return await getRequest<MoviesResponse>(endpoint, config);
};
