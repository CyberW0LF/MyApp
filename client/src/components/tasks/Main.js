import React, { Component } from "react";
import { Image, Button, Icon, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import laptopImg from "../img/laptop.png";
import usersImg from "../tasks/img/users.png";
import adminImg from "../tasks/img/admin.png";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  signOut = () => {
    this.setState({ auth: !this.state.auth });
    localStorage.setItem("token", "");
    console.log(this.state.auth);
  };
  render() {
    return (
      <Container className="main_container">
        <Grid celled>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Button.Group floated="right">
                <Button circular icon="settings" />
                <Button circular icon="sign-out" onClick={this.signOut} />
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} textAlign="center">
            <Grid.Column>
              <Button as={Link} animated="vertical" to="/multimedia">
                <Button.Content hidden>Техника</Button.Content>
                <Button.Content visible>
                  <Image src={laptopImg} className="item_logo" />
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button animated="vertical">
                <Button.Content hidden>Профиль</Button.Content>
                <Button.Content visible>
                  <Image src={usersImg} className="item_logo" />
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button animated="vertical">
                <Button.Content hidden>Админка</Button.Content>
                <Button.Content visible>
                  <Image src={adminImg} className="item_logo" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
