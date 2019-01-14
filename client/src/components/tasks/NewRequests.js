import React, { Component } from "react";
import { Button, Form, Modal, Label } from "semantic-ui-react";
import laptop from "./img/laptop.png";
import cable from "./img/cable.png";
import mouse from "./img/mouse.png";
import screen from "./img/screen.png";
import remote from "./img/remote.png";
import projector from "./img/projector.png";
import speakers from "./img/speakers.png";
import weekly from "./img/weekly.png";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { relative } from "path";

class NewRequests extends Component {
  constructor(props) {
    super(props);
    moment.locale("ru");
    this.state = {
      startDate: moment(),
      endDate: moment(),
      kabinet: 0,
      laptop: true,
      projector: false,
      mouse: false,
      screen: false,
      powerStrip: false,
      remote: false,
      speakers: false,
      kabinets: [5, 7, 15, 18, 24, 26, 27, 34],
      modalOpen: false,
      weekly: false
    };
  }

  handleChangeStartDate = date => {
    console.log(date.unix());
    this.setState({
      startDate: date
    });
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date
    });
  };

  sendData = () => {
    fetch("http://localhost:3001/api/multimedia", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        ...this.state,
        startDate: this.state.startDate.unix() * 1000,
        endDate: this.state.endDate.unix() * 1000
      })
    })
      .then(d => d.json())
      .then(data => {
        if (data) this.setState({ modalOpen: false });
      });
  };

  handleChangeCabinet = (e, { value: kabinet }) => {
    this.setState({
      kabinet
    });
  };

  laptop = e => {
    this.setState({
      laptop: !this.state.laptop
    });
  };

  mouse = e => {
    this.setState({ mouse: !this.state.mouse });
  };
  screen = e => {
    this.setState({
      screen: !this.state.screen
    });
  };

  powerStrip = e => {
    this.setState({
      powerStrip: !this.state.powerStrip
    });
  };

  remote = e => {
    this.setState({
      remote: !this.state.remote
    });
  };

  projector = e => {
    this.setState({
      projector: !this.state.projector
    });
  };

  speakers = e => {
    this.setState({
      speakers: !this.state.speakers
    });
  };

  weekly = e => {
    this.setState({
      weekly: !this.state.weekly
    });
  };

  handleOpenModal = () => this.setState({ modalOpen: true });
  cancelBtn = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button content="Новая заявка" onClick={this.handleOpenModal} />
        }
        open={this.state.modalOpen}
      >
        <Modal.Header>Новая заявка на технику</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Form.Select
                label="Кабинет"
                placeholder="Кабинет"
                onChange={this.handleChangeCabinet}
                options={this.state.kabinets.map(name => ({
                  key: name,
                  text: name + " ауд.",
                  value: name
                }))}
              />
            </Form.Field>
            <Form.Field>
              <span>Время Начала</span>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChangeStartDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={10}
                dateFormat="DD/MM/YYYY | HH:mm"
                timeCaption="time"
              />
              <span>Время Окончания</span>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleChangeEndDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={10}
                dateFormat="DD/MM/YYYY | HH:mm"
                timeCaption="time"
              />
            </Form.Field>
            <Form.Field>
              <Label
                onClick={this.laptop}
                color={this.state.laptop ? "green" : null}
              >
                <img src={laptop} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.projector}
                color={this.state.projector ? "green" : null}
              >
                <img src={projector} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.screen}
                color={this.state.screen ? "green" : null}
              >
                <img src={screen} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.mouse}
                color={this.state.mouse ? "green" : null}
              >
                <img src={mouse} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.powerStrip}
                color={this.state.powerStrip ? "green" : null}
              >
                <img src={cable} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.remote}
                color={this.state.remote ? "green" : null}
              >
                <img src={remote} className="logo_img" alt="" />
              </Label>
              <Label
                onClick={this.speakers}
                color={this.state.speakers ? "green" : null}
                style={{ position: relative }}
              >
                <img src={speakers} className="logo_img" alt="" />
              </Label>
            </Form.Field>
            <Form.Field>
              <Label
                onClick={this.weekly}
                //red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"
                color={this.state.weekly ? "orange" : null}
              >
                <img src={weekly} className="logo_img" alt="Еженедельно" />
                <span> Еженедельно</span>
              </Label>
            </Form.Field>
            <Form.Field>
              <Button onClick={this.sendData}>Добавить</Button>
              <Button onClick={this.cancelBtn}>Отменить</Button>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NewRequests;
