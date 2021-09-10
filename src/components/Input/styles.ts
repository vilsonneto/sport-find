import styled, { css } from "styled-components";

interface IInputStyledProps {
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;

  text-align: left;

  div {
    span {
      color: #ff0000;
    }
  }
`;

export const InputContainer = styled.div<IInputStyledProps>`
  width: 100%;
  padding: 10px;

  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  display: flex;
  margin-bottom: 15px;
  transition: 0.4s;

  svg {
    margin-right: 10px;
  }

  input {
    background: transparent;
    border: none;

    align-items: center;
    flex: 1;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #ff0000;

      svg {
        color: #ff0000;
      }
    `}
`;
