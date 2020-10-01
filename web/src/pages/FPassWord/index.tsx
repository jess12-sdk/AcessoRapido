import React from 'react';

import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Main from '../../components/Main';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function FPassWord(){
    return (
        <div id="page-fpassword">
            <div id="page-fpassword-content">
                <div className="head2">
                    <Link to="/" className="icon">
                        <img src={backIcon} alt="back" />
                    </Link>                
                </div>
                <div className="container-fpassword">
                    <form>
                        <fieldset>
                            <legend>Eita, esqueceu<br/>sua senha?</legend>
                            <h2>Não esquenta, vamos da um jeito nisso.</h2>
                                
                            <div className="content-input-fpassword">

                                <Input
                                    name="email"
                                    label=""
                                    placeholder="E-mail"
                                />

                            </div>

                            <div className="button-container-fpassword">
                                <Link to="/fpasswordok" className="begin">
                                    Enviar
                                </Link>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
            <Main />
        </div>
    );
}

export default FPassWord;