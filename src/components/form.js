import styled from "styled-components";
import { useForm } from "react-hook-form";
import icon from "../images/icon-error.svg";
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
        <Div>
          <Input
            placeholder="First Name"
            {...register("FirstName", {
              required: "First Name cannot be empty",
            })}
            style={{
              border: errors.FirstName
                ? "2px solid #FF7979"
                : "1px solid #dedede",
            }}
          />

          {errors.FirstName && (
            <>
              <ErrorMessage>{errors.FirstName.message}</ErrorMessage>
              <ErrorIcon />
            </>
          )}
        </Div>

        <Div>
          <Input
            placeholder="Last Name"
            {...register("LastName", { required: "Last Name cannot be empty" })}
            style={{
              border: errors.LastName
                ? "2px solid #FF7979"
                : "1px solid #dedede",
            }}
          />

          {errors.LastName && (
            <>
              <ErrorMessage>{errors.LastName.message}</ErrorMessage>
              <ErrorIcon />
            </>
          )}
        </Div>

        <Div>
          <Input
            placeholder="Email Address"
            {...register("Email", {
              required: "Email cannot be empty",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Looks like this not an email",
              },
            })}
            style={{
              border: errors.Email ? "2px solid #FF7979" : "1px solid #dedede",
            }}
          />

          {errors.Email && (
            <>
              <ErrorMessage>{errors.Email.message}</ErrorMessage>
              <ErrorIcon />
            </>
          )}
        </Div>

        <Div>
          <Input
            placeholder="Password"
            {...register("Password", { required: "Password cannot be empty" })}
            style={{
              border: errors.Password
                ? "2px solid #FF7979"
                : "1px solid #dedede",
            }}
          />
          {errors.Password && (
            <>
              <ErrorMessage>{errors.Password.message}</ErrorMessage>
              <ErrorIcon />
            </>
          )}
        </Div>

        <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
      </Form>
      <Conditions>
        By clicking the button, you are agreeing to our{" "}
        <span style={{ color: "red" }}>Terms and Services</span>
      </Conditions>
    </FormWrapper>
  );
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;
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
  @media (min-width: 1440px) {
    gap: 20;
  }
`;

const ErrorMessage = styled.span`
  font-style: italic;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #ff7979;
  margin: 0;
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

const ErrorIcon = styled.div`
  background-image: url(${icon});
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 16px;
`;
