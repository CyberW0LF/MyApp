import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";
import laptop from "../tasks/img/laptop.png";
import mouse from "../tasks/img/mouse.png";
import cable from "../tasks/img/cable.png";
import screen from "../tasks/img/screen.png";
import projector from "../tasks/img/projector.png";
import remote from "../tasks/img/remote.png";
import speakers from "../tasks/img/speakers.png";

class TableRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.props.loadData();
  }

  setClass = el => {
    if (+el.endDate <= Date.now()) return "elapsed";
  };

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Кабинет</Table.HeaderCell>
              <Table.HeaderCell>Дата начала</Table.HeaderCell>
              <Table.HeaderCell>Дата завершения</Table.HeaderCell>
              <Table.HeaderCell>Оборудование</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.data &&
              this.props.data.map(el => (
                <Table.Row className={this.setClass(el)} key={el._id}>
                  <Table.Cell>{el.kabinet + " ауд."}</Table.Cell>
                  <Table.Cell>{moment(el.startDate).format("llll")}</Table.Cell>
                  <Table.Cell>{moment(el.endDate).format("llll")}</Table.Cell>
                  <Table.Cell>
                    {el.laptop && (
                      <img src={laptop} alt="" className="logo_img" />
                    )}
                    {el.projector && (
                      <img src={projector} alt="" className="logo_img" />
                    )}
                    {el.mouse && (
                      <img src={mouse} alt="" className="logo_img" />
                    )}
                    {el.powerStrip && (
                      <img src={cable} alt="" className="logo_img" />
                    )}
                    {el.screen && (
                      <img src={screen} alt="" className="logo_img" />
                    )}
                    {el.remote && (
                      <img src={remote} alt="" className="logo_img" />
                    )}
                    {el.speakers && (
                      <img src={speakers} alt="" className="logo_img" />
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TableRequests;
