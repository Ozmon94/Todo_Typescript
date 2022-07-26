import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";

interface IProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

interface WrapperProps {
  isOpen: boolean;
}
const Modal: React.FC<IProps> = ({ children, onClose, isOpen }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const handleCloseOnOutsideClick = (e: Event) => {
    if (e.target === wrapper.current) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseOnOutsideClick);
    return () => {
      document.removeEventListener("click", handleCloseOnOutsideClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <Wrapper isOpen={isOpen} ref={wrapper}>
      <ContentWrapper>
        <CloseButton type={"button"} onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <Content>{children}</Content>
      </ContentWrapper>
    </Wrapper>,
    document.body
  );
};

const Wrapper = styled.div<WrapperProps>`
  z-index: 1;
  position: fixed;
  inset: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
`;

const ContentWrapper = styled.div`
  height: min-content;
  background-color: white;
  padding: 16px 32px;
  position: relative;
  border-radius: 10px;
`;

const Content = styled.div`
  min-width: 280px;
  height: min-content;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;
export default Modal;
