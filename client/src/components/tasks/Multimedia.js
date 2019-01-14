import React, { Component } from "react";
import { Container, Button, Label, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

import TableRequests from "./TableRequests";
import NewRequests from "./NewRequests";

class Multimedia extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      update: false,
      allElements: "",
      todayElements: "0/0"
    };
  }

  loadData = async () => {
    const myHeaders = {
      Authorization: localStorage.getItem("token")
    };
    const respons = await fetch("http://localhost:3001/api/multimedia", {
      headers: myHeaders
    });
    if (respons.status === 200) {
      const data = await respons.json();
      this.setState({ data });
      this.countElement();
    } else window.location = "http://localhost:3000/";
  };

  update = () => {
    this.forceUpdate();
    console.log("update");
  };

  todayBtn = () => {
    let count = 0;
    const data = this.state.data.filter(item => {
      if (+item.endDate > Date.now()) count++;
      if (
        moment(item.startDate)
          .fromNow(true)
          .includes("часов")
      )
        return item;
      return false;
    });
    const todayElements = `0/${data.length}`;
    this.setState({ data, todayElements });
  };
  countElement = () => {
    let count = 0;
    this.state.data.forEach(el => {
      if (+el.endDate > Date.now()) count++;
    });
    this.setState({ allElements: `${count}/${this.state.data.length}` });
  };

  yestodayBtn = () => {};

  render() {
    return (
      <Container className="request-body">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={10} textAlign="center">
              <h3>Заявки на технику</h3>
            </Grid.Column>
            <Grid.Column floated="right" width={4} textAlign="right">
              <Button as={Link} to="/" circular icon="home" />
              <Button circular color="red" inverted icon="sign-out" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={8}>
              <Button onClick={this.loadData} className="relative">
                Все
                <Label color="olive" size="mini" floating>
                  {this.state.allElements}
                </Label>
              </Button>
              <Button as="div" onClick={this.todayBtn} className="relative">
                Сегодня
                <Label color="green" size="mini" floating>
                  {this.state.todayElements}
                </Label>
              </Button>
              <Button onClick={this.yestodayBtn} className="relative">
                Завтра
                <Label color="grey" size="mini" floating>
                  0
                </Label>
              </Button>
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              <NewRequests update={this.update} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr />
        <TableRequests data={this.state.data} loadData={this.loadData} />
      </Container>
    );
  }
}

export default Multimedia;
