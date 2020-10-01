import React from 'react';

import LogoImg from '../../assets/images/logo02.png';

import './styles.css';

function Main(){
    return (
        <div className="container1">
            <div className="container1">
                 <div className="container1-content">
                    <img 
                        src={LogoImg} 
                        alt="logo"
                        className="hero-image"
                    />
                    <h2>Sua plataforma para conseguir<br/>seu emprego.</h2>
                </div>
            </div>
        </div>
    );
}

export default Main;