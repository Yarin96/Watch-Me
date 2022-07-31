import React from "react";
import Row from "../../components/Row/Row";
import Background from "../../components/Background/Background";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=2e17f044e00f50ec93c82f2b38d45999";

function Home() {
  return (
    <>
      <Background favorite={false} />
      <Row title="Now Playing" fetchURL={API_URL} />
    </>
  );
}

export default Home;
