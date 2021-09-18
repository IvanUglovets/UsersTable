import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import Header from "../components/Header";
import Table from "../components/Table";
import ITodo from "../models/interfaces/ITodo";
import { Container, Spinner } from "react-bootstrap";

const MainPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((response) => {
      localStorage.setItem("response.data", JSON.stringify(response.data));
      setTodo(response.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <div className="wrapper__spinner">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table todo={todo} setTodo={setTodo} />
        )}
      </Container>
    </>
  );
};

export default MainPage;
