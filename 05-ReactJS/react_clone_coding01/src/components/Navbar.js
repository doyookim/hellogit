import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;

  div {
    width: 100%;
    overflow: hidden;
    color: #000 !important;
    background-color: #fff !important;
    padding: 8px 16px !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    width: auto;
    border: none;
    justify-content: flex-start;
    outline: 0;
    letter-spacing: 4px;

    a {
      padding: 8px 16px;
      width: auto;
      outline: 0;
      border: none;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      background-color: inherit;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        color: #000;
        background-color: #ccc;
      }
    }

    .right_nav {
      padding: 0 !important;
      border: none;
      float: right;
      box-shadow: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <NavLink to="/">Gourmet au Catering</NavLink>
        <div className="right_nav">
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Menu">Menu</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
