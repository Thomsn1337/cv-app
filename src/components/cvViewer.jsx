/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsetSection from "./cvViewer/skillsetSection";
import SchoolInfo from "./cvViewer/schoolInfo";
import WorkInfo from "./cvViewer/workInfo";
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

                <SkillsetSection skillsetName={"Skills"} skillset={skills} />
                <SkillsetSection
                    skillsetName={"Languages"}
                    skillset={languages}
                />
            </div>

            <div className="cv-content">
                <section className="about">
                    <h2>About me</h2>
                    <p>{general.about}</p>
                </section>
                <section className="education">
                    <h2>Education</h2>
                    {education.map((school, index) => (
                        <SchoolInfo school={school} key={index} />
                    ))}
                </section>
                <section className="work">
                    <h2>Work experience</h2>
                    {experience.map((work, index) => (
                        <WorkInfo work={work} key={index} />
                    ))}
                </section>
            </div>
        </div>
    );
}
