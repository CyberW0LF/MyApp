import React, { Component } from "react";
import { Button, Modal, Label, Icon } from "semantic-ui-react";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      cabinets: [],
      modalCabinet: false
    }; 
  }

  loadData = async () => {
    const respons = await fetch("http://localhost:3001/api/cabinets");
    let cabinets = await respons.json();
    this.setState({ cabinets });
    console.log(cabinets);
  };

  handleOpenModalCabinet = () => {
    this.loadData();
    this.setState({ modalCabinet: true });
  };
  cancelBtn = () => this.setState({ modalCabinet: false });

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button onClick={this.handleOpenModalCabinet}>Кабинеты</Button>
          }
          open={this.state.modalCabinet}
        >
          <Modal.Header>Кабинеты</Modal.Header>
          <Modal.Content>
            <table border="1px">
              {this.state.cabinets.map(cab => (
                <tr key={cab._id}>
                  <td>{cab.name} </td>
                  <td>
                    <Icon name="clock" />
                  </td>
                  <td>
                    <Icon name="edit" />
                  </td>
                  <td>
                    {" "}
                    <Icon name="delete" />
                  </td>
                </tr>
              ))}
            </table>
            <Button>Добавить</Button>
            <Button onClick={this.cancelBtn}>Закрыть</Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Admin;
