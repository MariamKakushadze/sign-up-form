import styled from "styled-components";

export default function TextContainer() {
  return (
    <TextWrapper>
      <Header>Learn to code by watching others</Header>
      <Text>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </Text>
    </TextWrapper>
  );
}
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 525px;
  @media (min-width: 1440px) {
    justify-content: center;
    margin: 0;
  }
`;
const Header = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.291667px;
  color: #ffffff;
  @media (min-width: 1440px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.520833px;
    text-align: left;
  }
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 1.2px;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
