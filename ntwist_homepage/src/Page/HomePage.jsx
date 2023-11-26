import React from "react";
import styled from "styled-components";
import background from "../Assets/background.png";
import picture from "../Assets/picture.png";
import Mine from "../Assets/Mine.jpg";
import Sustainability from "../Assets/Sustainability.jpg";
import Mineral from "../Assets/Mineral.jpg"
import OilnGas from "../Assets/OilnGas.png"
const HomePage = () => {
  return (
    <>
    <HOME>
      <div className="top-section">
        <div className="left-section">
          <div className="heading">
            <h1>Data-powered solutions for Industrial Excellence</h1>
          </div>
          <div className="read-more">
            <button>Read More</button>
          </div>
        </div>
        <div className="right-section">
          <img src={picture} alt="Ntwist" />
        </div>
      </div>
    </HOME>

      {/* Body section starts from here */}

      <BODY>
          <div className="mine-mill">
             <div className="info">
                <div className="sub-heading">
                    <h2>Mine-To-Mill-To-Mine Optimization</h2>
                </div>
                <div className="para">
                    <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
                </div>
                <div className="sub-button" >
                    <button>Read More</button>
                </div>
             </div>
             <div className="info-image">
                <img src={Mine} alt="mine" />
             </div>
          </div>
          <div className="sustain-box">
              <div className="info-image">
                <img src={Sustainability} alt="sustainability" />
              </div>
              <div className="sustain-info">
                 <div className="sustain-heading">
                    <h2>Sustainability</h2>
                 </div>
                 <div className="sustain-para">
                    <p>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</p>
                    <p>With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
                 </div>
                 <div className="sub-button" >
                    <button>Read More</button>
                </div>
              </div>
          </div>
          <div className="mine-mill">
             <div className="info">
                <div className="sub-heading">
                    <h2>Mineral Processing</h2>
                </div>
                <div className="para">
                    <p>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
                </div>
                <div className="sub-button" >
                    <button>Read More</button>
                </div>
             </div>
             <div className="info-image">
                <img src={Mineral} alt="Mineral" />
             </div>
          </div>
          <div className="sustain-box">
              <div className="info-image">
                <img src={OilnGas} alt="OilnGas" />
              </div>
              <div className="sustain-info">
                 <div className="sustain-heading">
                    <h2>Oil & Gas</h2>
                 </div>
                 <div className="sustain-para">
                    <p>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. </p>
                    <p>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
                 </div>
                 <div className="sub-button" >
                    <button>Read More</button>
                </div>
              </div>
          </div>
      </BODY>
      </>
  );
};

export default HomePage;

const HOME = styled.div`
  width: 100%;
  height: 620px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .top-section {
    width: 98%;
    height: 500px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    
  }
  .left-section {
    width: 45%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
  .heading {
    width: 90%;
    height: 55%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  .heading > h1 {
    color: #ffff;
    font-size: 41px;
    font-weight: 700;
    font-family: Inter;
  }
  .read-more > button {
    width: 130px;
    height: 35px;
    border: none;
    background-color: rgb(0, 122, 255);
    color: #ffff;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  .right-section {
    width: 55%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .right-section img {
    width: 95%;
  }
  @media all and (min-width: 450px) and (max-width: 800px){
    .left-section {
        width: 50%;
    }
    .heading > h1{
        font-size: 30px;
    }
  }
  @media all and (min-width: 100px) and (max-width: 409px){
    .top-section{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    align-items: center;
    justify-content: space-around;
        align-items: flex-start;
        justify-content: space-evenly;
        border: 1px solid #ffff;
    }
    .left-section{
        width:80%;
    }
    .heading > h1 {
        font-size: 25px;
        font-weight: 600;
    }
    .read-more > button{
        width: 100px;
    }
    .right-section{
        width: 80%;
        height: 200px;
    }
}

`;


const BODY = styled.div`
    width: 100%;
    height:auto;
    margin-top: 30px;

.mine-mill{
    width: 95%;
    height:455px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.info{
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
   
}
.sub-heading{
    width: 100%;
    height:auto;
}
.sub-heading h2{
    font-size: 43px;
    font-weight: 500;
    color: #FF3A2D;
    text-align: left;
}
.para{
    width: 98%;
    height: auto;
    margin-top: -50px;
}
.para p{
    font-size: 16px;
    font-family: Roboto, sans-serif;
    line-height: 26px;
    color: #000000;
    text-align: justify;
    text-decoration: none solid rgb(0,0,0);
}
.sub-button {
    margin-top: -15px;
}
.sub-button button{
     width: 120px;
     height: 40px;
     background-color: #FF3A2D;
     color: #ffff;
     font-size: 15px;
     font-weight: 500;
     line-height: 15px;
     font-family: Roboto, sans-serif;
     border-radius: 5px;
     border: none;
     text-align: center;
}
.info-image{
    width:48%;
    height: 90%;
    z-index: -1000;
}
.info-image>img{
    width: 99%;
    height: 98%;
    filter: brightness(0.7);
    z-index: -1000;
}
.sustain-box{
    width: 95%;
    height: 400px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sustain-info{
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly; 
}
.sustain-heading{
    width: 100%;
    height: 80px; 
    display: flex;
    align-items: center;
}
.sustain-heading h2{
    font-size: 43px;
    font-weight: 500;
    color: #FF3A2D;
    text-align: left;
}
.sustain-para{
    width: 97%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
}
.sustain-para p{
    font-size: 16px;
    font-family: Roboto, sans-serif;
    line-height: 26.56px;
    color: #000000;
    text-align: justify;
    text-decoration: none solid rgb(0,0,0); 
}

@media all and (min-width: 410px) and (max-width: 800px){
    .info{
        height: 98%;
        gap: 45px;
    }
    .sub-heading h2{
        font-size: 30px;
    } 
    .para{
        margin-top: -10px;
    } 
    .para p{
        font-size: 14px;
    }
    .info-image{
        height: 80%;
    }
    .sustain-heading{
        height: 60px;
    }
    .sustain-heading h2{
        font-size: 30px;
    }
    .sustain-para p{
        font-size: 14px;
        line-height: 20px
    }
}

@media all and (min-width: 100px) and (max-width: 409px){
    .mine-mill{
        width: 95%;
    height:auto;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;  
    }
    .info{
      width  :98% ;
      margin: auto;
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    }
    .sub-heading h2{
        font-size: 25px;
        margin-bottom: 30px;
        text-align: center;
    }
    .para p{
       font-size :13px;
       text-align: center;
    }
    .sub-button button{
        width: 90px;
        height: 30px;
    }
    .info-image{
        width: 90%;
        height:200px;
    }
    .sustain-box{
        width: 95%;
    height: auto;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    }
    .sustain-info{
        width  :98% ;
      margin: auto;
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;  
    }
    .sustain-heading{
        height: 60px;
        margin: auto;
        display: flex;
    align-items: center;
    justify-content: center;
    }
    .sustain-heading h2{
        font-size: 25px;
        margin-bottom: 30px;
        text-align: center;
    }
    .sustain-para p{
        font-size :13px;
       text-align: center;
    }
}


`