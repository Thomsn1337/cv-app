/* eslint-disable react/prop-types */
import { useState } from "react";
import Dropdown from "./dropdown";
import GeneralDataForm from "./inputSection/generalDataForm";

export default function InputSection({ currentData, setData }) {
    const [activeField, setActiveField] = useState(null);

    return (
        <div className="input-section">
            <Dropdown
                title="General information"
                isActive={activeField === 0}
                onShow={() => setActiveField(activeField === null ? 0 : null)}>
                <GeneralDataForm currentData={currentData} setData={setData} />
            </Dropdown>
        </div>
    );
}
