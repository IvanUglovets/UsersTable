import React from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  title: {
    padding: " 10px 0",
    fontSize: "40px",
    color: "white",
  },
};

const Header: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Users table</h1>
    </div>
  );
};

export default Header;
