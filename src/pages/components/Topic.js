import React, { Component } from "react";
import { BaseTopic, TitleProfile } from "../Profile/style";
import SeachProfile from "../../assets/busca-profile.png";

export default class Topic extends Component {
  render() {
    return (
      <>
        <BaseTopic>
          <img
            src={SeachProfile}
            width={"35px"}
            height={"35px"}
            alt="buscar topicos"
          />
          <TitleProfile fontsize="18px" marginTop="20px" weight="300">
            {this.props.text}
          </TitleProfile>
        </BaseTopic>
      </>
    );
  }
}
