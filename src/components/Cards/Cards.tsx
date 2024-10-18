"use client";
import { useContext, useEffect, useState } from "react";
import { Genre, Media } from "../../types";
import styles from "../../styles/Cards.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Add, Play, Down, Like, Dislike } from "../../utils/icons";
import getInstance from "@/utils/axio";
import Button from "../Button";
import Image from "next/image";

interface CardsProps {
  defaultCard?: boolean;
  item: Media;
}

export default function Cards({
  defaultCard = true,
  item,
}: CardsProps): React.ReactElement {
  const axios = getInstance();
  const [genres, setGenres] = useState<Genre[]>([]);
  const style = defaultCard ? styles.card : styles.longCard;
  const infoStyle = defaultCard ? styles.cardInfo : styles.more;

  const { title, poster_path, backdrop_path, vote_average, genre_ids } = item;
  const image = defaultCard
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClick = (data: Media) => {
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
  }, [axios]);

  return (
    <div className={style}>
      <Image
        width={450}
        height={350}
        src={image}
        alt="img"
        className={styles.cardPoster}
      />
      <div className={infoStyle}>
        <div className={styles.actionRow}>
          <div className={styles.actionRow}>
            <Button Icon={Play} rounded filled />
            <Button Icon={Add} rounded />
            {defaultCard && (
              <>
                <Button Icon={Like} rounded />
                <Button Icon={Dislike} rounded />
              </>
            )}
          </div>
          <Button Icon={Down} rounded onClick={() => onClick(item)} />
        </div>
        <div className={styles.textDetails}>
          <strong>{title}</strong>
          <div className={styles.row}>
            <span className={styles.greenText}>{`${
              vote_average * 10
            }% match`}</span>
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

  // Filter out any genres that do not have a corresponding name in the genreMap
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
