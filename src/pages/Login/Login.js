import React, { Component } from "react";
import { Wrapper, Content } from "./styles";
import { Auth } from "../components/Auth";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Content>
          <Auth />
        </Content>
      </Wrapper>
    );
  }
}

export default Login;
