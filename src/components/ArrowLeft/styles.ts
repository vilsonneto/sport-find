import styled from "styled-components";

export const ArrowSvg = styled.div`
  width: 90%;
  margin: 16px auto;

  svg {
    cursor: pointer;
    font-size: 30px;
  }

  h1 {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 92%;
    max-width: 1280px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 1160px) {
    margin-bottom: 24px;
    h1 {
      display: block;
      font-family: Roboto, sans-serif;
      font-weight: 700;
      font-size: 40px;
    }

    svg {
      margin-right: 5vw;
    }
  }

  @media (min-width: 1206px) {
    svg {
      margin-right: 8vw;
    }
  }
`;
