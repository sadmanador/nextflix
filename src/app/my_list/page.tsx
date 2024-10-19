"use client";
import React, { useEffect, useState } from "react";
import getInstance from "@/utils/axio";
import { Media, MediaItem } from "@/types";
import styles from "../../styles/TopRatedMoviesPage.module.scss"; 
import TopMovies from "@/components/TopMovies/TopMovies";
import Layout from "@/components/Layout/Layout";
import Swal from "sweetalert2";

const axios = getInstance();

const MyListPage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("My List",movies)

  useEffect(() => {
    const fetchFavoritesFromLocalStorage = async () => {
      try {
        setLoading(true);
        const favoriteItems: MediaItem[] = JSON.parse(
          localStorage.getItem("favoriteItems") || "[]"
        );

        if (favoriteItems.length === 0) {
          setError("No movies or TV shows found in your list.");
          setLoading(false);
          return;
        }

        const mediaPromises = favoriteItems.map((item: MediaItem) => {
          const endpoint =
            item.type === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`;
          return axios.get(endpoint, {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
            },
          });
        });

        const mediaResponses = await Promise.all(mediaPromises);
        const fetchedMedia = mediaResponses.map((response) => response.data);

        setMovies(fetchedMedia);
      } catch (error) {
        setError("Failed to fetch media from your list.");
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritesFromLocalStorage();
  }, []);

  const clearFavorites = () => {
    Swal.fire({
      title: "Are you sure, you want to remove all media?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No I don't`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("All media are removed", "", "success");
        localStorage.setItem("favoriteIds", JSON.stringify([]));
        setMovies([]);
        setError("No movies found in your list.");
      } else if (result.isDenied) {
        Swal.fire("No media were removed", "", "info");
      }
    });
  };

  return (
    <Layout>
      <div className={styles.listContainer}>
        <h2 className={styles.category}>My Movie List</h2>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className={styles.cardGrid}>
            {movies
              .filter((movie) => movie.poster_path !== null)
              .map((movie) => (
                <TopMovies key={movie.id} item={movie} myList={true} />
              ))}
          </div>
        )}

        <button
          onClick={clearFavorites}
          className={styles.clearFavoritesButton}
        >
          Clear My List
        </button>
      </div>
    </Layout>
  );
};

export default MyListPage;
