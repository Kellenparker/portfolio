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
                        borderColor="rgba(76, 76, 76, 0.5)"
                        borderWidth="2"
                        borderStyle="solid"
                        icon="linkedin"
                        iconColor="rgba(60,60,60,1)"
                        backgroundColor="rgb(255, 182, 121)"
                        iconSize="4"
                        roundness="10%"
                        url="https://some-website.com/my-social-media-url"
                        size="50"
                    />
                </div>
                <div className="socials gh center">
                    <SocialMediaIconsReact
                        borderColor="rgba(76, 76, 76, 0.5)"
                        borderWidth="2"
                        borderStyle="solid"
                        icon="github"
                        iconColor="rgba(60,60,60,1)"
                        backgroundColor="rgb(255, 182, 121)"
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
