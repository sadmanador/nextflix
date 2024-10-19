"use client";
import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import { MovieSections } from "@/components/MovieSections/MovieSections";
import { ModalContext } from "@/context/ModalContext";
import { Section } from "@/types";
import { useContext } from "react";
import styles from "../styles/Browse.module.scss";

export default function Home() {
  const { isModal } = useContext(ModalContext);

  return (
    <>
      {isModal && <Modal />}
      <Layout>
        <Banner />
        <div className={styles.contentContainer}>
          {sections.map((item, index) => {
            return (
              <MovieSections
                key={index}
                heading={item.heading}
                endpoint={item.endpoint}
                defaultCard={item?.defaultCard}
                topList={item?.topList}
                mediaType={item?.mediaType}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

const sections: Section[] = [
  {
    heading: "Top 10 Movies in US Today",
    endpoint: "/trending/movie/day?language=en-US&page=1",
    topList: true,
    mediaType: "movie",
  },
  {
    heading: "Popular on Netflix",
    endpoint: "/tv/popular?language=en-US&page=1",
    mediaType: "tv",
  },
  {
    heading: "Horror Movies",
    endpoint: "/discover/movie?with_genres=27&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Only on Netflix",
    endpoint: "/discover/tv?language=en-US&page=1",
    defaultCard: false,
    mediaType: "tv",
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
    heading: "Top 10 TV Shows in US Today",
    endpoint: "/tv/top_rated?language=en-US&page=1",
    topList: true,
    mediaType: "tv",
  },
  {
    heading: "Action",
    endpoint: "/discover/movie?with_genres=28&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "TV Sci-Fi and Horror",
    endpoint: "/discover/tv?with_genres=10765&language=en-US&page=1",
    mediaType: "tv",
  },
  {
    heading: "Mystery Movies",
    endpoint: "/discover/movie?with_genres=9648&language=en-US&page=1",
    mediaType: "movie",
  },
  {
    heading: "Animation",
    endpoint: "/discover/tv?with_genres=16&language=en-US&page=1",
    mediaType: "tv",
  },
  {
    heading: "Drama",
    endpoint: "/discover/movie?with_genres=18&language=en-US&page=1",
    mediaType: "movie",
  },
];
