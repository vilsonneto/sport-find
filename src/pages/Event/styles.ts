import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;

  margin: 0 auto;

  .containerHeader {
    display: none;

    @media only screen and (min-width: 1024px) {
      display: block;
    }
  }

  .containerArrow {
    padding: 15px;
  }

  .containerStyle {
    @media only screen and (min-width: 1024px) {
      margin: 0 20px;
      padding: 20px;

      border: 3px solid var(--black);
      border-radius: 20px;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;

    margin-bottom: 10px;

    text-align: center;

    .title {
      margin-bottom: 10px;
      padding: 5px 0;

      background-color: var(--blue);

      h1 {
        color: var(--white);
      }

      @media only screen and (min-width: 1024px) {
        width: 90%;

        margin-bottom: 0;

        border-radius: 15px;
      }
    }

    @media only screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  article:nth-child(2) {
    max-width: 375px;
    width: 100%;

    margin: 0 auto 20px;
    padding: 0 15px;

    section {
      margin-bottom: 10px;

      h3 {
        span,
        a {
          font-weight: normal;
        }
      }
    }
  }

  article:nth-child(3) {
    max-width: 400px;
    width: 100%;

    margin: 0 auto;
    padding: 0 15px;

    img {
      width: 100%;
    }
  }
`;
