import React, { ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  type?: "submit" | "button";
  icon?: IconType;
  onClick: () => void;
}

const LinkButton: React.FC<IProps> = ({ icon, type, children, onClick }) => {
  const [buttonValue, setButtonValue] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (icon && children) {
      setButtonValue(
        <>
          {React.createElement(icon)}
          {children}{" "}
        </>
      );
    } else {
      setButtonValue(children);
    }
  }, [icon, children]);
  return (
    <StyledIconButton type={type} onClick={onClick}>
      {buttonValue}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  margin-top: 5px;
  background: transparent;
  color: #85d3fd;
  border: none;
  outline: none;
  padding: 5px 10px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: inherit;
    margin-right: 10px;
    height: 16px;
    width: 16px;
  }
`;

export default LinkButton;
