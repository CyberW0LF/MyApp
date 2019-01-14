import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Statistic from "./Statistic";
import Multimedia from "./Multimedia";
import Calendar from "./Calendar";
import Equipment from "./Equipment";
import Admin from "./Admin";
import Auth from "./Auth";
import Main from "./Main";

import { Menu } from "semantic-ui-react";

export default class MyMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Menu className="main_menu">
            <Menu.Item as={Link} to="/" content="Главная" />
            <Menu.Item as={Link} to="/statistic" content="Статистика" />
            <Menu.Item as={Link} to="/equipment" content="Оборудование" />
            <Menu.Item as={Link} to="/multimedia" content="Мультимедиа" />
            <Menu.Item as={Link} to="/calendar" content="Календарь" />
            <Menu.Item as={Link} to="/admin" content="Администрирование" />
            <Menu.Item as={Link} to="/auth" content="auth" />
          </Menu> */}

          <Route path="/" exact component={Main} />
          <Route path="/statistic" component={Statistic} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/multimedia" component={Multimedia} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
        </div>
      </BrowserRouter>
    );
  }
}
