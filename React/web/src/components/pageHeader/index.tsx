import React from 'react'
import { Link } from 'react-router-dom';

import backIcon from '../../assests/img/icons/back.svg';
import logoImg from '../../assests/img/logo.svg';

import './style.css'

interface PageHeaderProps{
    title: string; //obrigadorio
    description?:string //opcional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="voltar"/>
            </Link>
            <img src={logoImg} alt="proffy"/>
        </div>
        <div className="header-content">
            
            <strong>{props.title}</strong>
            
            {props.description && <p>{props.description}</p>}
            
            {props.children}
        </div>

    </header>
    );
}

export default PageHeader;