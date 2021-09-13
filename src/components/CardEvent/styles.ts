import styled from "styled-components";

export const Container = styled.div`
  height: 148px;
  width: 97%;
  max-width: 398px;
  color: var(--white);
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  margin: 5px 15px;

  .card-header {
    display: flex;

    .container-title {
      width: 70%;

      h3 {
        font-size: 20px;
        font-weight: bold;
        padding-left: 34px;
        padding-right: 10px;
      }
    }
    .container-date {
      width: 30%;

      p {
        margin-top: 3px;
        font-size: 17px;
        font-weight: bold;
      }
    }
  }
  .card-details {
    display: flex;

    .container-category {
      width: 70%;

      p {
        font-size: 15px;
        text-indent: 34px;
      }
    }
    .container-progress {
      width: 30%;

      p {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 500px;
    margin: 20px;

    .card-header {
      .container-title {
        h3 {
          font-size: 30px;
        }
      }
      .container-date {
        p {
          font-size: 20px;
          margin-top: 10px;
        }
      }
    }
    .card-details {
      .container-category {
        p {
          font-size: 17px;
        }
      }
      .container-progress {
        p {
          font-size: 17px;
        }
      }
    }
  }
`;
