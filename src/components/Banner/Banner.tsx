"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button as MuiButton } from "@mui/material";
import { Media, Video } from "../../types";
import { Play, Info } from "../../utils/icons";
import { ModalContext } from "../../context/ModalContext";
import { getMovie } from "@/utils/apiService";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const VideoWrapper = styled(Box)(({  }) => ({
  position: "relative",
  width: "100%",
  height: 0,
  paddingBottom: "56.25%",
  overflow: "hidden",
}));

const SpotlightVideo = styled("iframe")(({  }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
  display: "block",
}));

const Spotlight = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "88vh",

  [theme.breakpoints.down("sm")]: {
    height: "64vh",
  },
}));

const Details = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 10,
  width: "35%",
  marginLeft: "3.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
  bottom: "25%",

  [theme.breakpoints.down("sm")]: {
    width: "75%",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 0,
    bottom: "2rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  padding: "0.4rem",
  fontSize: "2.2rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
}));

const Synopsis = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  padding: "0.3rem",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: "0.9rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
}));

const ButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  margin: "0.3rem 0",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const WhiteButton = styled(MuiButton)(({  }) => ({
  color: "black",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
}));

const TransparentButton = styled(MuiButton)(({  }) => ({
  color: "white",
  backgroundColor: "transparent",
  borderColor: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

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
      const result = await getMovie("/movie/top_rated?language=en-US&page=1");

      if (result && result.data && result.data.results) {
        const randomIndex = Math.floor(Math.random() * result.data.results.length);
        const selectedMedia = result.data.results[randomIndex];
        setMedia(selectedMedia);

        const trailerResponse = await getMovie(`/movie/${selectedMedia.id}/videos`);

        if (trailerResponse && trailerResponse.data && Array.isArray(trailerResponse.data.results)) {
          const videos: Video[] = trailerResponse.data.results as unknown as Video[];
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
    <Spotlight>
      {trailerKey ? (
        <VideoWrapper>
          <SpotlightVideo
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      ) : (
        media && (
          <Image
            width={1280}
            height={720}
            src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
            alt="spotlight"
          />
        )
      )}
      <Details>
        <Title>{media?.title || media?.name}</Title>
        <Synopsis>
          {media?.overview?.slice(0, 100) + "..." || "No description available."}
        </Synopsis>
        <ButtonRow>
          <WhiteButton variant="contained" onClick={handlePlayClick} startIcon={<Play />}>
            Play
          </WhiteButton>
          {media && (
            <TransparentButton variant="outlined" onClick={() => onClick(media)} startIcon={<Info />}>
              More Info
            </TransparentButton>
          )}
        </ButtonRow>
      </Details>
    </Spotlight>
  );
};

export default Banner;
