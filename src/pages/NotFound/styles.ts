import styled from "styled-components";

export const H1 = styled.h1`
  width: 200px;
  height: 98px;
  font-family: "roboto";
  margin-left: 10%;
  font-size: 1.7rem;
  @media (min-width: 768px) {
    margin-left: 25%;
    width: 622px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  justify-content: center;

  button {
    background-color: #000000;
    color: #ffffff;
    border-radius: 30px;
    width: 189px;
    height: 56px;
    @media (min-width: 768px) {
      width: 267px;
      height: 80px;
    }
  }
`;
