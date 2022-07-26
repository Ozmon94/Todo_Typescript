import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: IconType;
  position?: "absolute" | "relative";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface ButtonProps {
  position?: "absolute" | "relative";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  position,
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {React.createElement(icon)}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<ButtonProps>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) => {
    return `${props?.position ? `position: ${props.position};` : ""} ${
      props?.top ? `top: ${props.top}px;` : ""
    }
    ${props?.bottom ? `bottom: ${props.bottom}px;` : ""}
    ${props?.right ? `right: ${props.right}px;` : ""}
    ${props?.left ? `left: ${props.left}px;` : ""}`;
  }}

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export default IconButton;
