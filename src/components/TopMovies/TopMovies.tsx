"use client";
import { useContext, useEffect, useState } from "react";
import { Media, MediaItem, Video } from "../../types";
import styles from "../../styles/Cards.module.scss";
import { ModalContext } from "../../context/ModalContext";
import { Add, Play, Down, Like, Dislike } from "../../utils/icons";
import getInstance from "@/utils/axio";
import Image from "next/image";
import Button from "../Button";
import handleAddToLocalStorage from "@/utils/localStorage";

const axios = getInstance();

interface TopMoviesProps {
  item: Media;
  myList: boolean;
}

export default function TopMovies({
  item,
}: TopMoviesProps): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const { title, poster_path, vote_average, id, name } = item;
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  console.log("Top Movies", trailerKey);

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
  });

  return (
    <div
      className={styles.longCard}
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
      <div className={styles.more}>
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
          {/* {renderGenre(myList ? genres : undefined, myList ? undefined : genre_ids)} */}
        </div>
      </div>
    </div>
  );
}

// function renderGenre(genres: Genre[] | undefined, genreIds: number[] | undefined) {
//   // Early return if both genres and genreIds are not provided
//   if (!genres && !genreIds) return null;

//   // Create a genre map only if genres are defined
//   const genreMap: { [key: number]: string } = genres
//     ? genres.reduce((acc: { [key: number]: string }, genre: Genre) => {
//         acc[genre.id] = genre.name;
//         return acc;
//       }, {})
//     : {};

//   // Filter valid genreIds only if genreMap is available
//   const validGenres = genreIds && genreMap ? genreIds.filter((id) => genreMap[id]) : [];

//   return (
//     <div className={styles.row}>
//       {genres && genres.length > 0
//         ? genres.map((genre, index) => (
//             <div key={genre.id} className={styles.row}>
//               <span className={styles.regularText} style={{ color: "white" }}>
//                 {genre.name}
//               </span>
//               {index < genres.length - 1 && <div className={styles.dot}>&bull;</div>}
//             </div>
//           ))
//         : validGenres.map((id, index) => (
//             <div key={id} className={styles.row}>
//               <span className={styles.regularText} style={{ color: "white" }}>
//                 {genreMap[id]}
//               </span>
//               {index < validGenres.length - 1 && <div className={styles.dot}>&bull;</div>}
//             </div>
//           ))}
//     </div>
//   );
// }
