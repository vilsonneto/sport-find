import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  max-width: 1280px;
  margin: 24px auto;

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  @media (min-width: 1024px) {
    margin: 40px auto;
  }

  @media (min-width: 1440px) {
    margin: 60px auto;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }

  // a classe item deve estar dentro da div que será passada como children.
  .item {
    flex: none;
    width: 34%;
    height: 100px;
    scroll-snap-align: start;
    pointer-events: none;
    text-align: center;
    cursor: pointer;

    @media (min-width: 1024px) {
      width: 25%;
      height: 13vh;
    }

    @media (min-width: 1440px) {
      width: 13%;
      height: 10vh;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      pointer-events: fill;

      @media (min-width: 1024px) {
        width: 60px;
        height: 60px;
      }

      @media (min-width: 1440px) {
        width: 70px;
        height: 70px;
      }
    }
    p {
      pointer-events: fill;
    }
  }
`;
