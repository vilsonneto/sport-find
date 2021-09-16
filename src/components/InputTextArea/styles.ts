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

  background-color: var(--white);

  border-radius: 5px;
  display: flex;
  margin-bottom: 15px;
  transition: 0.4s;

  svg {
    margin-right: 10px;
  }

  textarea {
    background: transparent;
    border: 2px solid var(--black);

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
