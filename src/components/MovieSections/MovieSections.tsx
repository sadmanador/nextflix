"use client";
import { Media } from "@/types";
import getInstance from "@/utils/axio";
import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Cards from "../Cards/Cards";
import styles from "../../styles/Cards.module.scss";

const axios = getInstance(); 

interface MovieSectionProps {
  defaultCard?: boolean;
  heading: string;
  topList?: boolean;
  endpoint: string;
  mediaType: string;
}


export const MovieSections: React.FC<MovieSectionProps> = ({
  defaultCard = true,
  heading,
  topList = false,
  endpoint,
  mediaType
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);

  console.log("Movie Section",media)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); 
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
        setLoading(false); 
      }
    };

    if (media.length === 0) {
      fetchMovies();
    }
  }, [endpoint, media.length]);



  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{heading}</strong>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
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
                    <FeaturedCard key={index} index={index + 1} item={item} mediaType={mediaType}/>
                  );
                }
              } else {
                return (
                  <Cards key={index} defaultCard={defaultCard} item={item} mediaType={mediaType}/>
                );
              }
            })}
        </div>
      )}
    </div>
  );
};
