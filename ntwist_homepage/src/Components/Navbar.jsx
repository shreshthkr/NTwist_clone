import React from "react";
import styled from "styled-components";
import ntwistlight from "../Assets/ntwistlight.png";
import { BiSolidDownArrow } from "react-icons/bi";
const Navbar = () => {
  return (
    <NAVBAR>
      <div className="navbar">
        <div className="logo">
          <img src={ntwistlight} alt="ntwistlight-logo" />
        </div>
        <div className="menu-list">
          <ul>
            <li>Home</li>
            <li>Industries <span><BiSolidDownArrow fontSize={"12px"}  /></span> </li>
            <li>AI Software</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR = styled.div`
width:100%;
height:60px;
background:transparent;
position:fixed;

.navbar{
    width:96%;
    height:60px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
 }
.logo{
   width: 11%;
   height: 100%;
   display:flex;
   align-items:center;
}
.logo>img{
    width: 100%;
    height: 85%;
}
.menu-list{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.menu-list>ul{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu-list>ul>li{
    list-style: none;
    color: #ffff;
    font-size: 16px;
    font-weight: 600;
    font-family:  Inter,sans-serif;
    letter-spacing: 1px;
}
.menu-list>ul>li:hover{
    text-decoration: underline;
    cursor: pointer;
}
`
