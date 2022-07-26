import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "Store/Reducers";
import Task from "components/molecules/Task/Task";
import styled from "styled-components";

const Done: React.FC = () => {
  const tasks = useSelector((store: RootState) => store.done);

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

export default Done;
