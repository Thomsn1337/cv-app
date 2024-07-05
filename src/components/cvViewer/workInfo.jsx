/* eslint-disable react/prop-types */
import "../../styles/workInfo.css";

export default function WorkInfo({ work }) {
    return (
        <div className="work-info">
            <div className="header">
                <h3 className="work-name">{work.name}</h3>
                <p className="work-duration">
                    {work.startYear}-{work.endYear}
                </p>
            </div>
            <p className="work-position">{work.position}</p>
            <ul className="work-activities">
                {work.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    );
}
