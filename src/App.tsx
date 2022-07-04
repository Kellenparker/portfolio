import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";
import { Engine } from "tsparticles-engine";

function App() {
    const particlesInit = async (main: Engine) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container: any): any => {
        console.log(container);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {},
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 50,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.6,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 1 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Header />
                <div id="spacer" />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
