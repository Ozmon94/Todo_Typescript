import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import DateInput from "components/atoms/DateInput/DateInput";
import LinkButton from "components/atoms/LinkButton/LinkButton";
import { FaPen, FaPlus } from "react-icons/fa";
import TimeInputModal from "components/molecules/TimeInputModal/TimeInputModal";

interface IProps {
  setDeadlineDate: Dispatch<SetStateAction<Date>>;
  deadlineDate: Date;
}

const DateChoose: React.FC<IProps> = ({ setDeadlineDate, deadlineDate }) => {
  const [isTimeOpen, setIsTimeOpen] = useState<boolean>(false);
  const [isChoose, setIsChoose] = useState<boolean>(false);

  const handleChangeDate = (date: Date) => {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    setDeadlineDate(date);
  };

  const handleChangeTime = (date: Date) => {
    setIsChoose(true);
    setDeadlineDate(date);
  };
  const handleOnClose = (): void => {
    setIsTimeOpen(false);
  };

  const handleOnDelete = () => {
    setIsChoose(false);
    setIsTimeOpen(false);
  };

  return (
    <Wrapper>
      <>
        <DateInput
          id={"deadline-date"}
          isChoose={isChoose}
          label={"Data końcowa"}
          value={deadlineDate}
          onChange={handleChangeDate}
        />
        <LinkButton
          onClick={() => setIsTimeOpen((prev) => !prev)}
          icon={isChoose ? FaPen : FaPlus}
        >
          {isChoose ? "Edytuj godzinę" : "Dodaj godzinę"}
        </LinkButton>

        <TimeInputModal
          isOpen={isTimeOpen}
          isChoose={isChoose}
          onClose={handleOnClose}
          onChange={handleChangeTime}
          onDelete={handleOnDelete}
          id={"deadline-time"}
          value={deadlineDate}
        />
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DateChoose;
