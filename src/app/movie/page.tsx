"use client";
import React, { useEffect, useState } from "react";
import getInstance from "@/utils/axio";
import { Media } from "@/types";
import styles from "../../styles/TopRatedMoviesPage.module.scss"; 
import TopMovies from "@/components/TopMovies/TopMovies";
import Layout from "@/components/Layout/Layout";

const axios = getInstance();

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Movie",movies)

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        setLoading(true); 
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
                <TopMovies key={movie.id} item={movie} myList={false}/>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MoviePage;
