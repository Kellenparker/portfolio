import React from "react";
import "./styles/Footer.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SocialMediaIconsReact } from "social-media-icons-react";

function Footer() {
    return (
        <section className="footer">
            <p style={{ marginTop: "0", paddingTop: "20px" }}>Connect with me!</p>
            <div className="socials li">
                <SocialMediaIconsReact
                    borderColor="rgba(76, 76, 76, 0.5)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="linkedin"
                    iconColor="rgba(255,255,255,1)"
                    backgroundColor="rgba(26,166,233,0)"
                    iconSize="2"
                    roundness="10%"
                    url="www.linkedin.com/in/kellen-parker"
                    size="30"
                />
            </div>
            <div className="socials gh">
                <SocialMediaIconsReact
                    borderColor="rgba(76, 76, 76, 0.5)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="github"
                    iconColor="rgba(255,255,255,1)"
                    backgroundColor="rgba(26,166,233,0)"
                    iconSize="2"
                    roundness="10%"
                    url="https://github.com/Kellenparker"
                    size="30"
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
