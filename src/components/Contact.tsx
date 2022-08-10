import React from "react";
import "./styles/Contact.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SocialMediaIconsReact } from "social-media-icons-react";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-card">
                <h1 className="contact-title center">Contact me at:</h1>
                <p className="email center">kellenrparker@gmail.com</p>
                <h1 className="contact-title center">Or find me at:</h1>
                <div className="socials li center">
                    <SocialMediaIconsReact
                        borderColor="rgb(0, 6, 111)"
                        borderWidth="1"
                        borderStyle="solid"
                        icon="linkedin"
                        iconColor="rgb(0, 6, 111)"
                        backgroundColor="rgba(0, 6, 111, 0)"
                        iconSize="4"
                        roundness="10%"
                        url="www.linkedin.com/in/kellen-parker"
                        size="50"
                    />
                </div>
                <div className="socials gh center">
                    <SocialMediaIconsReact
                        borderColor="rgb(0, 6, 111)"
                        borderWidth="1"
                        borderStyle="solid"
                        icon="github"
                        iconColor="rgb(0, 6, 111)"
                        backgroundColor="rgba(0, 6, 111, 0)"
                        iconSize="4"
                        roundness="10%"
                        url="https://github.com/Kellenparker"
                        size="50"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;
