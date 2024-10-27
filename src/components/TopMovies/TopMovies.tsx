"use client";
import { getMovie } from "@/utils/apiService";
import handleAddToLocalStorage from "@/utils/localStorage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Cards.module.scss";
import { Media, MediaItem, TopMoviesProps, Video } from "../../types";
import { Add, Dislike, Down, Like, Play } from "../../utils/icons";
import Button from "../Button/Button";

const TopMovies = ({ item }: TopMoviesProps): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { setModalData, setIsModal } = useContext(ModalContext);
  const { title, poster_path, vote_average, id, name } = item;
  const [isMounted, setIsMounted] = useState(false);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mediaType = title ? "movie" : "tv";

  const handlePlayClick = () => {
    if (item?.id && isMounted) {
      router.push(`/${mediaType}/${item.id}`);
    }
  };

  const image = `https://image.tmdb.org/t/p/original${poster_path}`;

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  console.log("Top Movies", trailerKey);

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
    if (isHovered) {
      fetchTrailer();
    }
  });

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
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
      <div className={styles.cardInfo}>
        <div className={styles.actionRow}>
          <Button Icon={Play} rounded filled onClick={handlePlayClick} />
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
          />
          <Button Icon={Like} rounded />
          <Button Icon={Dislike} rounded />
          <Button Icon={Down} rounded onClick={() => onClickModal(item)} />
        </div>
        <div className={styles.textDetails}>
          <strong style={{ color: "white", fontSize: "16px" }}>
            {title || name}
          </strong>
          <div className={styles.row}>
            <span className={styles.greenText}>{`${Math.round(
              vote_average * 10
            )}% match`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopMovies;
