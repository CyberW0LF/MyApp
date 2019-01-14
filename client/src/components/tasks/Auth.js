import React, { Component } from "react";
import { Button, Divider, Form, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
  }
  signin = async e => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("http://localhost:3001/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    let token = await res.text();
    if (token) localStorage.setItem("token", token);
  };

  render() {
    return (
      <Container>
        <Grid columns={3} relaxed="very" stackable centered>
          <Grid.Column>
            <Form onSubmit={this.signin}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Email"
                name="email"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Пароль"
                type="password"
                name="password"
              />
              <Button
                // as={Link}
                // to="/"
                content="Войти"
                primary
                type="submit"
                size="small"
              />
              <hr />
              <Button content="Регистрация" icon="signup" size="small" />
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Auth;
