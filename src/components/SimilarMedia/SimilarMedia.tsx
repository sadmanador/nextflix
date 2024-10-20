import React, { useEffect, useState, useCallback } from "react";
import getInstance from "@/utils/axio";
import Cards from "../Cards/Cards";
import { Media } from "@/types";
import styles from "../../styles/SimilarMedia.module.scss";

const axios = getInstance();

interface SimilarMediaProps {
  id: number;
  mediaType: string;
}

export default function SimilarMedia({ id, mediaType }: SimilarMediaProps) {
  const [similarMovies, setSimilarMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarMovies = useCallback(async () => {
    try {
      const response = await axios.get(`/${mediaType}/${id}/similar`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      });
      setSimilarMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong!";
      setError(errorMessage);
      setLoading(false);
    }
  }, [id, mediaType]);

  useEffect(() => {
    fetchSimilarMovies();
  }, [fetchSimilarMovies]);

  if (loading) {
    return <p>Loading similar {mediaType === "movie" ? "movies" : "TV shows"}...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="similar-media">
      <div className={styles.mediaContainer}>
        {similarMovies.length > 0 ? (
          similarMovies.map((item) => (
            <Cards key={item.id} defaultCard={false} item={item} mediaType={mediaType} />
          ))
        ) : (
          <p>No similar {mediaType === "movie" ? "movies" : "TV shows"} found.</p>
        )}
      </div>
    </div>
  );
}
