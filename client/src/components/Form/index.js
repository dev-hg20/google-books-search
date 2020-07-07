import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Title from "../Title";
import Input from "../Input";
import "./style.css";

function Forms() {
  return (
    <Card>
      <Title>Waht are you looking for?</Title>
      <Form>
        <Input></Input>
        <Button></Button>
      </Form>
    </Card>
  );
}

export default Forms;
