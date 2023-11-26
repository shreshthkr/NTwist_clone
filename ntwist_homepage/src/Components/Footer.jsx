import React from 'react'
import styled from "styled-components";
import ntwistlight from "../Assets/ntwistlight.png";
import { FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <FOOTER>
         <div className='footer-logo'>
             <img src={ntwistlight} alt="ntwistlight" />
         </div>
         <div className='footer-menu'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
            </ul>
         </div>
         <div className='footer-details'>
            <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
         </div>
         <div className='footer-link'>
         <FaTwitter fontSize={"18px"} color='#ffff' cursor={"pointer"}  />
         <FaLinkedin fontSize={"18px"} color='#ffff' cursor={"pointer"}  />
         </div>
         <div className='footer-year'>
            <p>© 2022. Ntwist Inc.</p>
         </div>
    </FOOTER>
  )
}

export default Footer;


const FOOTER= styled.div`
     width: 100%;
     height:350px ;
     background-color: #081528;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 20px;


    .footer-logo{
        width: 142px;
        height: 48px;
    }
    .footer-logo img{
        width: 100%;
        height: 100%;
    }
    .footer-menu{
       width:100% ;
      min-height: 38px;
      max-height: auto;
       display: flex;
       align-items: center;
       justify-content: center;
    }
    .footer-menu ul{
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
    }
    .footer-menu ul>li{
        text-decoration: none;
        color: #ffff;
        list-style: none;
        font-size: 16px;
        font-family: Roboto, sans-serif;
         cursor: pointer;
    }
    .footer-details{
        width: 100%;
        height: 27px;
    }
    .footer-details p{
        text-align: center;
        color: #6F7F92;
        font-size: 16px;
        font-family: Roboto, sans-serif;
    }
    .footer-link{
        height: 40px;
        width: 115px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .footer-year{
        width: 100%;
        height: 27px;
    }
    .footer-year p{
        text-align: center;
        color: #6F7F92;
        font-size: 16px;
        font-family: Roboto, sans-serif;
    }
    @media all and (min-width: 100px) and (max-width: 410px){
        
        margin-top: 30px;

        .footer-menu{
            width: 95%;
            
        }
        .footer-menu ul>li{
            font-size: 14px;
        }
    }
`