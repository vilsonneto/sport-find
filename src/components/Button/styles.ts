import styled, { css } from "styled-components";

interface IButtonStyledProps {
  isVariantGreen: boolean;
  isVariantRed: boolean;
}

export const Container = styled.button<IButtonStyledProps>`
  padding: 10px 20px;

  color: var(--white);
  color: ${(props) => props.isVariantGreen && css`var(--black)`};
  color: ${(props) => props.isVariantRed && css`var(--white)`};
  font-size: 1rem;

  background-color: var(--black);
  background-color: ${(props) => props.isVariantGreen && css`var(--blue-baby)`};
  background-color: ${(props) => props.isVariantRed && css`var(--red)`};
  border: none;
  border-radius: 20px;
`;
