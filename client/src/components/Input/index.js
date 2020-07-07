import React from "react";
import { Form } from "react-bootstrap";

function Input({ onChange }) {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        placeholder="What are you searching for?"
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default Input;
