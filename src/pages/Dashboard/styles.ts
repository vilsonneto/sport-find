import styled from "styled-components";

export const Container = styled.div`
  nav {
    background-color: var(--gray);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 50px;

      li {
        display: flex;

        svg {
          font-size: 30px;
        }

        span {
          margin-left: 6px;
          display: none;
        }
      }
    }
  }

  main {
  }
`;
