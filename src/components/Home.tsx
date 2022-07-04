import React from "react";
import "./styles/Home.css";
import Avatar from "./imgs/Avatar.svg";
import Snippet from "./Snippet";

function Home() {
    return (
        <section className="home-section">
            <section className="split">
                <div className="col">
                    <div className="img-cont">
                        <img src={Avatar} className="avatar" alt="Avatar" />
                    </div>
                </div>
                <div className="col">
                    <div className="introduction">
                        <h3>Hello, my name is</h3>
                        <h1 className="name sec">Kellen Parker</h1>
                        <p>
                            I am a <strong className="sec"> computer science </strong> student from{" "}
                            <strong className="sec"> Amarillo, TX</strong>.
                        </p>
                        <p>
                            I will graduate from <strong className="sec"> West Texas A&M university</strong> in
                            <strong className="sec"> December 2022</strong> with a{" "}
                            <strong className="sec"> Bachelor's in Engineering</strong>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="continued">
                <div className="col">
                    <p>
                        My proficenies include <strong className="sec"> C++ </strong>,{" "}
                        <strong className="sec"> Javascript</strong>, <strong className="sec"> Typescript</strong>,{" "}
                        <strong className="sec"> Node.js</strong>,<strong className="sec"> React.js</strong>, and{" "}
                        <strong className="sec"> Python</strong>.
                    </p>
                    <p>
                        I spend my free time creating and studying <strong className="sec"> simulations </strong> and
                        the <strong className="sec"> mathematical models and approaches</strong> it takes to achieve
                        them.
                    </p>
                    <p>In the future I would like to</p>
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
