import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles/Resume.css";
import res from "./pdf/kellen_parker_resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resLink = "https://raw.githubusercontent.com/Kellenparker/portfolio/main/src/components/pdf/kellen_parker_resume.pdf";

function Resume() {  
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
    
    return (
        <section className="resume-section">
            <section className="resume">
                <Document file={resLink} className="resume-pdf">
                    <Page pageNumber={1} scale={(width / 1000.0) + .3 > 1.5 ? 1.5 : (width / 1000.0) + .3} />
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

export default Resume;
