import React from 'react';

import landingImg from '../../assets/images/landing.png';
import logoImg from '../../assets/images/logo02.png';

import './styles.css';
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <div>
                        <img 
                            src={logoImg} 
                            alt="Acesso Rapido" 
                            className="hero-image"
                        />
                        <h2>Sua plataforma para conseguir<br/>seu emprego.</h2>
                    </div>
                    <div className="image">
                        <img 
                            src={landingImg} 
                            alt="Plataforma de estudos" 
                            className="hero-image-second"
                        />
                    </div>
                </div>
                
            </div>   
            <div className="content">
                <h4>Seja bem-vindo!!!</h4>
                <h2>O que você<br/>deseja?</h2>
                <div className="link-content">
                    <Link to="/search" className="search">
                        Buscar Serviços
                    </Link>

                    <Link to="/service" className="give">
                        Ofertar Serviços
                    </Link>
                </div>
            </div>
        </div>
    );
}

/*<div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Acesso Rapido" />
                    <h2>Sua Plataforma de estudos online.</h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    
                </div>             
            </div>*/

export default Landing;