import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Meta from "./Meta";

const HeaderWrap = styled.div`
  .header {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;

    h1 {
      font-size: 40px;
    }
  }

  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    .nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;

      .nav-link {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;

        &:hover {
          background-color: #ddd;
          color: black;
        }
      }
      .nav-link.right {
        margin-left: auto;
      }
      .nav-link.active {
        background-color: #666;
        color: white;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Meta />
      <header className="header">
        <h1>My Website</h1>
        <p>
          A <b>responsive</b> website created by me.
        </p>
      </header>
      <div className="navbar">
        <nav className="nav">
          <NavLink className="nav-link active" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/Link1">
            Link1
          </NavLink>
          <NavLink className="nav-link" to="/Link2">
            Link2
          </NavLink>
          <NavLink className="nav-link right" to="/Link3">
            Link3
          </NavLink>
        </nav>
      </div>
    </HeaderWrap>
  );
};

export default Header;
