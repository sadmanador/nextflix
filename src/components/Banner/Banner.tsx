"use client";
import { useEffect, useState, useContext } from "react";

import Button from "../Button";
import { Media } from "../../types";
import { Play, Info } from "../../utils/icons";
import { ModalContext } from "../../context/ModalContext";
import styles from "../../styles/Banner.module.scss";
import getInstance from "@/utils/axio";
import Image from "next/image";

export default function Banner() {
  const axios = getInstance();
  const [media, setMedia] = useState<Media>();
  const random = Math.floor(Math.random() * 20);
  const { setModalData, setIsModal } = useContext(ModalContext);

  console.log(media);

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  useEffect(() => {
    const getMedia = async () => {
      try {
        const result = await axios.get("/tv/popular?language=en-US&page=1", {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        });
        setMedia(result.data.results[random]);
      } catch (error) {
        console.log(error);
      }
    };
    getMedia();
  }, []);

  return (
    <div className={styles.spotlight}>
      <Image
      width={1280}
      height={920}
        src={`https://image.tmdb.org/t/p/original${media?.backdrop_path}`}
        alt="spotlight"
        className={styles.spotlight__image}
      />
      <div className={styles.spotlight__details}>
        <div className={styles.title}>{media?.name || media?.original_name}</div>
        <div className={styles.synopsis}>{media?.overview?.slice(0,100)+ "..." || "No description available."}</div>
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
