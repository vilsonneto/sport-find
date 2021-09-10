import styled from "styled-components";

export const ContainerNav = styled.nav`
  padding-top: 25px;

  div {
    width: 100%;

    text-align: center;

    h1 {
      font-size: 2rem;
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        a {
          color: var(--black);
        }
      }
    }
  }

  div + div {
    margin-top: 20px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;

    margin: 0 auto;
    padding: 25px 50px 0;

    display: flex;

    div {
      text-align: left;

      ul {
        justify-content: flex-end;

        li + li {
          margin-left: 30%;
        }
      }
    }

    div + div {
      margin: 0;
    }
  }
`;

export const ContainerAbout = styled.section`
  margin-top: 20px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;
    min-height: 490px;
    height: 70vh;

    margin: 0 auto;

    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Typography = styled.div`
  width: 70%;

  margin-top: 20px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  p {
    margin-top: 10px;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    width: 450px;

    padding: 0 50px;

    flex-direction: column;

    p {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
`;

export const Image = styled.div`
  width: 70%;

  @media only screen and (min-width: 768px) {
    max-width: 450px;
    width: 50%;
  }
`;

export const ContainerFeatures = styled.section`
  margin-top: 50px;
  padding: 20px 0;

  background-color: var(--blue-baby);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;

    font-size: 1.8rem;
  }

  div {
    div + div {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    padding: 80px 0;

    h1 {
      margin-bottom: 50px;
    }

    > div {
      display: flex;

      div:nth-child(2) {
        transform: translateY(-20px);
      }

      div + div {
        margin-top: 0;
        margin-left: 50px;
      }
    }
  }
`;

export const Card = styled.div`
  width: 180px;

  padding: 20px 40px;

  text-align: center;

  background-color: var(--white);
  border-radius: 10px;

  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));

  h3 {
    margin-bottom: 5px;
  }
`;

export const ContainerFooter = styled.footer`
  padding: 20px;

  color: var(--white);

  background-color: var(--black);

  @media only screen and (min-width: 1024px) {
    padding: 50px 20px;
  }

  > div {
    max-width: 425px;

    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
      max-width: 1280px;

      padding: 0px 50px;

      display: flex;
      justify-content: space-between;
    }

    > div:nth-child(1) {
      margin-bottom: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
      }

      span {
        display: flex;
        align-items: center;
      }

      span + span {
        margin-top: 5px;
      }

      svg + span {
        margin-left: 3px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;

      @media only screen and (min-width: 1024px) {
        width: 70%;
      }

      div {
        display: flex;
        flex-direction: column;

        h6 {
          margin-bottom: 3px;

          text-align: center;
          font-size: 1rem;
        }

        a {
          color: var(--white);
          font-size: 0.9rem;

          display: flex;
          justify-content: flex-start;
          align-items: center;

          :hover {
            text-decoration: underline;
          }
        }

        a + a {
          margin-top: 2px;
        }

        svg + span {
          margin-left: 3px;
        }
      }
    }
  }
`;
