import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { doneReducer } from "./doneReducer";
import { projectsReducer } from "Store/Reducers/projectsReducer";

export const reducers = combineReducers({
  todo: todoReducer,
  done: doneReducer,
  projects: projectsReducer,
});

export type RootState = ReturnType<typeof reducers>;
