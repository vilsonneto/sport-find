import styled from "styled-components";

export const Conteiner = styled.div`
  /* right: 15px;
  bottom: 15px; */

  .container {
    position: relative;
  }
  .icon {
    width: 90px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
      height: 90px;
    }
  }

  .svg {
    height: 40px;
    width: 40px;
    color: var(--orange);
    @media (min-width: 1024px) {
      height: 50px;
      width: 50px;
    }
  }

  .content {
    transition: 0.4s;
    width: 300px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
    position: absolute;
    bottom: 75px;
    right: 0;
    background-color: var(--gray);
    transform: translateX(10px);

    @media (min-width: 1024px) {
      transform: translateY(-10px);
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: var(--orange);
    /* text-transform: capitalize; */
    width: 300px;
    > div {
      width: 237px;
    }
  }
  .title span,
  strong {
    display: block;
  }

  .dialog {
    width: 300px;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }

  .container-content {
    display: flex;
    flex-direction: column;
    width: 233px;
    button {
      width: 182px;
      margin: 0 auto;
      margin-bottom: 5px;
    }
  }

  .container-content span {
    display: block;
    margin: 15px;
  }

  .dialog .content-input {
    display: flex;
    flex-flow: column-reverse;
    height: 173px;
    width: 212px;
    margin: 0 auto;
  }
  .dialog label {
    transition: all 0.2s;
    padding: 0 10px;
    font-size: 15px;
    color: var(--grey);
  }
  .dialog textarea {
    cursor: text;
    border: 1px solid var(--white);
    border-radius: 5px;
    height: 124px;
    margin-bottom: 18px;
    margin-top: 5px;
    padding: 5px 15px;
    position: relative;
  }
`;
