export enum TodoActions {
  ADD_TASK = "Add todo task",
  EDIT_TASK = "Edit todo task",
  REMOVE_TASK = "Remove todo task",
  IMPORT_TASKS = "Import todo tasks",
}

export interface TodoTask {
  id: number | string;
  title: string;
  description: string;
  dataCreation: number;
  deadlineDate?: number;
  // withHour?: boolean;
  // projectId?: string;
}

interface AddTask {
  type: TodoActions.ADD_TASK;
  payload: TodoTask;
}

interface EditTask {
  type: TodoActions.EDIT_TASK;
  payload: TodoTask;
}
interface RemoveTask {
  type: TodoActions.REMOVE_TASK;
  payload: { id: number | string };
}
interface ImportTasks {
  type: TodoActions.IMPORT_TASKS;
  payload: TodoTask[];
}

export type TodoActionTypes = AddTask | EditTask | RemoveTask | ImportTasks;

export const addTodoTask = (task: TodoTask): TodoActionTypes => {
  return {
    type: TodoActions.ADD_TASK,
    payload: task,
  };
};

export const removeTodoTask = (id: number | string): TodoActionTypes => {
  return {
    type: TodoActions.REMOVE_TASK,
    payload: { id },
  };
};

export const editTodoTask = (task: TodoTask): TodoActionTypes => {
  return {
    type: TodoActions.EDIT_TASK,
    payload: task,
  };
};

export const importTodoTasks = (tasks: TodoTask[]): TodoActionTypes => {
  return {
    type: TodoActions.IMPORT_TASKS,
    payload: tasks,
  };
};
