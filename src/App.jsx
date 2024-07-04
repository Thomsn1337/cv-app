import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

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

library.add(fab, fas, far);
