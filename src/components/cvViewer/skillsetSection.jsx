/* eslint-disable react/prop-types */
import SkillInfo from "./skillInfo";

export default function SkillsetSection({ skillsetName, skillset }) {
    return (
        skillset.length !== 0 && (
            <>
                <div className="separator"></div>
                <section className={skillsetName.toLowerCase()}>
                    <h3>{skillsetName}</h3>
                    <ul>
                        {skillset.map((skill, index) => {
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
        )
    );
}
