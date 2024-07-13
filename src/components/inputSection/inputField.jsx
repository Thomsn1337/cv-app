/* eslint-disable react/prop-types */
import "../../styles/inputField.css";

export default function InputField({ name, id, type, startValue = "" }) {
    return (
        <div className="input-field">
            <label htmlFor={id}>{name}</label>
            {type === "textarea" ? (
                <textarea name={id} id={id} defaultValue={startValue}></textarea>
            ) : (
                <input type={type} name={id} id={id} defaultValue={startValue} />
            )}
        </div>
    );
}
