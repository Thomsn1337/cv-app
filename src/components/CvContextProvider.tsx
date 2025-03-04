import React, { createContext, ReactNode, useContext, useState } from "react";
import { exampleData, type CvData } from "../cv-data";

interface CvContextType {
  data: CvData;
  setData: React.Dispatch<React.SetStateAction<CvData>>;
}

interface Props {
  children: ReactNode;
}

const CvContext = createContext<CvContextType | undefined>(undefined);

export function CvContextProvider({ children }: Props) {
  const [data, setData] = useState(exampleData);

  return (
    <CvContext.Provider value={{ data, setData }}>
      {children}
    </CvContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCvContext() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error(
      "CvContext not available. useCvContext must be used inside a child of a CvContextProvider component"
    );
  }

  return context;
}
