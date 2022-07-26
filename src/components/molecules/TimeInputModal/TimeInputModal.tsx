import React, { useEffect, useState } from "react";
import Modal from "components/atoms/Modal/Modal";
import Button from "components/atoms/Button/Button";
import styled from "styled-components";
import CarouselTimeInput from "components/atoms/CarouselTimeInput/CarouselTimeInput";
import ReactDatePicker from "react-datepicker";

interface IProps {
  isOpen: boolean;
  isChoose: boolean;
  onClose: () => void;
  onChange: (date: Date) => void;
  onDelete: () => void;
  id: string;
  value: Date;
}

const TimeInputModal: React.FC<IProps> = ({
  isOpen,
  isChoose,
  onClose,
  id,
  onChange,
  onDelete,
  value,
}) => {
  const now = new Date();
  const valueMinute = value.getMinutes();
  const valueHoure = value.getHours();
  const [hour, setHour] = useState<number>(value.getHours());
  const [minut, setMinut] = useState<number>(value.getMinutes());

  const handleOnChange = (): void => {
    value.setHours(hour);
    value.setMinutes(minut);
    value.setSeconds(0);
    onChange(value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <DatePicker
        id={id}
        onChange={onChange}
        selected={value}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        showTimeSelectOnly
        customInput={
          <CarouselTimeInput
            minut={isChoose ? valueMinute : now.getMinutes()}
            hour={isChoose ? valueHoure : now.getHours()}
            setHour={setHour}
            setMinut={setMinut}
          />
        }
      />
      <ButtonWrapper>
        {isChoose && valueMinute === minut && valueHoure === hour ? (
          <Button secondary={true} onClick={onDelete}>
            Usuń
          </Button>
        ) : (
          <Button secondary={true} onClick={handleOnChange}>
            {isChoose ? "Edytuj" : "Dodaj"}
          </Button>
        )}

        <Button secondary={true} onClick={onClose}>
          Anuluj
        </Button>
      </ButtonWrapper>
    </Modal>
  );
};

const DatePicker = styled(ReactDatePicker)`
  width: 100%;
  min-width: 240px;
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid rgb(6, 99, 141);
  outline: none;

  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default TimeInputModal;
