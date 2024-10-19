"use client";
import { useContext, useEffect, useState } from "react";
import { Genre, Media, MediaItem, Video } from "../../types";
import styles from "../../styles/Cards.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Add, Play, Down, Like, Dislike } from "../../utils/icons";
import getInstance from "@/utils/axio";
import Button from "../Button";
import Image from "next/image";
import handleAddToLocalStorage from "@/utils/localStorage";

const axios = getInstance();

interface CardsProps {
  defaultCard?: boolean;
  item: Media;
}

export default function Cards({
  defaultCard = true,
  item,
}: CardsProps): React.ReactElement {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const style = defaultCard ? styles.card : styles.longCard;
  const infoStyle = defaultCard ? styles.cardInfo : styles.more;

  const {
    title,
    poster_path,
    backdrop_path,
    vote_average,
    genre_ids,
    id,
    name,
  } = item;
  const image = defaultCard
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  console.log("Cards genres", genres);
  console.log("Cards trailers", trailerKey);

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
        const trailer = response.data.results.find(
          (video: Video) => video.type === "Trailer"
        );
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
      className={style}
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
          alt="img"
          className={styles.cardPoster}
        />
      )}
      <div className={infoStyle}>
        <div className={styles.actionRow}>
          <div className={styles.actionRow}>
            <Button Icon={Play} rounded filled />
            <Button
              Icon={Add}
              rounded
              onClick={() => {
                const mediaType = title ? "movie" : "tv";
                const mediaItem: MediaItem = {
                  id,
                  type: mediaType,
                  title: title || name,
                };
                handleAddToLocalStorage(mediaItem);
              }}
            />{" "}
            {defaultCard && (
              <>
                <Button Icon={Like} rounded />
                <Button Icon={Dislike} rounded />
              </>
            )}
          </div>
          <Button Icon={Down} rounded onClick={() => onClickModal(item)} />
        </div>
        <div className={styles.textDetails}>
          <strong>{title || name}</strong>
          <div className={styles.row}>
            <span className={styles.greenText}>{`${Math.round(
              vote_average * 10
            )}% match`}</span>
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
            <span className={styles.regularText}>{genreName}</span>
            {!isLast && <div className={styles.dot}>&bull;</div>}
          </div>
        );
      })}
    </div>
  );
}
