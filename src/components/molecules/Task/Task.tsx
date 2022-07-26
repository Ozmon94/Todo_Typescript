import React, { useEffect, useState } from "react";
import IconButton from "components/atoms/IconButton/IconButton";
import { removeTodoTask, TodoTask } from "Store/Actions/todoActions";
import { addDoneTask, DoneTask } from "Store/Actions/doneActions";
import styled from "styled-components";
import { FaTimes, FaCheck, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pl } from "date-fns/locale";
import { format, isBefore } from "date-fns";
import { useDatabase } from "hooks/useDatabase";

interface IProps {
  task: TodoTask | DoneTask;
}

interface DeadlineParagraph {
  isLate: boolean;
}

interface IWrapper {
  isDone: boolean;
}

const Task: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const database = useDatabase();
  const [isLate, setIsLate] = useState<boolean>(false);
  const isDone = "dateDone" in task;

  const handleOnEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate("/add-task", { state: task });
  };
  const handleOnDone = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const changeTask: DoneTask = {
      ...task,
      dateDone: Date.now(),
    };
    database.createObject("done", changeTask);
    dispatch(addDoneTask(changeTask));
    database.deleteObject("todo", changeTask.id);
    dispatch(removeTodoTask(changeTask.id));
  };
  const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    database.deleteObject("todo", task.id);
    dispatch(removeTodoTask(task.id));
  };

  const getLeftTime = (endTime: number): string => {
    return format(endTime, "dd MMM yyyy", { locale: pl });
  };
  const doneDate = (doneDate: number): string => {
    return format(doneDate, "dd MMM yyyy", { locale: pl });
  };

  useEffect(() => {
    if (task.deadlineDate) {
      getLeftTime(task.deadlineDate);
      setIsLate(isBefore(task.deadlineDate, Date.now()));
    }
  }, [task.deadlineDate]);
  return (
    <Wrapper isDone={isDone}>
      <TitleWrapper>
        <TaskTitle>{task.title}</TaskTitle>
        {"dateDone" in task ? (
          <IconButton
            onClick={handleOnDelete}
            icon={FaTimes}
            position={"absolute"}
            top={5}
            right={5}
          />
        ) : (
          <>
            {" "}
            <IconButton
              onClick={handleOnEdit}
              icon={FaPen}
              position={"absolute"}
              top={5}
              right={5}
            />
            <IconButton
              onClick={handleOnDone}
              icon={FaCheck}
              position={"absolute"}
              top={5}
              right={35}
            />
          </>
        )}
      </TitleWrapper>

      <DescriptionWrapper>
        <DescriptionLabel>Opis:</DescriptionLabel>
        <Description>{task.description}</Description>
      </DescriptionWrapper>
      {isDone ? <FinishDate>{doneDate(task.dateDone)}</FinishDate> : null}

      {task?.deadlineDate && !isDone ? (
        <DeadlineDate isLate={isLate}>
          {getLeftTime(task.deadlineDate)}
        </DeadlineDate>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div<IWrapper>`
  padding: 10px;
  background-color: ${(props) =>
    props.isDone ? "rgba(63,63,63,0.63)" : "rgba(0, 0, 0, 0.2)"};
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  position: relative;
  padding: 5px 0;
`;

const TaskTitle = styled.h2`
  font-size: 18px;
  margin-right: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeadlineDate = styled.p<DeadlineParagraph>`
  display: block;
  padding-top: 10px;
  font-size: 14px;
  text-align: right;
  color: ${(props) => (props.isLate ? "red" : "white")};
`;

const FinishDate = styled.p`
  display: block;
  padding-top: 10px;
  font-size: 14px;
  text-align: right;
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  position: relative;
  padding-top: 20px;
`;

const DescriptionLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
`;

const Description = styled.p``;

export default Task;
