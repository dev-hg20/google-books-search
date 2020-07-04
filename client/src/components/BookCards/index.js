import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function BookCards() {
  return (
    <Card>
      <Card.Header>Harry Potter</Card.Header>
      <Card.Body>
        <Card.Title>Harry Potter and The Goblet of Fire</Card.Title>
        <p>Written by: J.K Rowlings</p>
        <Card.Text>DESCRIPTIONNNNNNNNNNN YAS GURL</Card.Text>
        <Button variant="primary">DELETE</Button>
      </Card.Body>
    </Card>
  );
}
export default BookCards;
