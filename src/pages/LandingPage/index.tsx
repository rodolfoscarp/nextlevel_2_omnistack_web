import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import api from "../../services/api";

const LandingPage = () => {

  const [totalConnections,setTotalConnections] = useState(0);

  useEffect(()=>{
    api.get("/connections").then((response)=>{
      setTotalConnections(response.data.total)
    })
  },[])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plantaforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to='/study' className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to='/give-classes' className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
            Total de {totalConnections} conexões realizadas
            <img src={purpleHeart} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
