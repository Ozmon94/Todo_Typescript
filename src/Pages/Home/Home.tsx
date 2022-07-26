import React from "react";
import { useDispatch } from "react-redux";
import TaskList from "components/molecules/TasksList/TaskList";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <TaskList />
    </div>
  );
};

export default Home;
