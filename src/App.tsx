import { CvViewer } from "@components/CvViewer";
import { CvContextProvider } from "@components/CvContextProvider";

import "@styles/App.css";

export default function App() {
  return (
    <CvContextProvider>
      <CvViewer />
    </CvContextProvider>
  );
}
