import { useCvContext } from "./CvContextProvider";

import "@styles/cv-viewer.css";

export function CvViewer() {
  const { data } = useCvContext();

  return (
    <div id="cv-viewer">
      <div className="sidebar"></div>
      <div className="main"></div>
    </div>
  );
}
