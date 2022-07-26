import React, { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  label: string;
  type?: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string | number;
  isTextArea?: boolean;
}

const FormInput: React.FC<IProps> = ({
  id,
  label,
  type = "text",
  onChange,
  value,
  isTextArea,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleCheckHeight = () => {
    if (textAreaRef?.current) {
      textAreaRef.current.style.height = "inherit";
      textAreaRef.current.style.height = `${
        textAreaRef.current.scrollHeight + 16
      }px`;
    }
  };
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <TextArea
          onChange={onChange}
          id={id}
          value={value}
          onKeyDown={handleCheckHeight}
          ref={textAreaRef}
        ></TextArea>
      ) : (
        <Input type={type} onChange={onChange} id={id} value={value} />
      )}
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

const Input = styled.input`
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
const TextArea = styled.textarea`
  height: inherit;
  width: 100%;
  min-width: 240px;
  resize: vertical;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 2px 5px;
  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;
export default FormInput;
