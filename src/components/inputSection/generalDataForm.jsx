/* eslint-disable react/prop-types */
import InputField from "./inputField";
import "../../styles/form.css";

export default function GeneralDataForm({ currentData, setData }) {
    function handleFormSubmit(e) {
    }

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <h2>General information</h2>
            <div className="input-group">
                <InputField
                    name="First name"
                    id="firstname"
                    type="text"
                    startValue={currentData.general.firstName}
                />
                <InputField
                    name="Last name"
                    id="lastname"
                    type="text"
                    startValue={currentData.general.lastName}
                />
            </div>
            <div className="input-group">
                <InputField
                    name="Birth date"
                    id="dateOfBirth"
                    type="date"
                    startValue={currentData.general.dateOfBirth}
                />
                <InputField
                    name="Location"
                    id="location"
                    type="text"
                    startValue={currentData.general.location}
                />
            </div>
            <div className="input-group">
                <InputField
                    name="Phone number"
                    id="phone"
                    type="tel"
                    startValue={currentData.general.phone}
                />
                <InputField
                    name="Email"
                    id="email"
                    type="email"
                    startValue={currentData.general.email}
                />
            </div>
            <InputField
                name="Title"
                id="title"
                type="text"
                startValue={currentData.general.title}
            />
            <InputField
                name="About me"
                id="about"
                type="textarea"
                startValue={currentData.general.about}
            />

            <button type="submit">Save</button>
        </form>
    );
}
