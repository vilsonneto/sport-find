import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      background-color: var(--gray);
      box-shadow: 2px 0px 50px 15px rgba(0, 0, 0, 0.5);
      width: 60vw;
      height: 60vh;
    }
  }

  .title {
    margin-bottom: 10px;
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60vw;
      height: 10vh;
    }
  }
  /* 
  h1 {
    text-align: center;
  } */

  .cart {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50vw;
      height: 50vh;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50vh;
  }

  p {
    @media (min-width: 1024px) {
      font-weight: bold;
    }
  }
  img {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
