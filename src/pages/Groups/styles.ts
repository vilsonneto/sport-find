import styled from "styled-components";

export const Container = styled.main`
  header {
    margin: 20px auto;
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

  .container__filter-state {
    display: flex;
    justify-content: center;
  }
`;

export const GroupsContainer = styled.ul`
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
