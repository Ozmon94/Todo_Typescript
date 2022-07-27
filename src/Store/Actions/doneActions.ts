export enum DoneActions {
  ADD_TASK = "Add done task",
  REMOVE_TASK = "Remove done task",
  IMPORT_TASKS = "Import done tasks",
}

export interface DoneTask {
  id: number | string;
  title: string;
  description: string;
  dateDone: number;
  deadlineDate?: number;
  withHour?: boolean;
  projectId?: string;
}

interface AddDoneTask {
  type: DoneActions.ADD_TASK;
  payload: DoneTask;
}

interface RemoveDoneTask {
  type: DoneActions.REMOVE_TASK;
  payload: { id: number };
}
interface ImportDoneTasks {
  type: DoneActions.IMPORT_TASKS;
  payload: DoneTask[];
}

export type DoneActionTypes = AddDoneTask | RemoveDoneTask | ImportDoneTasks;

export const addDoneTask = (task: DoneTask): DoneActionTypes => {
  return {
    type: DoneActions.ADD_TASK,
    payload: task,
  };
};

export const removeDoneTask = (id: number): DoneActionTypes => {
  return {
    type: DoneActions.REMOVE_TASK,
    payload: { id },
  };
};

export const importDoneTasks = (tasks: DoneTask[]): DoneActionTypes => {
  return {
    type: DoneActions.IMPORT_TASKS,
    payload: tasks,
  };
};
