import React from 'react'
import styled from "styled-components";
import topbackground from "../Assets/topbackground.webp"
import disc from "../Assets/disc.png"
import disc2 from "../Assets/disc2.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuArrowDownRightSquare } from "react-icons/lu";
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
             <div className='enterprise'>
              <p>Start a free enterprise trial <span><MdKeyboardArrowRight /></span></p>
             </div>
            </div>
            <div className='organizations'>
               <div className='org-heading'>
                <h3>Trusted by the world’s leading organizations <span><LuArrowDownRightSquare color='blue' /></span></h3>
               </div>
               <div className='org-logo'>
                 <div>
                  <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="3M" />
                 </div>
                 <div>
                  <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="KPMG" />
                 </div>
                 <div>
                  <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="Mrecedes-Benz" />
                 </div>
                 <div>
                  <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="SAP" />
                 </div>
                 <div>
                  <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="P&G" />
                 </div>
                 <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="Telus" />
                 
               </div>
            </div> 
           
          </div> 
          </div>
          <div className='discussion'>
            <div className='discussion-1'>
              <div>
                <p> <span>GitHub Discussions </span> creates space to ask questions and have open-ended conversations.</p>
                <p>Jump into GitHub Discussions</p>
              </div>
              <div>
                <img src={disc} alt="disc" />
              </div>
            </div>
            <div className='discussion-2'>
            <div>
                <p> <span>Pull requests </span>allow real-time communication and collaboration about code changes.</p>
                <p>Check out pull requests</p>
              </div>
              <div>
                <img src={disc2} alt="disc2" />
              </div>
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
overflow-x: hidden !important;

 .background{
   width: 100%;
   height:130vh;
   background-image:url(${topbackground}) ;
   background-size:cover;
   background-position: right;
   transform: translateX(65%);
   z-index: -1000;
   overflow-x: hidden !important;
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
  .enterprise{
    width: 280px;
    height: 48.52px;
    border: 2px solid #ffff;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius:5px ;
  }
  .enterprise p{
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items:center;
    justify-content: center;
    gap:3px;
    color: #ffff;
  }
  .organizations{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    gap: 30px;
  }
  .org-heading{
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .org-heading h3{
    font-size: 28px;
    color: #6E7681;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:5px; 
  }
  .org-logo{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .discussion{
    width:100%;
    height:120vh;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 20px;
    margin-top: 400px;
  }
  .discussion-1{
    width: 47%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #7d8590;
    border-radius: 8px;
    background-color: rgb(22,27,34);
  }
  .discussion-1>div:first-child{
    width:70%;
    height:40%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
  }
  .discussion-1>div:first-child>p:first-child{
    font-size: 30px;
    font-weight: 500;
    line-height: 32px;
    color:#7d8590;
  }
  .discussion-1>div:first-child>p:first-child span{
     color: #ffff;
  }
  .discussion-1>div:first-child>p:last-child{
      font-size: 24px;
      color:#7d8590;
      font-weight: 600;
      text-align: left;
  }
  .discussion-2{
    width: 47%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    border: 1px solid #7d8590;
    background-color: rgb(22,27,34);
  }
  .discussion-2>div:first-child{
    width:70%;
    height:40%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
  }
  .discussion-2>div:first-child>p:first-child{
    font-size: 30px;
    font-weight: 500;
    line-height: 32px;
    color:#7d8590;
  }
  .discussion-2>div:first-child>p:first-child span{
     color: #ffff;
  }
  .discussion-2>div:first-child>p:last-child{
      font-size: 24px;
      color:#7d8590;
      font-weight: 600;
      text-align: left;
  }
`