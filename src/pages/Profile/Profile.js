import React, { Component } from "react";
import { Wrapper, Content } from "./style";
import PersonalProfile from "../components/PersonalProfile";

export class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <PersonalProfile user="André Silva"></PersonalProfile>
        </Content>
      </Wrapper>
    );
  }
}

export default Profile;
