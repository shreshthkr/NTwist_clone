import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <NAVBAR>
      <div className="navbar">
        <div className="navbar-1">
          <div className="nav-logo">
            <FaGithub color={"#ffff"} fontSize={"35px"} cursor={"pointer"}  />
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                Product{" "}
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>
                Solution{" "}
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>
                Open Source{" "}
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="navbar-2">
          <div className="nav-search">
            <input type="text" placeholder="Search or jump to..." />
          </div>
          <div className="nav-sign">
            <p>Sign in</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1000;

  .navbar {
    width: 99%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-1 {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:30px;
  }
  .nav-logo{
    margin-left: 30px;
  }
  .nav-menu{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .nav-menu ul{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
  }
  .nav-menu ul li{
    list-style: none;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
  }
  .navbar-2 {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
  }
 
  .nav-search input{
    background-color:rgb(40,49,65) ;
    border:1px solid rgb(65,74,86);
    width: 325px;
    height: 30px;
    border-radius: 5px;
  }
  .nav-sign{
   width: 22%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
  }
  .nav-sign>p{
    color: #ffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    cursor: pointer;
  }
  .nav-sign>p+button{
     border: 1px solid #D0D7DE;
     width: 72px;
     height: 34px;
     border-radius: 5px;
     color: #ffff;
     cursor: pointer;
  }
`;
