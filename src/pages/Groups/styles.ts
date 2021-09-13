import styled from "styled-components";

export const Container = styled.main`
  .cabecalho {
    margin: 16px auto;
    width: 90%;
    max-width: 1280px;
    display: flex;
    align-items: center;

    h1 {
      display: none;
    }

    @media (min-width: 1024px) {
      margin: 32px auto;

      h1 {
        display: block;
        font-family: Roboto, sans-serif;
        font-weight: 700;
        font-size: 40px;
        margin-left: 30px;
      }
    }

    @media (min-width: 1440px) {
      h1 {
        margin-left: 120px;
      }
    }
  }
`;

export const GroupsContainer = styled.article`
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1280px;
  }
`;
