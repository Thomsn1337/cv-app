/* eslint-disable react/prop-types */
import { useState } from "react";
import Dropdown from "./dropdown";
import GeneralDataForm from "./inputSection/generalDataForm";
import EducationSection from "./inputSection/educationForm";

export default function InputSection({ currentData, setData }) {
    const [activeField, setActiveField] = useState(null);

    return (
        <div className="input-section">
            <Dropdown
                title="General information"
                isActive={activeField === 0}
                onShow={() => setActiveField(activeField !== 0 ? 0 : null)}>
                <GeneralDataForm currentData={currentData} setData={setData} />
            </Dropdown>

            <Dropdown
                title="Education"
                isActive={activeField === 1}
                onShow={() => setActiveField(activeField !== 1 ? 1 : null)}>
                <EducationSection data={currentData} setData={setData} />
            </Dropdown>
        </div>
    );
}
