import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ITodo from "../models/interfaces/ITodo";

interface IMyModalProps {
  show: boolean;
  onHide: () => void;
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const MyModal = ({ show, onHide, todo, setTodo }: IMyModalProps) => {
  const [user, setUser] = useState("");

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && user) {
      setTodo((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * (101 - 12) + 12),
          name: user,
        },
      ]);
      onHide();
    }
  };

  const addUser = (): void => {
    if (user) {
      setTodo((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * (101 - 12) + 12),
          name: user,
        },
      ]);
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
        <h4>Name:</h4>
        <div>
          <input
            type="text"
            value={user}
            onChange={handleUser}
            onKeyPress={handleKeyPress}
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
