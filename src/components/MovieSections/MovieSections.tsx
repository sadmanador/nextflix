"use client";
import { Media } from "@/types";
import getInstance from "@/utils/axio";
import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Cards from "../Cards/Cards";
import styles from "../../styles/Cards.module.scss";

interface MovieSectionProps {
  defaultCard?: boolean;
  heading: string;
  topList?: boolean;
  endpoint: string;
}

export const MovieSections: React.FC<MovieSectionProps> = ({
  defaultCard = true,
  heading,
  topList = false,
  endpoint,
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const axios = getInstance();

  // Function to fetch the data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get(`${endpoint}`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      });

      setMedia(response.data.results);
    } catch (error) {
      setError("Error fetching movies");
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // useEffect to trigger fetch only when endpoint changes
  useEffect(() => {
    if (endpoint) {
      fetchMovies();
    }
  }, [endpoint, fetchMovies]); // Only re-fetch when endpoint changes

  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{heading}</strong>
      
      {/* Display loading state while data is being fetched */}
      {loading ? (
        <div>Loading...</div> // Add your loading spinner or placeholder here
      ) : error ? (
        <div>{error}</div> // Show error message if fetching fails
      ) : (
        <div className={styles.cardRow}>
          {media
            ?.filter(
              (item) => item.poster_path !== null && item.backdrop_path !== null
            )
            .map((item, index) => {
              if (topList) {
                if (index < 10) {
                  return (
                    <FeaturedCard key={index} index={index + 1} item={item} />
                  );
                }
              } else {
                return (
                  <Cards key={index} defaultCard={defaultCard} item={item} />
                );
              }
            })}
        </div>
      )}
    </div>
  );
};