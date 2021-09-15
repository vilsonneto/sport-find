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
        color: var(--black);
        display: flex;
        cursor: pointer;

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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 70px;
  }

  @media (min-width: 769px) {
    display: flex;

    nav {
      background-color: var(--white);
      position: static;
      width: 280px;

      ul {
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding-left: 30px;
        padding-right: 5px;
        margin-top: 40px;
        height: 200px;
        width: 100%;

        li {
          display: flex;
          align-items: center;
          border: 1px var(--black) solid;
          padding: 7px;
          width: 190px;
          border-radius: 15px;

          svg {
            font-size: 30px;
          }

          span {
            margin-left: 6px;
            display: inline;
            font-weight: bold;
          }
        }
      }
    }
    main {
      width: 100%;
    }
  }
`;
