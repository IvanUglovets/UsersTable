import React, { useState } from "react";
import "../index.css";
import MyModal from "../myModal/MyModal";
import ITodo from "../models/interfaces/ITodo";
import ItemUser from "./ItemUser";
import { Button } from "react-bootstrap";
import { Table as TableTodo, Row, Col } from "react-bootstrap";
import { SelectString } from "../models/enums/selectEnum";

interface ITableProps {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectWrapper: {
    padding: "45px 10px 0 10px",
  },
  btn: {
    width: "100%",
    maxWidth: "170px",
    display: "block",
    marginBottom: "10px",
    padding: "0",
  },
  label: {
    display: "block",
  },
};

const Table = ({ todo, setTodo }: ITableProps) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const deleteAllUsers = () => {
    setTodo([]);
  };

  const handleDelete = (id: number): void => {
    let newUsersArray = todo.filter((todo) => todo.id !== id);
    setTodo(newUsersArray);
  };

  const sortByDefault = (): void => {
    const defaultUsersArray: ITodo[] = JSON.parse(
      localStorage.getItem("response.data")!
    );
    setTodo(defaultUsersArray);
  };

  const sortByAlpha = (): void => {
    const newUsersArray: ITodo[] = [...todo].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setTodo(newUsersArray);
  };

  return (
    <Row>
      <div style={styles.wrapper} className="wrapper">
        <Col sm={9}>
          <TableTodo>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item: ITodo) => {
                return (
                  <ItemUser
                    item={item}
                    key={item.id}
                    handleDelete={() => handleDelete(item.id)}
                  />
                );
              })}
            </tbody>
          </TableTodo>
        </Col>
        <Col sm={2}>
          <div style={styles.selectWrapper} className="select__wrapper">
            <Button
              style={styles.btn}
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              Добавить пользователя
            </Button>

            <Button style={styles.btn} onClick={deleteAllUsers}>
              Удалить всех
            </Button>

            <Button
              style={styles.btn}
              variant="primary"
              onClick={sortByDefault}
            >
              {SelectString.DEFAULT}
            </Button>

            <Button style={styles.btn} variant="primary" onClick={sortByAlpha}>
              {SelectString.SORT_BY_ALPHA}
            </Button>
          </div>

          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            todo={todo}
            setTodo={setTodo}
          />
        </Col>
      </div>
    </Row>
  );
};

export default Table;
