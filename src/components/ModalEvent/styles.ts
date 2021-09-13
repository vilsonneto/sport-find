import styled from "styled-components";

export const Form = styled.form`
  width: 252px;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    margin-bottom: 0.75rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  .buttom-create {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  button {
    width: 196px;
  }

  .button-edit {
    margin: 0 auto;
    display: flex;

    button + button {
      margin-left: 10px;
    }
  }
`;
