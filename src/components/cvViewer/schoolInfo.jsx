/* eslint-disable react/prop-types */
import "../../styles/schoolInfo.css";

export default function SchoolInfo({ school }) {
    return (
        <div className="school-info">
            <div className="header">
                <h3 className="school-name">{school.name}</h3>
                <p className="school-duration">
                    {school.startYear}-{school.endYear}
                </p>
            </div>
            <p className="school-subject">
                Subject: {school.subject}
            </p>
        </div>
    );
}
