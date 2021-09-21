import { ADD_USER } from "./../types/users";

const addUserToTable = (userName: string, userLastName: string) => {
  return {
    type: ADD_USER,
    payload: {
      userName,
      userLastName,
    },
  };
};

export default addUserToTable;
