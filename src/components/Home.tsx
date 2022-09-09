import React from "react";
import "./styles/Home.css";
import Avatar from "./imgs/Avatar.svg";
import Snippet from "./Snippet";

function Home() {
    return (
        <section className="home-section">
            <div className="space"></div>
            <section className="split">
                <div className="col">
                    <div className="img-cont">
                        <img src={Avatar} className="avatar" alt="Avatar" />
                    </div>
                </div>
                <div className="col">
                    <div className="introduction">
                        <h3 className="hello">Hello, my name is</h3>
                        <h1 className="name sec">Kellen Parker</h1>
                        <p>
                            I am a <strong className="sec"> computer science </strong> student from{" "}
                            <strong className="sec"> Amarillo, TX</strong>.
                        </p>
                        <p>
                            I will graduate from <strong className="sec"> West Texas A&M University</strong> in
                            <strong className="sec"> December 2022</strong> with a{" "}
                            <strong className="sec"> Bachelor's in Engineering</strong>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="continued">
                <div className="col">
                    <p>
                        My proficiencies include <strong className="sec"> C++</strong>,{" "}
                        <strong className="sec"> Javascript</strong>, <strong className="sec"> Typescript</strong>,{" "}
                        <strong className="sec"> Node.js</strong>,<strong className="sec"> React.js</strong>, and{" "}
                        <strong className="sec"> Python</strong>.
                    </p>
                    <p>
                        I spend my free time creating and studying <strong className="sec"> simulations </strong> and
                        the <strong className="sec"> mathematical models and approaches</strong> it takes to achieve
                        them. <strong className="sec"> Applying</strong> and{" "}
                        <strong className="sec"> implementing</strong> these concepts allow me to continue to learn and
                        grow as a developer.
                    </p>
                    <p>
                        In the future I would like to explore areas such as{" "}
                        <strong className="sec"> machine learning</strong> and{" "}
                        <strong className="sec"> artificial intellegance</strong>. I am also eager to continue
                        sharpening my skills in languages such as <strong className="sec"> C++</strong>,{" "}
                        <strong className="sec"> Javascript</strong>, <strong className="sec"> CSS</strong>, and{" "}
                        <strong className="sec"> Python</strong>.
                    </p>
                </div>
                <div className="col">
                    <div className="snip">
                        <Snippet />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
