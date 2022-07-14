import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles/Resume.css";
import res from "./pdf/kellen_parker_resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/Kellenparker/portfolio/main/src/components/pdf/kellen_parker_resume.pdf";

function ResumeNew() {
    return (
        <section className="resume-section">
            <section className="resume">
                <Document file={resumeLink} className="resume-pdf">
                    <Page pageNumber={1} scale={1.5} />
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

export default ResumeNew;
