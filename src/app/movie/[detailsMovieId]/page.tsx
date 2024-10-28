"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Layout from "@/components/Layout/Layout";
import { Video } from "@/types";

const DetailsMoviePage = () => {
  const pathname = usePathname();
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const movieId = pathname.split("/").pop();

  const loadTrailer = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        },
      }
    );
    const trailer = response.data.results.find(
      (video: Video) => video.type === "Trailer"
    );
    setTrailerKey(trailer ? trailer.key : null);
    setLoading(false);
  };

  useEffect(() => {
    if (movieId) {
      loadTrailer();
    }
  }, [movieId]);

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <p style={{ color: "white" }}>Loading trailer...</p>
        ) : trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        ) : (
          <p style={{ color: "white" }}>Trailer not available</p>
        )}
      </div>
    </Layout>
  );
};

export default DetailsMoviePage;
