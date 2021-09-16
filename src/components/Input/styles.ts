import styled, { css } from "styled-components";

interface IInputStyledProps {
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;

  text-align: left;

  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div<IInputStyledProps>`
  width: 100%;
  padding: 10px;

  background-color: var(--white);
  border: 2px solid var(--black);
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
      border: 2px solid var(--red);

      svg {
        color: var(--red);
      }
    `}
`;
