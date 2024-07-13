/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/dropdown.css";

export default function Dropdown({ title, isActive, onShow, children }) {
    return (
        <div className="dropdown">
            <button className="header" onClick={onShow}>
                <h2>{title}</h2>
                <FontAwesomeIcon
                    icon={
                        isActive
                            ? "fa-solid fa-caret-up"
                            : "fa-solid fa-caret-down"
                    }
                />
            </button>
            {isActive && <div className="content">{children}</div>}
        </div>
    );
}
