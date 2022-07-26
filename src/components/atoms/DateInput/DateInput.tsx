import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  id: string;
  label: string;
  value: Date;
  isChoose: boolean;
  onChange: (date: Date) => void;
}

const DateInput: React.FC<IProps> = ({
  id,
  label,
  value,
  onChange,
  isChoose,
}) => {
  const [format, setFormat] = useState("dd-MM-yyyy");
  const hour = value.getHours();
  const minute = value.getMinutes();

  useEffect(() => {
    if (isChoose) {
      setFormat("dd-MM-yyyy HH:mm");
    } else {
      setFormat("dd-MM-yyyy");
    }
  }, [isChoose]);

  return (
    <Wrapper>
      <Label htmlFor={id}> {label}</Label>
      <DatePicker onChange={onChange} selected={value} dateFormat={format} />
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

const DatePicker = styled(ReactDatePicker)`
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

export default DateInput;
