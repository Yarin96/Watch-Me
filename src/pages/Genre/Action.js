import React from "react";
import Background from "../../components/Background/Background";
import Row from "../../components/Row/Row";

function Action() {
  return (
    <>
      <Background favorite={false} />
      <Row title="Action" fetchURL={"/api/genres"} />
    </>
  );
}

export default Action;
