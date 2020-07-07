import React, { useState } from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import BookCards from "../components/BookCards";
import Input from "../components/Input";
import Button from "../components/Button";
// import GoogleAPI from "../utils/googleBookAPI";

function searchPage() {
  const [setSearch] = useState("");
  // const [results, setResults] = useState([]);

  //when a book is searched, make the API call and setResults
  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(event.target);
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };

  return (
    <Container>
      <Form>
        <Input placeholder="Search" onChange={handleInputChange}></Input>
        <Button onSubmit={handleFormSubmit}></Button>
      </Form>
      <br></br>
      <BookCards></BookCards>
    </Container>
  );
}

export default searchPage;
