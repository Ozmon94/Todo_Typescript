import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <StyledIconButton type="button" onClick={onClick}>
      {React.createElement(icon)}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export default IconButton;
