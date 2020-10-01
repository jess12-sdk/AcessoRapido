import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Main from '../../components/Main';

import './styles.css';

function Home() {
    return (
        <div id="page-home">
            <Main />
            <div className="container-home">
                <form>
                    <fieldset>
                        <legend>Fazer Login</legend>
                        
                        <Input
                            name="email"
                            label=""
                            placeholder="E-mail"
                        />

                        <Input
                            name="senha"
                            label=""
                            placeholder="Senha"
                        />
                        
                        <div className="button-container-home-1">
                            <Link to="/fpassword" className="password">
                                Esqueci minha senha
                            </Link>
                        </div>

                        <div className="button-container-home-2">
                            <Link to="/landing" className="begin">
                                Entrar
                            </Link>
                        </div>
                        <div className="footer-text">
                                Não é cadastrado?
                        </div>
                        <div className="footer-container">
                            <Link to="/register" className="register">
                                Cadastre-se Aqui
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Home;