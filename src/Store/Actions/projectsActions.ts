export enum ProjectsActions {
  ADD_PROJECT = "add project",
  EDIT_PROJECT = "edit project",
  DELETE_PROJECT = "delete project",
  IMPORT_ALL_PROJECTS = "import all projects",
}

export interface Project {
  id: number | string;
  name: string;
  color: string;
}

interface IAddProject {
  type: ProjectsActions.ADD_PROJECT;
  payload: Project;
}
interface IEditProject {
  type: ProjectsActions.EDIT_PROJECT;
  payload: Project;
}

interface IDeleteTask {
  type: ProjectsActions.DELETE_PROJECT;
  payload: { id: number | string };
}

interface IImportAllProjects {
  type: ProjectsActions.IMPORT_ALL_PROJECTS;
  payload: Project[];
}

export type ProjectsActionTypes =
  | IAddProject
  | IDeleteTask
  | IEditProject
  | IImportAllProjects;

export const addProject = (project: Project): ProjectsActionTypes => {
  return {
    type: ProjectsActions.ADD_PROJECT,
    payload: project,
  };
};

export const editProject = (project: Project): ProjectsActionTypes => {
  return {
    type: ProjectsActions.EDIT_PROJECT,
    payload: project,
  };
};

export const removeProject = (id: number | string): ProjectsActionTypes => {
  return {
    type: ProjectsActions.DELETE_PROJECT,
    payload: { id },
  };
};

export const importProjects = (projects: Project[]): ProjectsActionTypes => {
  return {
    type: ProjectsActions.IMPORT_ALL_PROJECTS,
    payload: projects,
  };
};
