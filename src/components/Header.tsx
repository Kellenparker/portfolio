import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header(props: any) {
    return (
        <div className="header" key={props.showButtons}>
            <div className="contents">
                <Link to="/">
                    <p className="title full">Kellen Parker</p>
                </Link>
                <Link to="/">
                    <p className="title short">KP</p>
                </Link>
                {props.showButtons && (
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
                        <Link to="/contact">
                            <button type="button" className="btn-head btn-right">
                                Contact
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
