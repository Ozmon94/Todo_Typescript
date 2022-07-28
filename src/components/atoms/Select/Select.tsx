import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Option {
  id: number | string;
  name: string;
}

interface IProps {
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: Option[];
}

const Select: React.FC<IProps> = ({ id, label, onChange, value, options }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledSelect onChange={onChange}>
        <option value={""}>Wybierz ...</option>
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
  margin: 5px 0;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
`;

const StyledSelect = styled.select`
  width: 100%;
  min-width: 240px;
  padding: 2px 5px;
  border-radius: 5px;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;
export default Select;
