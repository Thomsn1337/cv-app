import InputField from "./inputField";
import YearPicker from "./yearPicker";

export default function EducationForm() {
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        console.log(formData)
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <InputField name="School name" id="name" type="text" />
            <InputField name="Subject" id="subject" type="text" />
            <YearPicker name="Starting year" id="startYear" />
            <YearPicker name="Graduation year" id="endYear" />

            <button type="submit">Save</button>
        </form>
    );
}
