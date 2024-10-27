"use client";
import Layout from "@/components/Layout/Layout";
import TopMovies from "@/components/TopMovies/TopMovies";
import { Media } from "@/types";
import { getMovie } from "@/utils/apiService";
import React, { useEffect, useState } from "react";
import styles from "../../styles/TopRatedMoviesPage.module.scss";

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Movie", movies);

  const loadMovies = async () => {
    const res = await getMovie("/discover/movie");
    if (res.error) {
      setError(res.error.message);
    } else {
      setMovies(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
};

export default MoviePage;
