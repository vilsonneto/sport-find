import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 20px 0;

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;

    margin: 0 auto;
  }
`;

export const Container = styled.main`
  padding: 0 20px 20px;

  text-align: center;

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;
    height: calc(100vh - 64px);

    margin: 0 auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContainerCards = styled.article`
  margin: 20px 0;

  div + div {
    margin-top: 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 500px;

    margin: 20px auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  div:nth-child(5) {
    margin-left: 0;
  }

  div + div {
    margin-left: 10px;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;

    justify-content: space-between;

    div + div {
      margin: 0;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 180px;

    margin-bottom: 5px;

    border-radius: 50%;
  }

  span:nth-child(2) {
    font-size: 1.2rem;
  }

  span:nth-child(3) {
    font-style: italic;
  }

  div {
    margin-top: 5px;

    img {
      width: 30px;
      height: 30px;

      border-radius: 0;
    }

    a + a {
      margin-left: 20px;
    }
  }
`;
