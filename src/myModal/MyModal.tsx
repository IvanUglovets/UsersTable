import React from "react";
import { Modal, Button } from "react-bootstrap";
import ITodo from "../models/interfaces/ITodo";

interface IMyModalProps {
  show: boolean;
  onHide: () => void;
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const MyModal = ({ show, onHide, todo, setTodo }: IMyModalProps) => {
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
          <input type="text" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Add</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
