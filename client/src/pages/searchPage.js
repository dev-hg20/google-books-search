import React from "react";
import Container from "../components/Container";
import Bookcards from "../components/BookCards";
import Row from "../components/Row";

function searchPage() {
  return (
    <Container>
      <Row>
        <Bookcards></Bookcards>
      </Row>
    </Container>
  );
}

export default searchPage;
