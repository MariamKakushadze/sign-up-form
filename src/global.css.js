import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
* {
  box-sizing: border-box;
  transition: all 0.25s ease-out;
  margin: 0 auto;
}
body {
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style:normal;
  }
`;
