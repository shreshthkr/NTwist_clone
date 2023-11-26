import React from 'react'
import styled from "styled-components";
import topbackground from "../Assets/topbackground.webp"
import { MdKeyboardArrowRight } from "react-icons/md";
const HomePage = () => {
  return (
    <BODY>
      <div className='background'></div>
      <div className='head'>

    
      <div className='left-section'>
          <div></div>
        </div>
        <div className='right-section'>
            <div className='heading'>
              <h1>Let's build from here</h1>
            
            <div className='sub-heading'>
              <h2>The world’s leading AI-powered developer platform.</h2>
            </div>
            </div>
            <div className='heading-form'>
             <div className='form'>
              <input type="text" placeholder='Email address' />
              <button>Sign up for Github</button>
             </div>
             <div>
              <p>Start a free enterprise trial <span><MdKeyboardArrowRight /></span></p>
             </div>
            </div>
            <div></div>
            <div></div>
          </div> 
          </div>
    </BODY>
  )
}

export default HomePage;


const BODY = styled.div`
width: 100%;
height: auto;
background-color: rgb(13,17,23);

 .background{
   width: 100%;
   height:130vh;
   background-image:url(${topbackground}) ;
   background-size:cover;
   background-position: right;
   transform: translateX(65%);
   z-index: -1000;
 }
 .head{
  width: 85%;
  height: 100vh;
  position: absolute;
  top: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 80px;
  gap: 50px;
 }
 .left-section{
  width: 3%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .left-section>div{
  width: 2px;
  height: 100%;
  border: 2px solid rgb(124,114,255);
 }
 .right-section{
  width: 98%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
 }
 .heading{
  width: auto;
  height:auto ;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 }
  .heading h1{
    font-size: 96px;
    font-weight: 600;
    font-family:"Mona Sans","Mona Sans Header Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    letter-spacing:2px;
    color: #ffff;
  }
  .sub-heading h2{
      font-size: 24px;
      line-height: 32px;
      color: #7d8590;
      text-align: left;
      font-family:"Mona Sans","Mona Sans Header Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .heading-form{
    width: 100%;
    height:50px;
     display: flex;
     align-items: center;
     justify-content: flex-start;
  }
  .form{
    width: 50%;
    height:48px;
    display: flex;
     align-items: center;
     justify-content: flex-start;
  }
  .form>input{
    width: 50%;
    background-color: #ffff;
    height: 100%;
    border: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 20px;
    text-transform: translateX(5%);
  }
  .form>input+button{
    width: 40%;
    background-color:#6E40C9 ;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ffff;
    font-size: 18px;
    font-weight: 700;
  }
`