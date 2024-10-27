"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { Media, Video } from "../../types";
import { Play, Info } from "../../utils/icons";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Banner.module.scss";
import { getMovie } from "@/utils/apiService";
import Image from "next/image";

const Banner = () => {
  const [media, setMedia] = useState<Media | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { setModalData, setIsModal } = useContext(ModalContext);
  const router = useRouter();

  const handlePlayClick = () => {
    if (media?.id) {
      router.push(`/movie/${media.id}`);
    }
  };

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const loadMedia = async () => {
    try {
      const result = await getMovie(
        "/discover/movie?with_genres=28&language=en-US&page=1"
      );

      if (result && result.data && result.data.results) {
        const randomIndex = Math.floor(
          Math.random() * result.data.results.length
        );
        const selectedMedia = result.data.results[randomIndex];
        setMedia(selectedMedia);

        const trailerResponse = await getMovie(
          `/movie/${selectedMedia.id}/videos`
        );

        if (
          trailerResponse &&
          trailerResponse.data &&
          Array.isArray(trailerResponse.data.results)
        ) {
          const videos: Video[] = trailerResponse.data
            .results as unknown as Video[];

          const trailer = videos.find((video) => video.type === "Trailer");
          setTrailerKey(trailer ? trailer.key : null);
        }
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <div className={styles.spotlight}>
      {trailerKey ? (
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&showinfo=0`}
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
          <Button label="Play" filled Icon={Play} onClick={handlePlayClick} />
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
};

export default Banner;
