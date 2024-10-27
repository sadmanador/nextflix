import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getMovie } from "@/utils/apiService";
import { Media, MovieSectionProps } from "@/types";
import Cards from "@/components/Cards/Cards";

export const MovieSections: React.FC<MovieSectionProps> = ({
  heading,
  endpoint,
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    const res = await getMovie(`${endpoint}`);
    if (res.error) {
      setError(res.error.message);
    } else {
      setMedia(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (media.length === 0) {
      fetchMovies();
    }
  }, [media.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textTransform: "capitalize",
        marginTop: { xs: 0, sm: "-9rem" },
      }}
    >
      <Typography
        component="strong"
        sx={{
          fontSize: "1.2rem",
          marginLeft: "3rem",
          padding: "0.5rem 0",
          width: "fit-content",
          zIndex: 1,
          marginBottom: ".85rem",
        }}
      >
        {heading}
      </Typography>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: { xs: "3.2rem 6rem 2.2rem", sm: "3.2rem 6rem 12.5rem" },
            overflowX: "auto",
            marginTop: "-3rem",
            marginLeft: "-3rem",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {media
            ?.filter(
              (item) => item.poster_path !== null && item.backdrop_path !== null
            )
            .map((item, index) => (
              <Cards key={index} item={item} />
            ))}
        </Box>
      )}
    </Box>
  );
};
