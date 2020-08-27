import React from 'react';
import { Link } from "react-router-dom"

import './style.css'

import logoImg from '../../assests/img/logo.svg'
import landingImg from '../../assests/img/landing.svg'

import studyicon from '../../assests/img/icons/study.svg'
import giveClassesIcon from '../../assests/img/icons/give-classes.svg'
import purpleHeartIcon from '../../assests/img/icons/purple-heart.svg'


function Landing(){
    return(
       <div id="page-landing">
           <div id="page-landing-container" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Logo Proffy"/>
                    <h2>Sua plataforma de estudo online</h2>
                </div>

                    <img src={landingImg} 
                    alt="plataforma de estudos" 
                    className="hero-img"/>

                    <div className="buttons-container">
                        
                        <Link to="/study" className="study">
                            <img src={studyicon} alt=""/>
                            Estudar
                        </Link>

                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="dar aulas"/>
                            Dar Aulas
                        </Link>
                    
                    </div>

                <span className="total-connections">
                    toral de 200 conexoes ja realizada <img src={purpleHeartIcon} alt="coraçao roxo"/>
                </span>
           </div>
       </div>
    )
}


export default Landing;

