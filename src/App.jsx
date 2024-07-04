import { useState } from "react";
import CVViewer from "./components/cvViewer";
import exampleData from "./exampleData";
import "./styles/app.css";

export default function App() {
    const [data, setData] = useState(exampleData);
    return (
        <>
            <CVViewer cvData={data} />
        </>
    );
}
