import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import ITodo from "../models/interfaces/ITodo";
import {
  valueIsEditReducer,
  IValueAndIsEdit,
} from "../reduxFake/reducers/valueIsEditReducer";
import { Button } from "react-bootstrap";

interface IUserProps {
  item: ITodo;
  handleDelete: () => void;
}

const styles = {
  buttons: {
    display: "flex",
    justifyContent: "center",
  },
};

const ItemUser = ({ item, handleDelete }: IUserProps) => {
  const initialState: IValueAndIsEdit = {
    editValue: item.name,
    isEdit: false,
  };

  const [valueIsEdit, valueIsEditDispatch] = useReducer(
    valueIsEditReducer,
    initialState
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && valueIsEdit.editValue) {
      valueIsEditDispatch({
        type: "EDIT_VALUE",
        payload: valueIsEdit.editValue,
      });
      valueIsEditDispatch({ type: "IS_EDIT", payload: valueIsEdit.editValue });
    }
  };

  const handleSave = (): void => {
    if (valueIsEdit.editValue) {
      valueIsEditDispatch({
        type: "EDIT_VALUE",
        payload: valueIsEdit.editValue,
      });
      valueIsEditDispatch({ type: "IS_EDIT", payload: valueIsEdit.editValue });
    }
  };

  const handleChangeEdit = (): void => {
    valueIsEditDispatch({ type: "IS_EDIT", payload: valueIsEdit.editValue });
  };

  const handleChangeInputEdit = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    valueIsEditDispatch({ type: "EDIT_VALUE", payload: e.target.value });
  };

  return (
    <tr>
      <th scope="row">{item.id}</th>
      {valueIsEdit.isEdit ? (
        <td>
          <input
            className="input__edit_value"
            type="text"
            value={valueIsEdit.editValue}
            onChange={handleChangeInputEdit}
            onKeyPress={handleKeyPress}
          />
        </td>
      ) : (
        <td>{valueIsEdit.editValue}</td>
      )}
      <td style={styles.buttons}>
        {valueIsEdit.isEdit ? (
          <Button onClick={handleSave} className="save">
            <FontAwesomeIcon icon={faSave} />
          </Button>
        ) : (
          <Button onClick={handleChangeEdit} className="edit">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
        <Button onClick={handleDelete} className="delete">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default ItemUser;
