import React from 'react';
import Row from '../../components/Row/Row';
import './Home.css';
import Background from '../../components/Background/Background';

const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2e17f044e00f50ec93c82f2b38d45999';

const Home = () => {

  return (
    <>
      <Background fav={false} />
      <Row title="Coming Up Soon" fetchURL={API_URL} />
    </>
  );
}

export default Home;