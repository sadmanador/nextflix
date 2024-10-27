import { Media, SimilarMediaProps } from "@/types";
import { getMovie } from "@/utils/apiService";
import { useEffect, useState } from "react";
import styles from "../../styles/SimilarMedia.module.scss";
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
      <p>Loading similar {mediaType === "movie" ? "movies" : "TV shows"}...</p>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="similar-media">
      <div className={styles.mediaContainer}>
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
          <p>
            No similar {mediaType === "movie" ? "movies" : "TV shows"} found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SimilarMedia;
