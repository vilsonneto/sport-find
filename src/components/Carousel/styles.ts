import styled from "styled-components";

export const Container = styled.article`
  width: 70%;
  max-width: 1280px;
  margin: 24px auto;

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  @media (min-width: 1024px) {
    margin: 32px auto;
  }

  @media (min-width: 1440px) {
    margin: 40px auto;
  }
`;

export const ItemsContainer = styled.section`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    height: 120px;
  }

  .item {
    flex: none;
    width: 29%;
    height: 100px;
    scroll-snap-align: start;
    pointer-events: none;
    text-align: center;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 22%;
    }

    @media (min-width: 1024px) {
      width: 15%;
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
