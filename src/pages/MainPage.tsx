import React, { useEffect } from "react";
import "../index.css";
import Header from "../components/Header";
import Table from "../components/Table";
import { Container, Spinner } from "react-bootstrap";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/actionCreators";

const MainPage: React.FC = () => {
  const { loading, users, errors } = useTypeSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  localStorage.setItem("users", JSON.stringify(users));

  if (errors) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <div className="wrapper__spinner">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table users={users} />
        )}
      </Container>
    </>
  );
};

export default MainPage;
