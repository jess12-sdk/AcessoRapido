import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Main from '../../components/Main';
import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.svg';

import api from '../../services/api';

import './styles.css';



function Register(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [passwordM, setPassword] = useState('');

    function handleCreateUsers(e: FormEvent){
        e.preventDefault();

        api.post('register', {
            name,
            lastname,
            email,
            passwordM
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/registerok');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return(
        <div id="page-register">
            <div id="page-register-content">
                <div className="head1">
                    <Link to="/" className="icon">
                        <img src={backIcon} alt="back" />
                    </Link>                
                </div>
                <div className="container-register">
                    <form onSubmit={handleCreateUsers}>
                        <fieldset>
                            <legend>Cadastro</legend>
                            <h2>Preencha os dados abaixo<br/>para cadastra-se.</h2>
                                
                                <div className="content-input-register">
                                    <Input
                                        name="name"
                                        label=""
                                        placeholder="Nome"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />

                                    <Input
                                        name="lastname"
                                        label=""
                                        placeholder="Sobrenome"
                                        value={lastname}
                                        onChange={(e) => { setLastname(e.target.value) }}
                                    />

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
                                        value={passwordM}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>

                                <div className="button-container-register">
                                    <button type="submit">
                                            Cadastrar
                                    </button>
                                </div>

                        </fieldset>
                    </form>
                </div>
            </div>
            <Main />
        </div>
    );
}

export default Register;