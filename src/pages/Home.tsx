import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper__home">
        <Link className="home__link" to="/table">
          Go to users table
        </Link>
      </div>
    </>
  );
};

export default Home;
