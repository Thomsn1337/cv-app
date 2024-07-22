/* eslint-disable react/prop-types */

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "./inputField";
import YearPicker from "./yearPicker";

import "../../styles/educationForm.css"

function EducationForm({ data, setData, school, initialEdit = false }) {
    const [edit, setEdit] = useState(initialEdit);

    function handleDelete(id) {
        const education = data.education.filter((school) => school.id !== id);
        setData({ ...data, education });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { education } = data;
        let target = education.find((item) => item.id === school.id);

        const formData = new FormData(e.currentTarget);
        const newData = {};

        for (let pair of formData.entries()) {
            newData[pair[0]] = pair[1];
        }

        Object.assign(target, newData);

        setData({ ...data, education });
        setEdit(false);
    }

    const preview = (
        <>
            <ul key={school.id}>
                <li>Name: {school.name}</li>
                <li>Subject: {school.subject}</li>
                <li>Started: {school.startYear}</li>
                <li>Finished: {school.endYear}</li>
            </ul>
            <div className="buttons">
                <button onClick={() => setEdit(true)}>Edit</button>
                <button
                    onClick={() => {
                        handleDelete(school.id);
                    }}>
                    Delete
                </button>
            </div>
        </>
    );

    const form = (
        <form action="#" onSubmit={handleSubmit}>
            <InputField
                name="School name"
                id="name"
                type="text"
                startValue={school.name}
            />
            <InputField
                name="Subject"
                id="subject"
                type="text"
                startValue={school.subject}
            />
            <div className="year-inputs">
                <YearPicker
                    name="Start year"
                    id="startYear"
                    startValue={school.startYear}
                />
                <YearPicker
                    name="End year"
                    id="endYear"
                    startValue={school.endYear}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );

    return <div className="education-item">{edit ? form : preview}</div>;
}

function NewItemForm({ data, setData, setNewItem }) {
    function handleSubmit(e) {
        e.preventDefault();

        const { education } = data;

        const formData = new FormData(e.currentTarget);
        const newData = {};

        for (let pair of formData.entries()) {
            newData[pair[0]] = pair[1];
        }

        newData.id = uuidv4();
        education.push(newData);

        setData({ ...data, education });
        setNewItem(false);
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <InputField name="School name" id="name" type="text" />
            <InputField name="Subject" id="subject" type="text" />
            <div className="year-inputs">
                <YearPicker name="Start year" id="startYear" />
                <YearPicker name="End year" id="endYear" />
            </div>
            <div className="buttons">
                <button type="submit">Save</button>
                <button onClick={() => setNewItem(false)}>Cancel</button>
            </div>
        </form>
    );
}

export default function EducationSection({ data, setData }) {
    const [newItem, setNewItem] = useState(false);
    return (
        <>
            {data.education.map((school) => (
                <EducationForm
                    data={data}
                    setData={setData}
                    school={school}
                    key={school.id}
                />
            ))}
            {newItem ? (
                <NewItemForm
                    data={data}
                    setData={setData}
                    setNewItem={setNewItem}
                />
            ) : (
                <button className="new-item" onClick={() => setNewItem(true)}>Add new item</button>
            )}
        </>
    );
}
