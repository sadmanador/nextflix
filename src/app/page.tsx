"use client";
import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import { MovieSections } from "@/components/MovieSections/MovieSections";
import { ModalContext } from "@/context/ModalContext";
import { Section } from "@/types";
import { useContext } from "react";
import { Box } from "@mui/material";

const Home = () => {
  const { isModal } = useContext(ModalContext);

  return (
    <>
      {isModal && <Modal />}
      <Layout>
        <Banner />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#141414",
            color: "white",
          }}
        >
          <Box sx={{ marginLeft: "0.8rem" }}>
            {sections.map((item, index) => (
              <MovieSections
                key={index}
                heading={item.heading}
                endpoint={item.endpoint}
                defaultCard={item?.defaultCard}
                topList={item?.topList}
                mediaType={item?.mediaType}
              />
            ))}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

const sections: Section[] = [
  {
    heading: "Top 10 Movies in US Today",
    endpoint: "/movie/top_rated?language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Horror Movies",
    endpoint: "/discover/movie?with_genres=27&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Trending Now",
    endpoint: "/trending/movie/week?language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Comedies",
    endpoint: "/discover/movie?with_genres=35&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Action",
    endpoint: "/discover/movie?with_genres=28&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Mystery Movies",
    endpoint: "/discover/movie?with_genres=9648&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Drama",
    endpoint: "/discover/movie?with_genres=18&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Adventure",
    endpoint: "/discover/movie?with_genres=12&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Romance",
    endpoint: "/discover/movie?with_genres=10749&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Documentaries",
    endpoint: "/discover/movie?with_genres=99&language=en-US&page=1",
    mediaType: "movie",
  },
];

export default Home;
