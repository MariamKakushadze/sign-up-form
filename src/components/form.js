import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function FormPart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="First Name" {...register("First Name")} />

        <Input
          placeholder="Last Name"
          {...register("Last Name", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input placeholder="Email Address" {...register("Email Address")} />

        <Input placeholder="Password" {...register("Password")} />

        <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
      </Form>
      <Conditions>
        By clicking the button, you are agreeing to our{" "}
        <span style={{ color: "red" }}>Terms and Services</span>
      </Conditions>
    </FormWrapper>
  );
}

const FormWrapper = styled.section`
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  min-width: 327px;
  gap: 8px;
  @media (min-width: 1440px) {
    justify-content: center;
    margin: 0;
    width: 540px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  outline: none;
  padding-left: 19px;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #3d3b48;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border-style: none;
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: #77e2b3;
  }
  color: white;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
`;

const Conditions = styled.span`
  font-size: 11px;
  line-height: 21px;
  color: #bab7d4;
  letter-spacing: 1.5px;
`;
