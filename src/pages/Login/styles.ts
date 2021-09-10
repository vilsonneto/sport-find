import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "roboto";
  width: 90vw;

  a {
    color: blue;
    cursor: pointer;
  }

  input {
    width: 200px;
  }

  span {
    margin-top: 10px;
    font-size: 0.75rem;
  }
  h1 {
    margin-top: 10%;
    margin-bottom: 2%;
  }
  button {
    width: 80vw;
    margin-top: 2%;
  }

  @media (min-width: 1024px) {
    margin-top: 10%;
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
`;

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
    left: 0;
    margin: 2%;
  }
`;
export const Article = styled.article`
  display: flex;
  justify-content: center;

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
export const Retangle = styled.div`
  @media (min-width: 1024px) {
    width: 100vw;
    height: 1602px;
    z-index: -1;
    background-color: #0d17ff;
    position: absolute;
    left: 1000px;
    top: -260px;
    transform: rotate(-20deg);
    box-shadow: 5px 50px 100px 10px rgba(0, 0, 0, 0.5);
  }
`;

// export const Container = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 100vw;
//   height: 100vh;
//   margin: 0;
// `;
