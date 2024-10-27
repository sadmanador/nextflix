import { getMovie } from "@/utils/apiService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Genre, Media } from "../../types";
import { Add, Dislike, Like, Play } from "../../utils/icons";
import Button from "../Button";
import SimilarMedia from "../SimilarMedia/SimilarMedia";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function renderGenre(genre_ids: number[], genres: Genre[]): string[] {
  const genreMap = genres.reduce(
    (acc: { [key: number]: string }, genre: Genre) => {
      acc[genre.id] = genre.name;
      return acc;
    },
    {}
  );

  return genre_ids.map((id) => genreMap[id]).filter((name) => name);
}

const Modal = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { modalData, setIsModal, isModal } = useContext(ModalContext);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const {
    title,
    name,
    original_name,
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    genre_ids,
    id,
  } = modalData as Media;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mediaType = title ? "movie" : "tv";

  const handlePlayClick = () => {
    if (id && isMounted) {
      router.push(`/${mediaType}/${id}`);
    }
  };

  const banner = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : `https://image.tmdb.org/t/p/original${poster_path}`;

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
    fetchGenres();
  }, []);

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

  return (
    <Box
      sx={{
        position: "fixed",
        display: isModal ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
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
          maxHeight: "90vh",
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            width={600}
            height={480}
            src={banner}
            alt="spotlight"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 80%)",
            }}
          >
            <Box sx={{ padding: "2rem 3rem" }}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {title || name || original_name}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button
                  label="Play"
                  filled
                  Icon={Play}
                  onClick={handlePlayClick}
                />
                <IconButton>
                  <Add />
                </IconButton>
                <IconButton>
                  <Like />
                </IconButton>
                <IconButton>
                  <Dislike />
                </IconButton>
              </Box>
              <Typography
                sx={{ color: "success.main", fontWeight: "bold", mt: 1 }}
              >
                {Math.round(vote_average * 10)}% Match
              </Typography>
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
            padding: "2rem 3rem",
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography>{overview}</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography>
              Genre: {renderGenre(genre_ids, genres).join(", ")}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: "bold",
            padding: "1rem 3rem",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Similar {mediaType === "movie" ? "Movies" : "TV Shows"}
        </Typography>
        <SimilarMedia mediaType={mediaType} id={id} />
      </Box>
    </Box>
  );
};
export default Modal;
