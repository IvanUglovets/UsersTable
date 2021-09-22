import {
  IUserState,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER,
  DELETE_USER,
  DELETE_ALL_USERS,
  SORT_BY_ALPHA,
  DEFAULT_TABLE,
  IUserAction,
} from "../types/users";

const initialState: IUserState = {
  users: [],
  errors: null,
  loading: false,
};

export const userReducer = (
  state: IUserState = initialState,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { loading: true, errors: null, users: [] };
    case FETCH_USERS_SUCCESS:
      return { loading: false, errors: null, users: action.payload!.users! };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        errors: action.payload!.errors!,
        users: state.users,
      };
    case ADD_USER:
      return {
        users: [
          ...state.users,
          {
            id: Math.floor(Math.random() * (101 - 12) + 12),
            name: action.payload!.userName + " " + action.payload!.userLastName,
          },
        ],
        errors: null,
        loading: false,
      };

    case DELETE_USER:
      return {
        users: [...state.users].filter(
          (user) => user.id !== action.payload!.id
        ),
      };

    case DELETE_ALL_USERS:
      return {
        users: [],
      };

    case SORT_BY_ALPHA:
      return {
        users: [...state.users].sort((a, b) => a.name.localeCompare(b.name)),
      };

    case DEFAULT_TABLE:
      return {
        users: JSON.parse(localStorage.getItem("arrayUsers")!),
      };
    default:
      return state;
  }
};
