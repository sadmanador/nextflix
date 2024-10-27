"use client";
import { getMovie } from "@/utils/apiService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Cards.module.scss";
import { FeatureCardProps, Genre, Media, Video } from "../../types";
import { Add, Dislike, Down, Like, Play } from "../../utils/icons";
import Button from "../Button";

const FeatureCard = ({
  index,
  item,
  mediaType,
}: FeatureCardProps): React.ReactElement => {
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
  const { setModalData, setIsModal } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayClick = () => {
    if (item?.id && isMounted) {
      router.push(`/${mediaType}/${item.id}`);
    }
  };

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

  console.log("Featured Cards", genres, trailerKey);

  const fetchGenres = async () => {
    const res = await getMovie(`/genre/${mediaType}/list`);
    if (res.error) {
      setError(res.error.message);
      console.log(error);
    } else {
      setGenres(res.data?.genres || []);
    }
    setLoading(false);
  };

  const fetchTrailer = async () => {
    const res = await getMovie(`/${mediaType}/${id}/videos`);
    if (res.error) {
      setError(res.error.message);
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

    fetchGenres();
  }, [isHovered, id, mediaType]);

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
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
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
              <Button Icon={Play} rounded filled onClick={handlePlayClick} />
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
export default FeatureCard;