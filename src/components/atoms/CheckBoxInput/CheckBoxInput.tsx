import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  label: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput: React.FC<IProps> = ({ id, label, value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type={"checkbox"} checked={value} onChange={onChange} id={id} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  margin: 5px 0;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 20px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 2px 5px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

export default CheckBoxInput;
