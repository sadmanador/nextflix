"use client";
import { getMovie } from "@/utils/apiService";
import handleAddToLocalStorage, {
  handleRemoveFromLocalStorage,
  isItemInLocalStorage,
} from "@/utils/localStorage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Cards.module.scss";
import { CardsProps, Genre, Media, MediaItem, Video } from "../../types";
import {
  Add,
  Dislike,
  Down,
  Like,
  Play,
  Tick,
  Mute,
  Unmute,
} from "../../utils/icons";
import Button from "../Button/Button";

const Cards = ({
  defaultCard = true,
  item,
}: CardsProps): React.ReactElement => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    setIsInLocalStorage(
      isItemInLocalStorage(item.id, item.title ? "movie" : "tv")
    );
  }, []);

  console.log(item);

  const handlePlayClick = () => {
    if (item?.id && isMounted) {
      router.push(`/movie/${item.id}`);
    }
  };

  const style = defaultCard ? styles.card : styles.longCard;
  const infoStyle = defaultCard ? styles.cardInfo : styles.more;

  const { title, poster_path, backdrop_path, vote_average, genre_ids, id } =
    item;

  const image = defaultCard
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const fetchGenres = async () => {
    const res = await getMovie("/genre/movie/list");
    if (res.error) {
      setError(res.error.message);
    } else {
      setGenres(res.data?.genres || []);
    }
    setLoading(false);
  };

  const fetchTrailer = async () => {
    const res = await getMovie(`/movie/${id}/videos`);
    if (res.error) {
      setError(res.error.message);
      console.log(error);
    } else {
      const trailer = (res.data?.results as unknown as Video[]).find(
        (video) => video.type === "Trailer"
      );
      setTrailerKey(trailer ? trailer.key : null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (isHovered) {
      fetchTrailer();
    }
  }, [isHovered]);

  const handleAddOrRemove = () => {
    const mediaType = title ? "movie" : "tv";
    const mediaItem: MediaItem = {
      id,
      type: mediaType,
      title: title,
    };

    if (isInLocalStorage) {
      handleRemoveFromLocalStorage(mediaItem);
    } else {
      handleAddToLocalStorage(mediaItem);
    }
    setIsInLocalStorage(!isInLocalStorage);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div
      className={style}
      style={{ backgroundColor: "#252525" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && trailerKey ? (
        <div className={styles.videoContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&controls=0&modestbranding=1&showinfo=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.cardPoster}
          ></iframe>
          <div className={styles.muteButton}>
            <Button
              Icon={isMuted ? Mute : Unmute}
              rounded
              onClick={toggleMute}
            />
          </div>
        </div>
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
            <Button Icon={Play} rounded filled onClick={handlePlayClick} />
            <Button
              Icon={isInLocalStorage ? Tick : Add}
              rounded
              onClick={handleAddOrRemove}
            />
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
          <strong>{title}</strong>
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
};

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

export default Cards;
