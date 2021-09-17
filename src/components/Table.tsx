import React from "react";
import "../index.css";
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
    padding: "25px 10px 0 10px",
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
  const handleDelete = (id: number): void => {
    let newUsersArray = todo.filter((todo) => todo.id !== id);
    setTodo(newUsersArray);
  };

  const sortById = (): void => {
    const newUsersArray: ITodo[] = [...todo].sort((a, b) => b.id - a.id);
    setTodo(newUsersArray);
  };

  const defultTodos = (): void => {
    const newUsersArray: ITodo[] = [...todo].sort((a, b) => a.id - b.id);
    setTodo(newUsersArray);
  };

  const sortByAlpha = (): void => {
    const newUsersArray: ITodo[] = [...todo].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setTodo(newUsersArray);
  };

  return (
    <Row>
      <div style={styles.wrapper} className="wrapper">
        <Col sm={10}>
          <TableTodo>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
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
              onClick={defultTodos}
              className="btn__first"
            >
              {SelectString.DEFAULT}
            </Button>

            <Button style={styles.btn} variant="primary" onClick={sortByAlpha}>
              {SelectString.SORT_BY_ALPHA}
            </Button>

            <Button style={styles.btn} variant="primary" onClick={sortById}>
              {SelectString.SORT_BY_ID}
            </Button>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Table;
