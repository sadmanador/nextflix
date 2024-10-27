"use client";
import { Media, MovieSectionProps } from "@/types";
import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Cards from "../Cards/Cards";
import styles from "../../styles/Cards.module.scss";
import { getMovie } from "@/utils/apiService";

export const MovieSections: React.FC<MovieSectionProps> = ({
  defaultCard = true,
  heading,
  topList = false,
  endpoint,
  mediaType,
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Movie Section", media);

  const fetchMovies = async () => {
    const res = await getMovie(`${endpoint}`);
    if (res.error) {
      setError(res.error.message);
    } else {
      setMedia(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (media.length === 0) {
      fetchMovies();
    }
  }, [media.length]);

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
                    <FeaturedCard
                      key={index}
                      index={index + 1}
                      item={item}
                      mediaType={mediaType}
                    />
                  );
                }
              } else {
                return (
                  <Cards
                    key={index}
                    defaultCard={defaultCard}
                    item={item}
                    mediaType={mediaType}
                  />
                );
              }
            })}
        </div>
      )}
    </div>
  );
};
