import React, { Component } from "react";
import { Container, Title } from "./styles";
import logo from "../../assets/logopos.png";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container user={""}>
        {/*       <Link to="/">
        <img src={logo} width={"130px"} alt="Tribes" />
      </Link>
 */}
        <Title>André Silva</Title>

        {/*       <AiTwotoneEdit size={30} color="#FFF" /> */}
      </Container>
    );
  }
}
