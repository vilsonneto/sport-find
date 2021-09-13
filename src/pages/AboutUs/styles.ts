import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: center;
  height: 100vh;

  h1 {
    margin: 2rem;
  }

  .conteiner-geral {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      flex-direction: row;
      height: 67%;
      align-items: center;
      justify-content: center;
    }
  }

  .conteiner-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }

  .conteiner-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 100%;
    width: 34%;
  }

  p {
    margin: 2rem;
  }
`;
