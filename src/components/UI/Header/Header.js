import React from "react";
import "./Header.css";

const Header = (props) => (
  <div>
    <header className="Header">
      <h1>Ingredients</h1>
    </header>
    <div className="Content">{props.children}</div>
  </div>
);

export default Header;
