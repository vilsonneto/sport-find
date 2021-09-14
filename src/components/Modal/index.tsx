import { ReactNode } from "react";
import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";

interface IModalProps {
  children: ReactNode;
  closeModal: (arg: boolean) => void;
  inRight?: boolean;
}

export const Modal = ({
  children,
  closeModal,
  inRight = false,
}: IModalProps) => {
  return (
    <Container inRight={inRight}>
      <div className="modal">
        <div className="header-modal">
          <div className="icon-container">
            <IoMdClose onClick={() => closeModal(false)} />
          </div>
        </div>
        {children}
      </div>
    </Container>
  );
};
