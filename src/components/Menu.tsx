import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./styles/Menu.css";

export default (props: any) => {
    return (
        // Pass on our props
        <Menu right {...props}>
            <a className="menu-item" href="/">
                Home
            </a>
            
            <a className="menu-item" href="/burgers">
                Projects
            </a>

            <a className="menu-item" href="/pizzas">
                Resume
            </a>

            <a className="menu-item" href="/desserts">
                Contact
            </a>
        </Menu>
    );
};
