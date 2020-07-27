import styled from "styled-components";
import Rectangle from "../../assets/Rectangle.png";
import { darken } from "polished";

export const Logo = styled.img`
  width: ${(props) => `${props.width}`};
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-image: url(${Rectangle});
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    background-image: url(${Rectangle});
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    background-image: url(${Rectangle});
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    background-image: url(${Rectangle});
  }

  @media only screen and (min-width: 1224px) {
  }

  @media only screen and (min-width: 1824px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: #47484c;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 8 15px;
    color: #fff;
    margin: 0 0 10px;
    padding-left: 15px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #e57728;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background: ${darken(0.07, "#e57728")};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 13px;
    opacity: 0.8;
    text-decoration: none;
    font-weight: lighter;
    letter-spacing: 0.5px;
    &:hover {
      opacity: 1;
    }
  }

  h1 {
    text-align: ${(props) => `${props.align}`};
    height: 18px;
    font-size: 12px;
    line-height: 10px;
    color: #fff;
    letter-spacing: 1px;
    font-family: Montserrat, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
  }
`;
