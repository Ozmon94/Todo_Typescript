import {
  ProjectsActions,
  Project,
  ProjectsActionTypes,
} from "Store/Actions/projectsActions";

const initialState: Project[] = [];
export const projectsReducer = (
  state: Project[] = initialState,
  action: ProjectsActionTypes
) => {
  switch (action.type) {
    case ProjectsActions.ADD_PROJECT:
      return [...state, action.payload];
    case ProjectsActions.EDIT_PROJECT:
      return state.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    case ProjectsActions.DELETE_PROJECT:
      return state.filter((project) => project.id !== action.payload.id);
    case ProjectsActions.IMPORT_ALL_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
