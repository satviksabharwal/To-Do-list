import React from "react";
import "../index.css";

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  </div>
);
Header.defaultProps = {
  title: "Indecision",
};

export default Header;
