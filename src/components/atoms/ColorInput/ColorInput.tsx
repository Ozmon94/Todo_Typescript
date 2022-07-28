import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface ILabel {
  color: string;
}

const ColorInput: React.FC<IProps> = ({ id, label, onChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <ColorInputWrapper>
        <Input id={id} type={"color"} onChange={onChange} value={value} />
        <ColorNameLabel color={value} htmlFor={id}>
          {value}
        </ColorNameLabel>
      </ColorInputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
  margin: 5px 0;
`;
const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
`;

const ColorNameLabel = styled.label<ILabel>`
  color: ${(props) => props.color};
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;

  &::-webkit-color-swatch {
    border-radius: 5px;
    border: none;
  }
`;

export default ColorInput;
