import { ReactNode } from "react";
import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";

interface IModalProps {
  children: ReactNode;
  closeModal: (arg: boolean) => void;
}

export const Modal = ({ children, closeModal }: IModalProps) => {
  return (
    <Container>
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
