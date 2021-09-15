import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Container, Row, Spinner } from "react-bootstrap";
import ITodo from "./models/ITodo/ITodo";
import Header from "./components/Header";
import Table from "./components/Table";

const App: React.FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      axios("https://jsonplaceholder.typicode.com/todos").then((response) =>
        setTodo(response.data)
      );
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Container>
      <Row>
        <Header />
        {isLoading ? (
          <div className="wrapper__spinner">
            {" "}
            <Spinner animation="border" />
          </div>
        ) : (
          <Table todo={todo} setTodo={setTodo} />
        )}
      </Row>
    </Container>
  );
};

export default App;
