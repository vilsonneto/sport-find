import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  height: 100vh;

  margin: 0 auto;
  padding: 50px 20px;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    header {
      font-size: 1.2rem;
    }

    footer {
      button {
        padding: 10px 35px;

        font-size: 1.5rem;

        border-radius: 50px;
      }
    }
  }
`;
