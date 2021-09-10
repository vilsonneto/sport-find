import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  img {
    width: 200px;
  }

  @media (min-width: 1024px) {
    max-width: 1280px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2%2rem;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "roboto";
    width: 90vw;

    input {
      width: 200px;
    }

    button {
      width: 80vw;
      margin-top: 2%;
    }

    h1 {
      margin-top: 10%;
      margin-bottom: 2%;
    }

    span {
      margin-top: 10px;
      font-size: 0.75rem;
    }

    @media (min-width: 1024px) {
      margin-left: 5vw;
      width: 500px;
      height: 368px;
      max-width: 1280px;

      button {
        width: 400px;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 10vw;
    max-width: 1280px;
  }
`;

export const SVG = styled.section`
  display: none;
  @media (min-width: 1024px) {
    max-width: 1280px;
    margin: 0 auto;
    display: block;
  }
`;
