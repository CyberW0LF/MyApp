import React from "react";
import { Container, Button, Form } from "semantic-ui-react";

const SignUp = () => (
  <Container className="containerForm">
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Пароль</label>
        <input placeholder="Пароль" />
      </Form.Field>
      <Button type="submit">Зарегистрироваться </Button>
    </Form>
  </Container>
);

export default SignUp;
