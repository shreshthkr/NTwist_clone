import React, { useState } from "react";
import styled from "styled-components";
import ntwistlight from "../Assets/ntwistlight.png";
import ntwistdark from "../Assets/ntwistdark.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, }  from "@chakra-ui/react";
const Navbar = () => {

const [navbar, setNavbar] = useState(false);
const [isIndustryListVisible, setIndustryListVisible] = useState(false);
const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = React.useRef();
  const toggleIndustryListVisibility = () => {
    setIndustryListVisible(!isIndustryListVisible);
    
  };

  const delayVisibility = () => {
    setTimeout(() => {
      setIndustryListVisible(false);
    }, 5000);
  };

const changeBackground = () => {
    if(window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
}

window.addEventListener('scroll', changeBackground)

  return (
    <NAVBAR>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="logo">
          <img src={navbar ? ntwistdark : ntwistlight} alt="ntwistlight-logo" />
        </div>
        <div className={navbar ? "menu-list menu-active": "menu-list"}>
          <ul>
            <li>Home</li>
            <li
              onMouseEnter={toggleIndustryListVisibility}
              onMouseLeave={delayVisibility}
            >Industries <span><BiSolidDownArrow fontSize={"12px"}  /></span> 
            <div  className={`industry-list ${isIndustryListVisible ? 'visible' : 'hidden'}`}>
            <ul>
                <li>Sustainability</li>
                <li>Mineral Processing</li>
                <li>Mine-To-Mill-To-Mine Optimization</li>
                <li>Oil & Gas</li>
             </ul>
                </div> 
            </li>
            <li>AI Software</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
             <div className="menu-left">
             <CgMenuLeft color="red" fontSize={"25px"} fontWeight={"600"} onClick={onOpen} ref={btnRef} />
             <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        back
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
           <ul>
            <li>Home</li>
            <li>
            <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        Industries
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <li>Sustainability</li>
        <li>Mineral Processing</li>
        <li>Mine-To-Mill-To-Mine Optimization</li>
        <li>Oil & Gas</li>
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
            </li>
            <li>AI Software</li>
            <li>Blog</li>
            <li>Contact Us</li>
           </ul>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
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
top: 0;
  left: 0;

.navbar{
    width:96%;
    height:60px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
 }
 .navbar.active{
    width: 100%;
    background-color: #ffff;
    justify-content:space-around;
    z-index: 1000;
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
.menu-list>ul>li:nth-child(2){

 display: flex;
 align-items: center;
 gap: 5px;
}
.menu-list>ul>li:nth-child(2)>div{
    display: none;
    width: 300px;
    height: 180px;
   background-color:#ffff;
   position:absolute;
   top: 50px;
   border-radius: 5px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  z-index: 1;
 

  &.visible {
    display: block;
  }
}
.industry-list>ul{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:space-around;
}
.industry-list>ul>li{
    font-size:16px;
    list-style: none;
    color:rgb(0,51,88);
}
.industry-list>ul>li:hover{
    cursor: pointer;
    text-decoration: underline;
}
.menu-list.menu-active{
    width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
}
.menu-list.menu-active ul>li{
    list-style: none;
    color:rgb(0,51,88);
}
.menu-list.menu-active ul>li:hover{
    text-decoration: underline;
    cursor: pointer;
}
.menu-left{
    display: none;
}

@media all and (min-width: 450px) and (max-width: 800px){
    .navbar{
        width:98%;
        border: 1px solid #ffff;
    }
    .logo{
        width: 20%;
    }
    .menu-list{
        width: 80%;
    }
.menu-list>ul>li{
   font-size: 12px;
}

    .menu-left{
    display: none;
}
}


@media all and (min-width: 100px) and (max-width: 410px){
    .navbar{
        width:100%;
        border: 1px solid #ffff;
        background-color: #ffff;
        justify-content:space-around;
    }
    .menu-list{
        display: none;
    }
    .menu-left{
        display: block;

    }
}


`
