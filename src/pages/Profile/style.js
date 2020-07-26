import styled from "styled-components";

export const RoundedPhoto = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  align-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BaseTopic = styled.div`
  height: 60px;
  width: 450px;
  border-radius: 5px;
  background-color: #47484c;
  margin-top: 25px;
  display: flex;
  align-items: center;
  padding-left: 15px;

  h1 {
    display: flex;
    align-items: center;
    margin-top: 0px;
    padding: 30%;
  }

  button {
  }
`;

export const TitleProfile = styled.h1`
  font-size: ${(props) => `${props.fontsize}`};
  margin-top: ${(props) => `${props.marginTop}`};
  font-weight: ${(props) => `${props.weight}`};
  letter-spacing: 2px;
  color: #fff;
  font-family: Montserrat, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
`;

export const Row = styled.div`
  margin-top: ${(props) => `${props.marginTop}`};
`;

/* export const ContainerHeader = styled.div`
  position: relative;
  text-align: center;
  height: 75px;
  width: 100%;

  margin: 0 0 30px;
  background: linear-gradient(
    118.74deg,
    #e57728 -8.84%,
    #e5a858 49.4%,
    #84c167 106.44%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
 */
