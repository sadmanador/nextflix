"use client";
import { useContext, useEffect, useState } from "react";
import styles from "../../styles/Cards.module.scss";
import { Genre, Media, Video } from "../../types";
import { ModalContext } from "../../context/ModalContext";
import { Add, Play, Down, Like, Dislike } from "../../utils/icons";
import getInstance from "@/utils/axio";
import Image from "next/image";
import Button from "../Button";

interface FeatureCardProps {
  index: number;
  item: Media;
}

export default function FeatureCard({
  index,
  item,
}: FeatureCardProps): React.ReactElement {
  const {
    title,
    name,
    original_name,
    poster_path,
    backdrop_path,
    vote_average,
    genre_ids,
    first_air_date,
    id,
  } = item;

  const [image, setImage] = useState<string>(
    poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : ""
  );
  const [genres, setGenres] = useState<Genre[]>([]);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const axios = getInstance();

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const onHover = () => {
    setIsHovered(true); 
    setImage(`https://image.tmdb.org/t/p/original${backdrop_path}`);
  };

  const onMouseOut = () => {
    setIsHovered(false); 
    setImage(`https://image.tmdb.org/t/p/original${poster_path}`);
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
  });

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`/tv/${id}/videos`, {
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
  });

  return (
    <div className={styles.container}>
      <div className={styles.rank}>{index}</div>

      <div 
        className={styles.featureCard}
        onMouseEnter={onHover} 
        onMouseLeave={onMouseOut} 
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
            width={420}
            height={600}
            src={image}
            alt="img"
            className={styles.poster}
          />
        )}

        <div className={styles.info}>
          <div className={styles.actionRow}>
            <div className={styles.actionRow}>
              <Button Icon={Play} rounded filled />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
            <Button Icon={Down} rounded onClick={() => onClick(item)} />
          </div>
          <div className={styles.textDetails}>
            <strong>{title || name || original_name}</strong>
            <div className={styles.row}>
              <span className={styles.greenText}>
                {Math.round(vote_average * 10)}% Match
              </span>
              {first_air_date && (
                <span className={styles.regularText}>{first_air_date}</span>
              )}
            </div>
            {renderGenre(genre_ids, genres)}
          </div>
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
