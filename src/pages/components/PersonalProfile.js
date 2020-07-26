import React, { Component } from "react";
import PersonalProfilePhoto from "react-rounded-image";
import Photo from "../../assets/andre.jpg";
import { Wrapper, TitleProfile, Row } from "../Profile/style";
import Topic from "../components/Topic";

export class PersonalProfile extends Component {
  render() {
    return (
      <Wrapper>
        {" "}
        {/*         <ContainerHeader>
          <TitleProfile fontsize="20px">{this.props.user}</TitleProfile>
        </ContainerHeader> */}
        <Row marginTop={"50px"}>
          {" "}
          <PersonalProfilePhoto
            image={Photo}
            roundedColor="#81c565"
            imageWidth="220"
            imageHeight="220"
            roundedSize="12"
          />
        </Row>
        <TitleProfile fontsize="15px" marginTop="20px">
          Prioridade de tópicos
        </TitleProfile>
        <Row>
          <Topic text="#Exportes" />
        </Row>
        <Row>
          <Topic text="#Vida Noturna" />
        </Row>
      </Wrapper>
    );
  }
}

export default PersonalProfile;
