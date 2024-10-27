"use client";
import Layout from "@/components/Layout/Layout";
import TopMovies from "@/components/TopMovies/TopMovies";
import { Media } from "@/types";
import { getMovie } from "@/utils/apiService";
import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = async () => {
    const res = await getMovie("/discover/movie");
    if (res.error) {
      setError(res.error.message);
    } else {
      setMovies(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        bgcolor="black"
        sx={{
          textTransform: "capitalize",
          marginTop: { xs: 0, sm: 2 },
        }}
      >
        <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
          Top Rated Movies
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        ) : error ? (
          <Typography color="red">{error}</Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {movies
              .filter((movie) => movie.poster_path !== null)
              .map((movie) => (
                <TopMovies key={movie.id} item={movie} />
              ))}
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default MoviePage;
