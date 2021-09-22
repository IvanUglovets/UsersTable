import {
  IUserAction,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "../types/users";
import { Dispatch } from "redux";
import axios from "axios";

const fetchUser = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      localStorage.setItem("arrayUsers", JSON.stringify(response.data));
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: { users: response.data },
      });
    } catch (err) {
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: { errors: "Произошла ошибка при загрзке пользователей" },
      });
    }
  };
};

export default fetchUser;
