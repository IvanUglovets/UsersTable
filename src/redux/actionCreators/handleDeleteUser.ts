import { DELETE_USER } from "../types/users";

const handleDeleteUser = (id: number) => {
  return { type: DELETE_USER, payload: { id } };
};

export default handleDeleteUser;
