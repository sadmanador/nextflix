"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Modal.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Play, Add, Like, Dislike } from "../../utils/icons";
import Button from "../Button";
import { Media, Genre, Video } from "../../types";
import Image from "next/image";
import getInstance from "@/utils/axio";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
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
    id,
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
  }, []);

  useEffect(() => {
    // Fetch trailer only for the media in `modalData`
    const fetchTrailer = async () => {
      if (!id) return; // Ensure there's a valid media ID

      try {
        const trailerResponse = await axios.get(`/movie/${id}/videos`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        });

        const videos: Video[] = trailerResponse.data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        setTrailerKey(trailer ? trailer.key : null);
      } catch (error) {
        console.log("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [id]); // This will fetch the trailer based on the current `modalData` media ID

  const handlePlay = () => {
    setIsPlaying(true); // Set the video to play when Play button is clicked
  };

  return (
    <div
      className={styles.container}
      style={{ display: isModal ? "flex" : "none" }}
    >
      <div className={styles.overlay} onClick={() => setIsModal(false)}></div>
      <div className={styles.modal}>
        <div className={styles.spotlight} style={{ position: "relative" }}>
          {/* Conditionally render Image or iframe, both taking up the same space */}
          {!isPlaying ? (
            <Image
              width={600}
              height={480}
              src={banner}
              alt="spotlight"
              className={styles.spotlight__image}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&modestbranding=1&showinfo=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", height: "100%", width: "100%" }}
              className={styles.spotlight__video}
            ></iframe>
          )}

          {/* Details will remain visible when the video plays */}
          <div className={`${styles.details} ${isPlaying ? styles.detailsPlaying : ""}`} style={{ position: "relative", zIndex: 1 }}>
            <div className={styles.title}>{title || name || original_name}</div>
            <div className={styles.buttonRow}>
              <Button label="Play" filled Icon={Play} onClick={handlePlay} hidden={isPlaying}/>
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
      </div>
    </div>
  );
}
