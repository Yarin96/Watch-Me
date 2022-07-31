import React from "react";
import Row from "../../components/Row/Row";
import Background from "../../components/Background/Background";

function Drama() {
  return (
    <>
      <Background favorite={false} />
      <Row title="Drama" fetchURL={"/api/genres"} />
    </>
  );
}

export default Drama;


// http://localhost:8000/