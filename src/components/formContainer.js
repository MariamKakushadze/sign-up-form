import styled from "styled-components";
import FormPart from "./form";

export default function FormContainer() {
  return (
    <FormSection>
      <TryBtn>
        Try it free 7 days{" "}
        <span style={{ fontWeight: "400" }}>then $20/mo. thereafter </span>
      </TryBtn>
      <FormPart />
    </FormSection>
  );
}

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 540px;
  @media (min-width: 1440px) {
    justify-content: center;
    margin: 0;
    width: 540px;
  }
`;

const TryBtn = styled.button`
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  border-style: none;
  padding: 18px 67px;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: white;
  letter-spacing: 0.267857px;
  &:hover {
    cursor: pointer;
    background: #5e60a0;
  }
  @media (min-width: 475px) {
    padding: 18px 0;
    min-width: 100%;
  }
`;
