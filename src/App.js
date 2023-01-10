import GlobalCss from "./global.css";
import React from "react";
import bgMobile from "./images/bg-intro-mobile.png";
import bgDesktop from "./images/bg-intro-desktop.png";
import styled from "styled-components";
import TextContainer from "./components/textContainer";
import FormContainer from "./components/formContainer";

function App() {
  return (
    <Wrapper>
      <GlobalCss />
      <TextContainer />
      <FormContainer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: url(${bgMobile}), #ff7979;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 88px 24px 50px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 100vh;
  @media (min-width: 1440px) {
    background: url(${bgDesktop}), #ff7979;
    flex-direction: row;
    gap: 45px;
    padding: 121px 0;
    align-items: center;
    justify-content: center;
  }
`;
