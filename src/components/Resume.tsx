import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function Resume() {

    return (
        <div>
            <Document file="./pdf/kellen_parker_resume.pdf">
            </Document>
        </div>
    );
}

export default Resume;
