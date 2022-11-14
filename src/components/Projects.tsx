import "./styles/Projects.css";
import otr from "./imgs/otr.png";
import bbbs from "./imgs/bbbs.png";

function Projects() {
    return (
        <section className="projects">
            <h1 className="project-title">Projects</h1>
            <section className="project">
                <div className="img-col">
                    <p className="mapple-title">Mapple</p>
                </div>
                <div className="col">
                    <h3 className="project-name">Mapple</h3>
                    <p>
                        A Wordle inspired guessing game where you guess the year of the map that is displayed. 
                        Developed with ease-of-use, extensibility, and responsiveness as the main goals of the project.
                        Makes use of AWS to allow for maps to be added, edited, and removed easily with no change to the project code.
                    </p>
                    <div className="btn-group-proj" role="group" aria-label="project buttons">
                        <a href="https://mapple.kellenp.com/" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-left">
                                Try it!
                            </button>
                        </a>
                        <a href="http://github.com/kellenparker/mapple" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-right">
                                Source
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <div id="spacer-project" />
            <section className="project">
                <div className="img-col">
                    <img src={otr} alt="otr" className="project-img"></img>
                </div>
                <div className="col">
                    <h3 className="project-name">On the Ropes</h3>
                    <p>
                        Originally developed in C++, On the Ropes is a boxing simulation that I used to learn the basics
                        of Typescript, browser storage, and routing. It has future plans of being a boxing managment
                        game, although most of those elements are not implemented as of yet. The current version of On
                        the Ropes includes the majority of the backbone of which a management game can be built upon.
                    </p>
                    <p>Note: this project is not optimized for mobile.</p>
                    <div className="btn-group-proj" role="group" aria-label="project buttons">
                        <a href="https://ontheropes.kellenp.com/" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-left">
                                Try it!
                            </button>
                        </a>
                        <a href="http://github.com/kellenparker/ontheropes" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-right">
                                Source
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <div id="spacer-project" />
            <section className="project">
                <div className="img-col">
                    <img src={bbbs} alt="otr" className="project-img"></img>
                </div>
                <div className="col">
                    <h3 className="project-name">Bare Bones Battle Simulator</h3>
                    <p>
                        As my first attempt at making a web app, Bare Bones Battle Simulator is very simple and
                        primative in nature. It simulates two opponents squaring off against eachother. Each opponent
                        can have multiple armies and each army can be edited to the user's liking. This app taught me
                        the basics of Javascript, React.js, and web developement as a whole.
                    </p>
                    <p>Note: this project is not optimized for mobile.</p>
                    <div className="btn-group-proj" role="group" aria-label="project buttons">
                        <a href="https://barebones.kellenp.com/" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-left">
                                Try it!
                            </button>
                        </a>
                        <a href="http://github.com/kellenparker/battlesim" target="_blank" rel="noreferrer">
                            <button type="button" className="btn-proj btn-right">
                                Source
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <div id="spacer-project" />
        </section>
    );
}

export default Projects;
