import React from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Header: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Table Users</h1>
    </div>
  );
};

export default Header;
