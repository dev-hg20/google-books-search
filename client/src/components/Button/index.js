import React from "react";
import { Button } from "react-bootstrap";

function Buttons({ handleFormSubmit }) {
  return (
    <Button variant="primary" type="submit" handleFormSubmit={handleFormSubmit}>
      SUBMIT
    </Button>
  );
}

export default Buttons;
