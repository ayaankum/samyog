import React, { useEffect } from "react";
import './club.css'
import { Link } from "react-router-dom";
function Club(){
  return (
         <div class="main-c">
          <div class="byn">BUILD YOUR NETWORK</div>
        <div class="circle">
            <div class="semi-circle"></div>
            <div class="lineL1"></div>
            <div class="lineL2"></div>
            <div class="lineL3"></div>
            <div class="lineL4"></div>
            <div class="lineL5"></div>
            <div class="semi-circle1"></div>
            <div class="lineR1"></div>
            <div class="lineR2"></div>
            <div class="lineR3"></div>
            <div class="lineR4"></div>
            <div class="lineR5"></div>
            <div class="lineR6"></div>
            <div class="samLogo">
                
                    <img src="ro-logo1.png" alt=""/>
             
            </div>
            <Link to="/clubs" class="clubBtnL1">
                <div class="mp-cl-aiml">AIML</div>
                <img  src="aimlC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnL2">
                <div class="mp-cl">CYBER<br/>SECURITY</div>
                <img  src="CyberC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnL3">
                <div class="mp-cl-iot">IOT</div>
                <img  src="IOTC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnL4">
                <div class="mp-cl-web">WEB<br/>DEVELOPMENT</div>
                <img  src="webC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnL5">
                <div class="mp-cl-compcode">COMPETITIVE<br/>CODING</div>
                <img  src="competitivecodingC.png" alt="" />
            </Link>


            <Link to="/clubs" class="clubBtnR1">
                <div class="mp-cl">LITERARY<br/>CLUB</div>
                <img  src="LiteraryC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnR2">
                <div class="mp-cl">DESIGN<br/>CLUB</div>
                <img  src="DesignC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnR3">
                <div class="mp-cl">SPORTS<br/>CLUB</div>
                <img  src="SportsC.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnR4">
                <div class="mp-cl">CULTURAL<br/>CLUB</div>
                <img  src="Culturalc.png" alt=""/>
            </Link>
            <Link to="/clubs" class="clubBtnR5">
                <div class="mp-cl-commuser">COMMUNITY<br/>SERVICE<br/></div>
                <img  src="Community_serviceC.png" alt="" />
            </Link>
        </div>
       
    </div>
  );
};

export default Club;
