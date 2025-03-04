import { MapPin, Phone, Calendar, Mail } from "lucide-react";

import { useCvContext } from "./CvContextProvider";

import "@styles/cv-viewer.css";

export function CvViewer() {
  const { data } = useCvContext();

  return (
    <div id="cv-viewer">
      <div className="sidebar">
        <div className="section name-info">
          <div className="picture">
            <img src={data.general.picture} alt="Profile picture" />
          </div>

          <div className="name">
            <h2>
              {data.general.firstname} {data.general.lastname}
            </h2>
            <p>{data.general.title}</p>
          </div>
        </div>

        <div className="section profile">
          <h2>Profile</h2>
          <ul>
            <li>
              <Calendar /> <span>{data.general.dateOfBirth}</span>
            </li>
            <li>
              <MapPin /> <span>{data.general.address}</span>
            </li>
            <li>
              <Phone /> <span>{data.general.phone}</span>
            </li>
            <li>
              <Mail /> <span>{data.general.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}
