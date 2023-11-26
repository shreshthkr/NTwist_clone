import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FOOTER>
       <div className='footer-1'>
         <div className='footer-heading'>
          <h1>GitHub</h1>
         </div>
         <div className='dialogue'>
          <p>Subscribe to our developer newsletter</p>
          <p>Get tips, technical guides, and best practices. Once a month. Right in your inbox.</p>
         </div>
         <div className='subscribe'>
          <button>Subscribe</button>
         </div>
       </div>
       <div className='footer-2'>
        <ul>
          <li className='footer-list'>Products
            <ul>
              <li>Features</li>
              <li>Enterprise</li>
              <li>Copilot</li>
              <li>Security</li>
              <li>Pricing</li>
              <li>Team</li>
              <li>Resourcex</li>
              <li>Roadmap</li>
              <li>Compare GitHub</li>
            </ul>
          </li>
          <li className='footer-list'>Platform
            <ul>
              <li>Developer API</li>
              <li>Partners</li>
              <li>Electron</li>
              <li>GitHub Desktop</li>
            </ul>
          </li>
          <li className='footer-list'>Support
            <ul>
              <li>Docs</li>
              <li>Community Forum</li>
              <li>Professional Services</li>
              <li>Premium Support</li>
              <li>Skills</li>
              <li>Status</li>
              <li>Contact Github</li>
            </ul>
          </li>
          <li className='footer-list'>Company
            <ul>
              <li>About</li>
              <li>Customer stories</li>
              <li>Blog</li>
              <li>The ReadME Project</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Inclusion</li>
              <li>Social Impact</li>
              <li>Shop</li>
            </ul>
          </li>
        </ul>
       </div>
    </FOOTER>
  )
}

export default Footer;

const FOOTER = styled.div`
width: 100%;
height: 80vh;
  background-color: rgb(13,17,23);
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;

.footer-1{
  width:30%;
  height:auto;
  display: flex;
  flex-direction:column;
align-items: center;
justify-content: center;
}
.footer-heading{
  width: 100%;
  height: 40px;
}
.footer-heading h1{
  text-align: left;
  color:#ffff;
  font-size: 24px;
  font-weight: 600;

}
.dialogue{
  width:100%;
  height:auto;
  display: flex;
  flex-direction:column;
align-items: flex-start;
justify-content: center;
}
.dialogue >p{
  color: #ffff;
  font-weight: 600;
  font-size: 15px;
}
.dialogue >p+p{
  color: #6E7681;
}
.subscribe{
  width: 100%;
  height: 60px;
  display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 30px;
}
.subscribe button{
  border: 1px solid #6E7681;
  width: 25%;
  height:80%;
  border-radius: 5px;
  color: #ffff;
  font-weight: 600;

}
.footer-2{
  width: 65%;
  height: auto;
  display: flex;
align-items: center;
justify-content: center;
}
.footer-2>ul{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;
}
.footer-list{
  width: 150px;
   color: #6E7681;
   list-style: none;

}
.footer-list>ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}
.footer-list ul>li{
  color: #6E7681;
   list-style: none;

}
.footer-list ul>li:hover{
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
`