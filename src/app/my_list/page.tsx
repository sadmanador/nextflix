"use client";
import React, { useEffect, useState } from "react";
import getInstance from "@/utils/axio";
import { Media } from "@/types";

import styles from "../../styles/TopRatedMoviesPage.module.scss"; // Import the styles
import TopMovies from "@/components/TopMovies/TopMovies";

const axios = getInstance();

const TopRatedMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("/discover/movie", {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
            sort_by: "vote_average.desc",
            page: 1,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        setError("Failed to fetch top-rated movies");
        console.error("Error fetching top-rated movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.category}>Top Rated Movies</h2>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={styles.cardGrid}>
          {movies
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => (
              <TopMovies key={movie.id} item={movie} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TopRatedMoviesPage;
