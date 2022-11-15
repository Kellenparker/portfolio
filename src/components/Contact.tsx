import React from "react";
import "./styles/Contact.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SocialIcon } from "react-social-icons";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-card">
                <h1 className="contact-title center">Contact me at:</h1>
                <p className="email center">kellenrparker@gmail.com</p>
                <h1 className="contact-title center">Or find me at:</h1>
                <div className="socials li center">
                    <SocialIcon network="linkedin" url="www.linkedin.com/in/kellen-parker" />
                </div>
                <div className="socials gh center">
                    <SocialIcon network="github" url="https://github.com/Kellenparker" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
