/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillInfo from "./skillInfo";
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
                <section className="general-info">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon="fa-solid fa-calendar" />
                            {general.dateOfBirth}
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                            {general.phone}
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            {general.email}
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            {general.location}
                        </li>
                    </ul>
                </section>

                {skills.length !== 0 && (
                    <>
                        <div className="separator"></div>
                        <section className="skills">
                            <h3>Skills</h3>
                            <ul>
                                {skills.map((skill, index) => {
                                    console.log(skill);
                                    return (
                                        <li key={index}>
                                            <SkillInfo
                                                name={skill.name}
                                                rating={skill.rating}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    </>
                )}
            </div>
            <div className="cv-content"></div>
        </div>
    );
}
