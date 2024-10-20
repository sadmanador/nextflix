"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Modal.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Play, Add, Like, Dislike } from "../../utils/icons";
import Button from "../Button";
import { Media, Genre } from "../../types";
import Image from "next/image";
import getInstance from "@/utils/axio";
import { useRouter } from "next/navigation";
import SimilarMedia from "../SimilarMedia/SimilarMedia";

const axios = getInstance();

function renderGenre(genre_ids: number[], genres: Genre[]): string[] {
  const genreMap = genres.reduce(
    (acc: { [key: number]: string }, genre: Genre) => {
      acc[genre.id] = genre.name;
      return acc;
    },
    {}
  );

  return genre_ids.map((id) => genreMap[id]).filter((name) => name);
}

export default function Modal() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { modalData, setIsModal, isModal } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const {
    title,
    name,
    original_name,
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    genre_ids,
    id,
  } = modalData as Media;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mediaType = title ? "movie" : "tv";

  const handlePlayClick = () => {
    if (id && isMounted) {
      router.push(`/${mediaType}/${id}`);
    }
  };

  const banner = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("/genre/movie/list", {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.log("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModal]);
  

  return (
    <div
      className={styles.container}
      style={{ display: isModal ? "flex" : "none" }}
    >
      <div className={styles.overlay} onClick={() => setIsModal(false)}></div>
      <div className={styles.modal}>
        <div className={styles.spotlight} style={{ position: "relative" }}>
          <Image
            width={600}
            height={480}
            src={banner}
            alt="spotlight"
            className={styles.spotlight__image}
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <div
            className={`${styles.details}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className={styles.title}>{title || name || original_name}</div>
            <div className={styles.buttonRow}>
              <Button
                label="Play"
                filled
                Icon={Play}
                onClick={handlePlayClick}
              />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
            <div className={styles.greenText}>
              {Math.round(vote_average * 10)}% Match
            </div>
          </div>
        </div>

        <div className={styles.cross} onClick={() => setIsModal(false)}>
          &#10005;
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.column}>{overview}</div>
          <div className={styles.column}>
            <div className={styles.genre}>
              Genre: {renderGenre(genre_ids, genres).join(", ")}
            </div>
          </div>
        </div>
        <h3 className={styles.similarTitle}>Similar {mediaType == "movie" ?`Movie`: "TV Shows"}</h3>
      <SimilarMedia mediaType={mediaType} id={id} />
      </div>
    </div>
  );
}
