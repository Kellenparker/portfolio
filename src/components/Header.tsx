import React from 'react';
import './styles/Header.css'

function Header() {

    return (
        <div className="header">
            <p className="title">kp</p>
            <div className="btn-group" role="group" aria-label="header buttons">
                <button type="button" className="btn-head btn-left">Home</button>
                <button type="button" className="btn-head btn-secondary">About Me</button>
                <button type="button" className="btn-head btn-secondary">Projects</button>
                <button type="button" className="btn-head btn-secondary">Resume</button>
                <button type="button" className="btn-head btn-right">Contact</button>
            </div>
        </div>
    );

}

export default Header;