import React, { Component } from "react";
import { Logo } from "../Login/styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Redirect } from "react-router";

const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido!").required("Email obrigatório!"),
  password: Yup.string().required("Senha obrigatória!"),
});

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    return <Redirect to="/feed" />;
  };

  render() {
    return (
      <>
        <Logo width={"200px"} src={logo} max-width={"700px"} alt="Tribes" />
        <form schema={schema}>
          <h1 align="left">EMAIL</h1>
          <input
            type="email"
            onChange={this.handleEmail}
            value={this.state.email}
            placeholder="E-email"
          />
          <h1 align="left">SENHA</h1>
          <input
            type="password"
            placeholder="Senha"
            onChange={this.handlePassword}
            value={this.state.password}
          />
          <button onClick={this.login}>
            <h1 textAlign="center">Login</h1>
          </button>
          {
            <Link to="">
              Ainda não tem uma conta? <u>Cadastre-se!</u>
            </Link>
          }
        </form>
      </>
    );
  }
}

export default Auth;
