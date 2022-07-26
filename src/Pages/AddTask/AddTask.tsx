import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "components/atoms/FormInput/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "components/atoms/Button/Button";
import CheckBoxInput from "components/atoms/CheckBoxInput/CheckBoxInput";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoTask, editTodoTask, TodoTask } from "Store/Actions/todoActions";
import { useDatabase } from "hooks/useDatabase";

import DateChoose from "components/molecules/DateChoose/DateChoose";

const AddTask: React.FC = () => {
  const editState = useLocation().state as Partial<TodoTask>;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const database = useDatabase();
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);

  const [taskTitle, setTaskTitle] = useState<string>(editState?.title ?? "");
  const [taskDescription, setTaskDescription] = useState<string>(
    editState?.description ?? ""
  );
  const [isDeadlineDate, setIsDeadlineDate] = useState<boolean>(
    !!editState?.deadlineDate
  );
  const [deadlineDate, setDeadlineDate] = useState<Date>(
    editState?.deadlineDate ? new Date(editState.deadlineDate) : today
  );
  // const [isWithHour, setIsWithHour] = useState<boolean>(false);
  const buttonLabel = editState?.id ? "Edytuj zadanie" : "Dodaj zadanie";

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const newTask: TodoTask = {
      id: editState?.id ?? uuidv4(),
      title: taskTitle,
      description: taskDescription,
      dataCreation: editState?.dataCreation ?? Date.now(),
      deadlineDate: isDeadlineDate ? deadlineDate.getTime() : undefined,
      // withHour: false,
      // projectId: "",
    };

    if (editState?.id) {
      database.editObject("todo", newTask);
      dispatch(editTodoTask(newTask));
    } else {
      database.createObject("todo", newTask);
      dispatch(addTodoTask(newTask));
    }
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Dodaj zadanie</Title>
      <Form>
        <FormInput
          id={"title-task"}
          label={"Tytuł zadania"}
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
        <FormInput
          id={"description-task"}
          label={"Opis zadania"}
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          isTextArea={true}
        />
        <CheckBoxInput
          id={"deadline-check"}
          label={"Dodaj date końcową"}
          value={isDeadlineDate}
          onChange={(e) => setIsDeadlineDate(e.target.checked)}
        />
        {isDeadlineDate && (
          <DateChoose
            setDeadlineDate={setDeadlineDate}
            deadlineDate={deadlineDate}
          />
        )}

        <Button onClick={handleOnClick} type="button">
          {buttonLabel}
        </Button>
      </Form>
    </Wrapper>
  );
};

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
`;

export default AddTask;
