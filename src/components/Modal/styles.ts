import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4d4d4d8c;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 100%;
    min-height: 568px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 600px;
    background-color: var(--white);

    .header-modal {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .icon-container {
        padding: 15px;

        svg {
          font-size: 30px;
          cursor: pointer;
          color: var(--black);
        }
      }
    }
  }

  @media (min-width: 600px) {
    .modal {
      border-radius: 8px;
    }
  }

  @media (min-width: 1200px) {
    .modal {
      max-width: 900px;
    }
  }
`;
