import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function FPassWordOk(){
    return(
        <div id="page-fpasswordok">
            <h1>Redefinição Enviada!!!</h1>
            <h2>Boa, agora é checar seu e-mail que foi enviado para você<br/>redefinir sua senha e aproveitar essa plafaforma.</h2>
        
            <div className="button-container-fpasswordok">
                <Link to="/" className="begin">
                    Voltar ao Login
                </Link>
            </div>
        </div>
    );
}

export default FPassWordOk;