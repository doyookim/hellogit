import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;

  div {
    letter-spacing: 4px;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    padding: 8px 16px !important;
    color: #000 !important;
    background-color: #fff !important;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;

    &:before {
      content: "";
      display: table;
      clear: both;
    }

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    a {
      vertical-align: middle;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      background-color: inherit;
      text-align: center;
      cursor: pointer;
      padding: 8px 16px;
      float: left;
      width: auto;
      border: none;
      display: block;
      outline: 0;
      white-space: normal;

      &:hover {
        color: #000 !important;
        background-color: #ccc !important;
      }

      &.left {
        margin-right: auto;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <NavLink to="/" className="left">
          <b>BR</b> Architects
        </NavLink>

        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
    </NavContainer>
  );
};

export default Navbar;
