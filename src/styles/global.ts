import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
   --blue-baby: #0DFFE6;
   --blue:#0D17FF;
   --orange: #FF9900;
   --gray: #E5E5E5;
   --white: #ffffff;
   --black: #000000;
   --red: #FF0000;
}

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}


a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

`;
