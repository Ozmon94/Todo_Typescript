import { DoneActionTypes, DoneTask, DoneActions } from "../Actions/doneActions";

const initialState: DoneTask[] = [];

export const doneReducer = (
  state = initialState,
  action: DoneActionTypes
): DoneTask[] => {
  switch (action.type) {
    case DoneActions.ADD_TASK:
      return [...state, action.payload];
    case DoneActions.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case DoneActions.IMPORT_TASKS:
      return action.payload;
    default:
      return state;
  }
};
