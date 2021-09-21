import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
