import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper pink darken-2 px1">
        <a href="#" className="brand-logo">React(TS) - TODOLIST</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Список дел</a></li>
          <li><a href="/">Обо мне</a></li>
        </ul>
      </div>
    </nav>
  );
};