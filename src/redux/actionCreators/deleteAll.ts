import { DELETE_ALL_USERS } from "../types/users";

const deleteAll = () => {
  return {
    type: DELETE_ALL_USERS,
  };
};

export default deleteAll;
