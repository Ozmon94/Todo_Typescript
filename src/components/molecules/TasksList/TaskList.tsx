import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { RootState } from "Store/Reducers";

const TaskList: React.FC = () => {
  const tasks = useSelector((store: RootState) => store.todo);

  return (
    <Wrapper>
      {tasks?.length > 0
        ? tasks.map((task) => <Task key={task.id} task={task} />)
        : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 10px;
`;

export default TaskList;
