import styled from "styled-components";

export const Header = styled.header`
  max-width: 1280px;

  margin: 0 auto;
  padding: 15px;
`;

export const ContainerStyle = styled.div`
  max-width: 1280px;

  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 65px);

    padding-bottom: 15px;

    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.main`
  > div {
    margin-bottom: 10px;

    text-align: center;

    header {
      margin-bottom: 10px;
      padding: 5px 0;

      background-color: var(--orange);

      h1 {
        margin-bottom: 5px;

        color: var(--white);
      }

      @media only screen and (min-width: 1024px) {
        width: 75%;

        padding: 10px;

        text-align: left;

        border-radius: 10px;
      }
    }

    @media only screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  article:nth-child(2) {
    margin-bottom: 20px;
    padding: 0 15px;

    section:nth-child(2) {
      margin-top: 10px;

      h3 {
        display: flex;
        align-items: center;

        svg {
          margin-left: 10px;
        }
      }
    }
  }

  article:nth-child(3) {
    padding: 0 15px 70px;

    h3 {
      margin-bottom: 5px;
    }

    section {
      height: calc(100vh - (65px + 128px + 128px + 27px + 70px));

      display: flex;
      flex-direction: column;
      align-items: center;

      overflow-y: auto;

      > div {
        max-width: 360px;
        width: 100%;
        min-height: 100px;
        height: 100px;

        margin: 0;

        div {
          height: 20px;
        }
      }

      div + div {
        margin-top: 5px;
      }

      @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;

        div {
          margin-bottom: 5px;
        }

        div + div {
          margin-top: 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        height: calc(100vh - (65px + 100px + 110px + 27px + 15px));
      }
    }

    @media only screen and (min-width: 1024px) {
      padding-bottom: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  padding: 10px 20px;

  background-color: var(--gray);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;

  div {
    width: 75px;
    text-align: center;

    button {
      padding: 0 20px;

      height: 30px;
    }

    svg {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ContainerMembers = styled.aside`
  width: 100%;
  height: calc(100% - 65px);

  text-align: center;

  background-color: var(--gray);

  position: absolute;

  > div {
    padding: 20px;

    > div {
      margin-top: 10px;

      text-align: left;

      display: flex;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      div + div {
        margin-top: 5px;
      }
    }
  }

  @media only screen and (min-width: 426px) {
    background-color: #4d4d4d8c;

    > div {
      max-width: 425px;
      height: 100%;

      background-color: var(--gray);
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 200px;
    width: 100%;
    height: auto;

    margin: 0 15px;

    position: relative;
  }
`;

export const ContainerChat = styled.aside`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;

    max-width: 200px;
    width: 100%;

    margin: 0 15px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
