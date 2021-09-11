import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 280px;
  height: 150px;
  border-radius: 5px;
  background-color: var(--orange);
  color: var(--white);
  margin-bottom: 16px;
  box-shadow: inset 0 4px 4px rgb(0 0 0 / 25%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    text-align: left;
    width: 70%;

    h2 {
      margin-bottom: 16px;
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 360px) {
    width: 300px;
    height: 170px;
  }

  @media (min-width: 768px) {
    margin-right: 8px;
    margin-left: 8px;
  }

  @media (min-width: 1260px) {
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 24px;
  }
`;
