"use client";
import { useContext, useEffect, useState } from "react";
import { Genre, Media, Video } from "../../types";
import styles from "../../styles/Cards.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Add, Play, Down, Like, Dislike } from "../../utils/icons";
import getInstance from "@/utils/axio";
import Image from "next/image";
import Button from "../Button";
import { style } from "framer-motion/client";

interface TopMoviesProps {
  item: Media;
}

export default function TopMovies({ item }: TopMoviesProps): React.ReactElement {
  const axios = getInstance();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const { title, poster_path, backdrop_path, vote_average, genre_ids, id } = item;
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

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
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`/movie/${id}/videos`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        });
        const trailer = response.data.results.find((video: Video) => video.type === "Trailer");
        setTrailerKey(trailer ? trailer.key : null);
      } catch (error) {
        console.log("Error fetching trailer:", error);
      }
    };

    if (isHovered) {
      fetchTrailer();
    }
  }, [isHovered, id]);

  return (
    <div 
      className={styles.longCard}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.cardPoster}
        ></iframe>
      ) : (
        <Image
          width={450}
          height={350}
          src={image}
          alt="Top movie poster"
          className={styles.cardPoster}
        />
      )}
      <div className={styles.more}>
        <div className={styles.actionRow}>
          <div className={styles.actionRow}>
            <Button Icon={Play} rounded filled />
            <Button Icon={Add} rounded />
            <Button Icon={Like} rounded />
            <Button Icon={Dislike} rounded />
          </div>
          <Button Icon={Down} rounded onClick={() => onClickModal(item)} />
        </div>
        <div className={styles.textDetails}>
          <strong className={style.title} style={{color: "white",  fontSize:"16px"}}>{title}</strong>
          <div className={styles.row}>
            <span className={styles.greenText}>{`${Math.round(vote_average * 10)}% match`}</span>
          </div>
          {renderGenre(genre_ids, genres)}
        </div>
      </div>
    </div>
  );
}

function renderGenre(genre_ids: number[], genres: Genre[]) {
  const genreMap = genres.reduce(
    (acc: { [key: number]: string }, genre: Genre) => {
      acc[genre.id] = genre.name;
      return acc;
    },
    {}
  );

  const validGenres = genre_ids.filter((id) => genreMap[id]);

  return (
    <div className={styles.row}>
      {validGenres.map((id, index) => {
        const isLast = index === validGenres.length - 1;
        const genreName = genreMap[id];
        return (
          <div key={id} className={styles.row}>
            <span className={styles.regularText} style={{color: "white"}}>{genreName}</span>
            {!isLast && <div className={styles.dot}>&bull;</div>}
          </div>
        );
      })}
    </div>
  );
}
