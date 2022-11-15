import React from "react";
import "./styles/Footer.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <section className="footer">
            <p style={{ marginTop: "0", paddingTop: "20px" }}>Connect and Learn More!</p>
            <div className="socials li">
                <SocialIcon
                    network="linkedin"
                    url="www.linkedin.com/in/kellen-parker"
                />
            </div>
            <div className="socials gh">
                <SocialIcon
                    network="github"
                    url="https://github.com/Kellenparker"
                />
            </div>
            <section className="btm">
                <p className="right">Made by Kellen Parker, 2022</p>
                <a href="https://github.com/Kellenparker/portfolio" target="_blank" rel="noreferrer">
                    <p className="left">Website Source</p>
                </a>
            </section>
        </section>
    );
}

export default Footer;
