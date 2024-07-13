/* eslint-disable react/prop-types */
import GeneralDataForm from "./inputSection/generalDataForm";

export default function InputSection({ currentData, setData }) {
    return (
        <div className="input-section">
            <GeneralDataForm currentData={currentData} setData={setData} />
        </div>
    );
}
