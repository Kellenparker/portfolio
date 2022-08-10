import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles/Resume.css";
import res from "./pdf/kellen_parker_resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resLink =
    "https://raw.githubusercontent.com/Kellenparker/portfolio/main/src/components/pdf/kellen_parker_resume.pdf";

function Resume() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

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
        <section className="resume-section">
            <section className="resume">
                <Document file={resLink} className="resume-pdf">
                    <Page
                        pageNumber={1}
                        scale={windowSize.innerWidth / 1000.0 + 0.3 > 1.5 ? 1.5 : windowSize.innerWidth / 1100.0 + 0.2}
                    />
                </Document>
            </section>
            <div className="download">
                <a href={res} target="_blank" rel="noreferrer">
                    <button className="btn">Download Resume (.pdf)</button>
                </a>
            </div>
        </section>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Resume;
