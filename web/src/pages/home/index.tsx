import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Main from '../../components/Main';

import api from '../../services/api';

import './styles.css';

function Home() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');

    function validate(e: FormEvent){
        e.preventDefault();

        api.get('/', {
            params: {
                email,
                pwd
            }
        }).then(() => {
            history.push('/landing');
        }).catch(() => {
            alert('Login ou senha errado!');
        })
    }

    return (
        <div id="page-home">
            <Main />
            <div className="container-home">
                <form onSubmit={validate}>
                    <fieldset>
                        <legend>Fazer Login</legend>
                        
                        <Input
                            name="email"
                            label=""
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            value={pwd}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        
                        <div>
                            <div className="button-container-home-1">
                                <Link to="/fpassword" className="password">
                                    Esqueci minha senha
                                </Link>
                            </div>

                            <div className="button-container-home-2">
                                <button type="submit">
                                        Entrar
                                </button>
                            </div>
                            <div className="footer-text">
                                    Não é cadastrado?
                            </div>
                            <div className="footer-container">
                                <Link to="/register" className="register">
                                    Cadastre-se Aqui
                                </Link>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Home;