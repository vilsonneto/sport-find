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
    width: 100%;

    .subtitle {
      display: none;
      @media (min-width: 769px) {
        display: block;
      }
    }

    .carousel {
      display: flex;
      overflow-y: hidden;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;

      .item {
        flex: none;
        width: 90%;
        scroll-snap-align: start;
        pointer-events: none;

        .card-container {
          pointer-events: fill;
          display: flex;
          justify-content: center;
          max-width: 320px;

          > div {
            width: 280px;
            height: 150px;
            margin: 16px 3px;
            padding-right: 10px;
          }
        }
      }

      @media (min-width: 450px) {
        .item {
          flex: none;
          width: 60%;
          scroll-snap-align: start;
          pointer-events: none;

          .card-container {
            display: flex;
            justify-content: center;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;

            > div {
              width: 300px;
              height: 150px;
              margin: 16px 3px;
              padding-right: 10px;
            }
          }
        }
      }

      @media (min-width: 769px) {
        flex-direction: column;
        height: auto;
        .item {
          display: flex;
          flex-wrap: wrap;
          flex: none;
          width: 100%;
          scroll-snap-align: start;
          pointer-events: none;
          flex-direction: row;

          .card-container {
            display: inline-block;
            max-width: 350px;
            margin-left: 0;
            margin-right: 0;

            > div {
              width: 320px;
              height: 150px;
              margin: 16px 3px;
              padding-right: 10px;
            }
          }
        }
      }

      @media only screen and (min-width: 1024px) {
        div:nth-child(2) {
          margin-bottom: 10px;
        }
      }
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 70px;
    }
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
          width: 190px;

          padding: 7px;

          border: 1px var(--black) solid;
          border-radius: 15px;

          display: flex;
          align-items: center;

          a,
          div {
            width: 100%;

            color: var(--black);

            display: flex;
            align-items: center;
          }

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

      ul {
        width: 100%;
      }
    }
  }
`;
