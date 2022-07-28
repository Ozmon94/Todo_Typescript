import React, { useEffect } from "react";
import styled from "styled-components";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import AddTask from "./Pages/AddTask/AddTask";
import Done from "./Pages/Done/Done";
import TaskInfo from "Pages/TaskInfo/TaksInfo";
import { useDatabase } from "hooks/useDatabase";
import { useDispatch } from "react-redux";
import { DatabaseManagerEventName } from "helpers/IndexedDB/indexedDB";
import {
  importTodoTasks,
  TodoActionTypes,
  TodoTask,
} from "Store/Actions/todoActions";
import {
  DoneActionTypes,
  DoneTask,
  importDoneTasks,
} from "Store/Actions/doneActions";
import {
  importProjects,
  Project,
  ProjectsActionTypes,
} from "Store/Actions/projectsActions";
import AddProjects from "Pages/AddProjects/AddProjects";
import ProjectsList from "Pages/ProjectsList/ProjectsList";
import { log } from "util";

const App: React.FC = () => {
  const database = useDatabase();
  const dispatch = useDispatch();

  const databaseLoader = (): void => {
    database.getAllObjects<(result: TodoTask[]) => TodoActionTypes>(
      "todo",
      (tasks) => dispatch(importTodoTasks(tasks))
    );
    database.getAllObjects<(result: DoneTask[]) => DoneActionTypes>(
      "done",
      (tasks) => dispatch(importDoneTasks(tasks))
    );
    database.getAllObjects<(result: Project[]) => ProjectsActionTypes>(
      "projects",
      (projects) => dispatch(importProjects(projects))
    );
  };

  useEffect(() => {
    window.addEventListener(DatabaseManagerEventName, () => databaseLoader());
  }, []);
  return (
    <Wrapper>
      <HashRouter>
        <Navigation />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/add-project" element={<AddProjects />} />
            <Route path="/done" element={<Done />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/:id" element={<TaskInfo />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </ContentWrapper>
      </HashRouter>
    </Wrapper>
  );
};

const ContentWrapper = styled.section`
  margin: 10px auto;
  max-width: 1024px;
  height: 100%;
`;
const Wrapper = styled.div`
  height: calc(100vh - 80px);
`;

export default App;
