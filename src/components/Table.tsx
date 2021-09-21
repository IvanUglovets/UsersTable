import React, { useState } from "react";
import "../index.css";
import MyModal from "../myModal/MyModal";
import ITodo from "../models/interfaces/ITodo";
import ItemUser from "./ItemUser";
import { Button } from "react-bootstrap";
import { Table as TableTodo, Row, Col } from "react-bootstrap";
import { SelectString } from "../models/enums/selectEnum";
import { useDispatch } from "react-redux";
import { DEFAULT_TABLE } from "../redux/types/users";
import {
  deleteAll,
  handleDeleteUser,
  sortByAlphaUser,
} from "../redux/actionCreators";

// import { deleteAll } from "../redux/actionCreators/deleteAll";
// import { handleDeleteUser } from "../redux/actionCreators/handleDeleteUser";
// import { sortByAlphaUser } from "../redux/actionCreators/sortByAlphaUser";

interface ITableProps {
  users: ITodo[];
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

const Table = ({ users }: ITableProps) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState<boolean>(false);

  const deleteAllUsers = () => {
    dispatch(deleteAll());
  };

  const handleDelete = (id: number): void => {
    dispatch(handleDeleteUser(id));
  };

  const sortByDefault = (): void => {
    const defaultTable = JSON.parse(localStorage.getItem("users")!);
    console.log(defaultTable);

    dispatch({ type: DEFAULT_TABLE, payload: { defaultTable } });
  };

  const sortByAlpha = (): void => {
    dispatch(sortByAlphaUser());
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
              {users.map((item: ITodo) => {
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
            users={users}
          />
        </Col>
      </div>
    </Row>
  );
};

export default Table;
