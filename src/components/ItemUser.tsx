import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import ITodo from "../models/ITodo/ITodo";
import { Button } from "react-bootstrap";

interface IUserProps {
  item: ITodo;
  handleDelete: () => void;
}

const ItemUser = ({ item, handleDelete }: IUserProps) => {
  const [editValue, setEditValue] = useState<string>(item.title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && editValue) {
      setEditValue(editValue);
      setIsEdit(false);
    }
  };

  const handleSave = (): void => {
    if (editValue) {
      setEditValue(editValue);
      setIsEdit(false);
    }
  };

  const handleChangeEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const handleChangeInputEdit = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEditValue(e.target.value);
  };

  return (
    <tr>
      <th scope="row">{item.id}</th>
      {isEdit ? (
        <td>
          <input
            type="text"
            value={editValue}
            onChange={handleChangeInputEdit}
            onKeyPress={handleKeyPress}
          />
        </td>
      ) : (
        <td>{editValue}</td>
      )}
      <td>
        {isEdit ? (
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
