import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./styles/Menu.css";

export default (props: any) => {
    return (
        
        <Menu right {...props}>
            <Link className="menu-item" to="/">
                Home
            </Link>

            <Link className="menu-item" to="/projects">
                Projects
            </Link>

            <Link className="menu-item" to="/resume">
                Resume
            </Link>

            <Link className="menu-item" to="/contact">
                Contact
            </Link>
        </Menu>
    );
};
