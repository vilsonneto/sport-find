import styled from "styled-components";

interface IButtonStyledProps {
  isVariantGreen: boolean;
  isVariantRed: boolean;
}

export const Container = styled.button<IButtonStyledProps>`
  padding: 10px 20px;

  color: #ffffff;
  color: ${(props) => props.isVariantGreen && "#000000"};
  color: ${(props) => props.isVariantRed && "#FFFFFF"};
  font-size: 1rem;

  background-color: #000000;
  background-color: ${(props) => props.isVariantGreen && "#0DFFE6"};
  background-color: ${(props) => props.isVariantRed && "#FF0000"};
  border: none;
  border-radius: 20px;
`;
