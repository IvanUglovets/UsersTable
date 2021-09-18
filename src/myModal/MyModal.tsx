import React, { useState } from "react";
import "../index.css";
import { Modal, Button } from "react-bootstrap";
import ITodo from "../models/interfaces/ITodo";

interface IMyModalProps {
  show: boolean;
  onHide: () => void;
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const MyModal = ({ show, onHide, todo, setTodo }: IMyModalProps) => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleUserLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserLastName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && userName && userLastName) {
      setTodo((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * (101 - 12) + 12),
          name: userName + " " + userLastName,
        },
      ]);
      setUserName("");
      setUserLastName("");
      onHide();
    }
  };

  const addUser = (): void => {
    if (userName && userLastName) {
      setTodo((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * (101 - 12) + 12),
          name: userName + " " + userLastName,
        },
      ]);
      setUserName("");
      setUserLastName("");
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adding a user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Name and Surname:</h4>
        <div>
          <input
            className="input__user"
            type="text"
            value={userName}
            onChange={handleUserName}
            onKeyPress={handleKeyPress}
            placeholder="Name:"
          />
          <input
            className="input__last"
            type="text"
            value={userLastName}
            onChange={handleUserLastName}
            onKeyPress={handleKeyPress}
            placeholder="Surname:"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addUser}>Add</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
