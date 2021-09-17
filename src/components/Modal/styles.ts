import styled from "styled-components";

interface IModalStyledProps {
  inRight: boolean;
}

export const Container = styled.div<IModalStyledProps>`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4d4d4d8c;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: ${(props) => props.inRight && `flex-end`};
  z-index: 1;

  .modal {
    width: 100%;
    min-height: 568px;
    min-height: ${(props) => props.inRight && `100%`};
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

  @media (min-width: 360px) {
    .modal {
      width: ${(props) => props.inRight && `360px`};
      border-radius: ${(props) => props.inRight && `8px 0 0 8px`};
    }
  }

  @media (min-width: 600px) {
    .modal {
      border-radius: 8px;
      border-radius: ${(props) => props.inRight && `8px 0 0 8px`};
    }
  }

  @media (min-width: 1200px) {
    .modal {
      max-width: 900px;
    }
  }
`;
