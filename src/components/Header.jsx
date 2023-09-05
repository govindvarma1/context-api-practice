import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="nav">
        <li className="prod">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="prod">
          <NavLink to="/cart"> Cart</NavLink>
        </li>
      </ul>
    </div>
  );
}
