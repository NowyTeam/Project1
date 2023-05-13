import React from 'react';
import scss from './DropDown.module.scss';
import { NavLink } from "react-router-dom";

const DropDown = () => {
  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px rgb(182, 180, 180)" : "none"
    };
  };

  return (
    <div className={`${scss.flex} ${scss.flex_col} ${scss.DropDownMenu}`}>
      <ul className={`${scss.flex} ${scss.flex_col} ${scss.gap_4}`}>
          <NavLink to="/" className={`${scss.link}`} style={activeLink}>
            Home
          </NavLink>
          <NavLink to="/author" className={`${scss.link}`} style={activeLink}>
            About
          </NavLink>
          <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
            Contact
          </NavLink>
          <NavLink
            to="https://github.com/NowyTeam"
            className={`${scss.gitlink} ${scss.activeLink}`}>
            GitHub
          </NavLink>
      </ul>
    </div>
    
  );
};

export default DropDown;