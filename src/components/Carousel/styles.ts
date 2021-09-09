import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
`;

export const ItemsConteiner = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

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
      width: 90%;
      height: 74%;
      border-radius: 100%;
      object-fit: cover;

      @media (min-width: 768px) {
        width: 38%;
        height: 75%;
      }

      @media (min-width: 1440px) {
        width: 30%;
      }
    }
  }
`;
