import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";
import { Engine } from "tsparticles-engine";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SideBar from "./components/Menu";

function App() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const showButtonWidth = 800;

    const particlesInit = async (main: Engine) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container: any): any => {
        console.log(container);
    };

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="App" id="App">
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
                                value: "#2222aa",
                            },
                            links: {
                                color: "#2222aa",
                                distance: 100,
                                enable: true,
                                opacity: 0.3,
                                width: .5,
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
                                speed: 0.1,
                                straight: true,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 900,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.3,
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
                {windowSize.innerWidth <= showButtonWidth && (
                    <SideBar
                        pageWrapId={"root"}
                        outerContainerId={"App"}
                        className="menu"
                    />
                )}
                <Header showButtons={windowSize.innerWidth > showButtonWidth} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default App;
