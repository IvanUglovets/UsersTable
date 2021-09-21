import ITodo from "../../models/interfaces/ITodo";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const DELETE_ALL_USERS = "DELETE_ALL_USERS";
export const SORT_BY_ALPHA = "SORT_BY_ALPHA";
export const DEFAULT_TABLE = "DEFAULT_TABLE";

export interface IUserAction {
  type: string;
  payload?: {
    users?: ITodo[];
    userName?: string;
    userLastName?: string;
    errors?: string | null;
    id?: number;
    defaultTable?: ITodo[];
  };
}

export interface IUserState {
  users: ITodo[];
  errors?: string | null;
  loading?: boolean;
}

interface IFetchUsers {
  type: string;
}

interface IUsersSuccess {
  type: string;
  payload: ITodo[];
}

interface IUsersError {
  type: string;
  payload: string | null;
}

interface IUsersAdd {
  type: string;
  id: string;
  payload: {
    userName: string;
    lastName: string;
  };
}

export type UserAction =
  | IUsersSuccess
  | IUsersError
  | IFetchUsers
  | IUsersAdd
  | IUserAction;
