import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "../Context";

export default function Header() {
  const { cart } = useContext(Cart);
  return (
    <div>
      <ul className="nav">
        <li className="prod">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="prod">
          <NavLink to="/cart"> Cart ({cart.length})</NavLink>
        </li>
      </ul>
    </div>
  );
}
