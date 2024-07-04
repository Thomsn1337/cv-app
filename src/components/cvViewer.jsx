/* eslint-disable react/prop-types */
import "../styles/cvViewer.css";

export default function CVViewer({ cvData }) {
    const { general, education, experience, skills, languages } = cvData;
    return (
        <div className="cv-viewer">
            <div className="cv-header">
                <h1>{general.name}</h1>
                <p>{general.title}</p>
            </div>
            <div className="cv-side">
            </div>
            <div className="cv-content"></div>
        </div>
    );
}
