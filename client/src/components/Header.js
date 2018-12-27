import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class extends React.Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" alt="" />
        </Menu.Item>

        <Menu.Item as={Link} name="home" to="/">
          Главная
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as={Link} name="sign-in" to="/signin">
            Авторизация
          </Menu.Item>

          <Menu.Item as={Link} name="sign-up" to="/signup">
            Регистрация
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
