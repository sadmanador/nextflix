"use client";
import { useEffect, useState, useContext } from "react";
import Button from "../Button";
import { Media, Video } from "../../types";
import { Play, Info } from "../../utils/icons";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Banner.module.scss";
import getInstance from "@/utils/axio";
import Image from "next/image";

const axios = getInstance();

export default function Banner() {
  const [media, setMedia] = useState<Media | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  console.log("Banner", media);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const result = await axios.get(
          "/discover/movie?with_genres=28&language=en-US&page=1",
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
            },
          }
        );

        const random = Math.floor(Math.random() * 5);
        const selectedMedia = result.data.results[random];
        setMedia(selectedMedia);

        const trailerResponse = await axios.get(
          `/movie/${selectedMedia.id}/videos`,
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
            },
          }
        );

        const videos: Video[] = trailerResponse.data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        setTrailerKey(trailer ? trailer.key : null);

        setTimeout(() => {
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        }, 800);
      } catch (error) {
        console.log(error);
      }
    };

    getMedia();
  }, []);

  return (
    <div className={styles.spotlight}>
      {trailerKey ? (
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className={styles.spotlight__video}
          ></iframe>
        </div>
      ) : (
        media && (
          <Image
            width={1280}
            height={720}
            src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
            alt="spotlight"
            className={styles.spotlight__image}
          />
        )
      )}
      <div className={styles.spotlight__details}>
        <div className={styles.title}>{media?.title || media?.name}</div>
        <div className={styles.synopsis}>
          {media?.overview?.slice(0, 100) + "..." ||
            "No description available."}
        </div>
        <div className={styles.buttonRow}>
          <Button label="Play" filled Icon={Play} />
          {media && (
            <Button
              label="More Info"
              Icon={Info}
              onClick={() => onClick(media)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
