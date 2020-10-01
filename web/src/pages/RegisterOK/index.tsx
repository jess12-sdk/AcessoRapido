import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function RegisterOK(){
    return (
        <div id="page-registerok">
            <h1>Cadastro concluído!!!</h1>
            <h2>Agora você faz parte da plataforma do Acesso Rápido.<br/>Tenha uma ótima experiência.</h2>
        
            <div className="button-container-registerok">
                <Link to="/" className="begin">
                    Fazer Login
                </Link>
            </div>
        </div>
    );
}

export default RegisterOK;