import { getMovie } from "@/utils/apiService";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Genre, Media, MediaItem, Video } from "../../types";
import {
  Add,
  Dislike,
  Like,
  Play,
  Mute,
  Unmute,
  Tick,
} from "../../utils/icons";
import Button from "../Button/Button";
import SimilarMedia from "../SimilarMedia/SimilarMedia";
import handleAddToLocalStorage, {
  handleRemoveFromLocalStorage,
} from "@/utils/localStorage";

const Modal = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { modalData, setIsModal, isModal } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

  const {
    title,
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    genre_ids,
    id,
  } = modalData as Media;

  function renderGenre(media: Media): string[] {
    const genreNames: string[] = [];
    if (media.genres && media.genres.length > 0) {
      genreNames.push(...media.genres.map((genre) => genre.name));
    } else if (media.genre_ids && media.genre_ids.length > 0) {
      const genreMap = genres.reduce(
        (acc: { [key: number]: string }, genre: Genre) => {
          acc[genre.id] = genre.name;
          return acc;
        },
        {}
      );
      genreNames.push(
        ...media.genre_ids.map((id) => genreMap[id]).filter((name) => name)
      );
    }

    return genreNames;
  }



  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayClick = () => {
    if (id && isMounted) {
      router.push(`/movie/${id}`);
    }
  };

  const banner = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

  const fetchTrailer = async () => {
    const res = await getMovie(`/movie/${id}/videos`);
    const trailer = (res.data?.results as unknown as Video[])?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    setTrailerUrl(
      trailer
        ? `https://www.youtube.com/embed/${
            trailer.key
          }?autoplay=1&controls=0&mute=${isMuted ? 1 : 0}`
        : null
    );
    setLoading(false);
  };

  const fetchGenres = async () => {
    const res = await getMovie("/genre/movie/list");
    if (res.error) {
      setError(res.error.message);
      console.log(error);
    } else {
      setGenres(res.data?.genres || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrailer();
    fetchGenres();
  }, [id, isMuted]);

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModal]);

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
    <Box
      sx={{
        position: "fixed",
        display: isModal ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
        width: "100vw",
        top: "10%",
        left: 0,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        onClick={() => setIsModal(false)}
      />
      <Box
        sx={{
          backgroundColor: "#252525",
          color: "white",
          zIndex: 2,
          minWidth: "55%",
          maxWidth: { xs: "90%", md: "70%", lg: "60%" },
          position: "relative",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            position: "relative",
            flex: 1,
          }}
        >
          {trailerUrl ? (
            <iframe
              width="100%"
              height="400px"
              src={trailerUrl}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px 8px 0 0" }}
            />
          ) : (
            <Image
              width={600}
              height={400}
              src={banner}
              alt="spotlight"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          )}

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 80%)",
            }}
          >
            <Box
              sx={{
                padding: "2rem 3rem",
                position: "absolute",
                bottom: 16,
                left: 16,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "125%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    alignItems: "baseline",
                  }}
                >
                  <Button
                    label="Play"
                    filled
                    Icon={Play}
                    onClick={handlePlayClick}
                  />
                  <Button
                    Icon={isInLocalStorage ? Tick : Add}
                    rounded
                    onClick={handleAddOrRemove}
                  />
                  <Button Icon={Like} rounded />
                  <Button Icon={Dislike} rounded />
                </Box>
                <Box sx={{}}>
                  <Button
                    Icon={isMuted ? Mute : Unmute}
                    rounded
                    onClick={toggleMute}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <IconButton
          onClick={() => setIsModal(false)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "50%",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            overflowY: "auto",
            padding: "0rem 3rem",
            backgroundColor: "#252525",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "success.main",
                fontWeight: "bold",
                mt: 1,
                padding: "0rem 3rem",
              }}
            >
              {Math.round(vote_average * 10)}% Match
            </Typography>
            <Button Icon={Play} rounded onClick={handlePlayClick} />
          </Box>
          <Box
            sx={{
              padding: "2rem 3rem",
              display: "flex",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography>{overview.slice(0, 80)}...</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
            <Typography>Genre: {renderGenre(modalData).join(", ")}</Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              padding: "0rem 3rem",
            }}
          >
            Similar
          </Typography>

          <SimilarMedia id={id} />
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
