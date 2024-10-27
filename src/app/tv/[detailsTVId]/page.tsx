"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Video } from "@/types";
import Layout from "@/components/Layout/Layout";

export default function DetailsTvShowPage() {
  const pathname = usePathname();
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const movieId = pathname.split("/").pop();

  console.log(movieId);
  console.log(trailerKey);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieId}/videos`,
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
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    if (movieId) {
      fetchTrailer();
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
        {trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=1&modestbranding=1&showinfo=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        ) : (
          <p style={{ color: "white" }}>Loading trailer...</p>
        )}
      </div>
    </Layout>
  );
}
