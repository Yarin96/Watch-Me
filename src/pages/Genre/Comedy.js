import React from "react";
import Row from "../../components/Row/Row";
import Background from "../../components/Background/Background";

function Comedy() {
  return (
    <>
      <Background favorite={false} />
      <Row title="Comedy" fetchURL={"/api/genres"} />
    </>
  );
}

export default Comedy;
