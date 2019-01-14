import React, { Component } from "react";

import MyMenu from "./Menu";
import Auth from "./Auth";

import "./App.css";

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
    this.auth();
  }

  auth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await fetch("http://localhost:3001/users/secret", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      if (res.ok) this.setState({ auth: true });
    }
  };

  render() {
    return <div>{this.state.auth ? <MyMenu /> : <Auth />}</div>;
  }
}

export default Routing;
