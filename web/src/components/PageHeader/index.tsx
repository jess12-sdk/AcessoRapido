import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo02.png';
import backIcon from '../../assets/images/icons/back1.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <div id="page-search-content">
            <div className="container-header">
                <div className="head">
                    <div className="hero">
                        <Link to="/landing">
                            <img 
                                src={backIcon}
                                alt="Voltar"
                            />
                        </Link>
                    </div>
                    <h3>Buscar Serviço</h3>
                    <div>
                        <img 
                            src={logoImg}
                            alt="Acesso Rapido"
                            className="image2"
                        />
                    </div>
                </div>

                <div className="title">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p> }

                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
