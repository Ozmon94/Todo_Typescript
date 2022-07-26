import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { doneReducer } from "./doneReducer";

export const reducers = combineReducers({
  todo: todoReducer,
  done: doneReducer,
});

export type RootState = ReturnType<typeof reducers>;
