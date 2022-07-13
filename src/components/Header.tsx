import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="contents">
                <p className="title">Kellen Parker</p>
                <div className="btn-group" role="group" aria-label="header buttons">
                    <Link to="/">
                        <button type="button" className="btn-head btn-left">
                            Home
                        </button>
                    </Link>
                    <Link to="/projects">
                        <button type="button" className="btn-head btn-secondary">
                            Projects
                        </button>
                    </Link>
                    <Link to="/resume">
                        <button type="button" className="btn-head btn-secondary">
                            Resume
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn-head btn-right">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
