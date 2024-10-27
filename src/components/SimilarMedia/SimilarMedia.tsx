import { Media, SimilarMediaProps } from "@/types";
import { getMovie } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"; // Import Box and Typography from MUI
import Cards from "../Cards/Cards";

const SimilarMedia = ({ id, mediaType }: SimilarMediaProps) => {
  const [similarMovies, setSimilarMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarMovies = async () => {
    const res = await getMovie(`/${mediaType}/${id}/similar`);
    if (res.error) {
      setError(res.error.message);
    } else {
      setSimilarMovies(res.data?.results || []);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, []);

  if (loading) {
    return (
      <Typography>Loading similar {mediaType === "movie" ? "movies" : "TV shows"}...</Typography>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2, overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2, // Space between cards
          maxWidth: '100%',
          scrollbarWidth: 'thin', // For Firefox
          '&::-webkit-scrollbar': {
            height: '8px', // For WebKit browsers
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust scrollbar thumb color
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // Transparent scrollbar track
          },
        }}
      >
        {similarMovies.length > 0 ? (
          similarMovies.map((item) => (
            <Cards
              key={item.id}
              defaultCard={false}
              item={item}
              mediaType={mediaType}
            />
          ))
        ) : (
          <Typography>
            No similar {mediaType === "movie" ? "movies" : "TV shows"} found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SimilarMedia;
