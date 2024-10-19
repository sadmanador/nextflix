"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Modal.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Play, Add, Like, Dislike } from "../../utils/icons";
import Button from "../Button";
import { Media, Genre } from "../../types";
import Image from "next/image";
import getInstance from "@/utils/axio"; // Ensure you import axios instance

function renderGenre(genre_ids: number[], genres: Genre[]): string[] {
  const genreMap = genres.reduce(
    (acc: { [key: number]: string }, genre: Genre) => {
      acc[genre.id] = genre.name;
      return acc;
    },
    {}
  );
  
  // Filter out unknown genres
  return genre_ids
    .map((id) => genreMap[id])
    .filter((name) => name); // Filter out undefined or null
}

export default function Modal() {
  const axios = getInstance(); // Ensure you have your axios instance here
  const [genres, setGenres] = useState<Genre[]>([]);
  const { modalData, setIsModal, isModal } = useContext(ModalContext);

  const {
    title,
    name,
    original_name,
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    genre_ids,
  } = modalData as Media;

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
  }, []); // Added axios as a dependency

  return (
    <div
      className={styles.container}
      style={{ display: isModal ? "flex" : "none" }}
    >
      <div className={styles.overlay} onClick={() => setIsModal(false)}></div>
      <div className={styles.modal}>
        <div className={styles.spotlight}>
          <Image
            width={600}
            height={480}
            src={banner}
            alt="spotlight"
            className={styles.spotlight__image}
          />
          <div className={styles.details}>
            <div className={styles.title}>{title || name || original_name}</div>
            <div className={styles.buttonRow}>
              <Button label="Play" filled Icon={Play} />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
            <div className={styles.greenText}>{Math.round(vote_average * 10)}% Match</div>
          </div>
        </div>

        <div className={styles.cross} onClick={() => setIsModal(false)}>
          &#10005;
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.column}>{overview}</div>
          <div className={styles.column}>
            <div className={styles.genre}>
              Genre: {renderGenre(genre_ids, genres).join(", ")} {/* Display only known genres */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
