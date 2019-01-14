import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
class Equipment extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return <div>
        <Button>Картриджи</Button>
        <Button>Проекторы</Button>
        <Button>Ноутбуки</Button>
    </div>;
  }
}

export default Equipment;
