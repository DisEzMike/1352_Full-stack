import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCloudUpload } from "@fortawesome/free-solid-svg-icons"
import React from "react";

import './nav.css'

export default function Navbar() {
  return (
    <nav>
      <span className="media-keep">MEDIA KEEP</span>
      <div className="actions">
        <div className="home">
          <FontAwesomeIcon icon={faHouse} />
          <span>หน้าแรก</span>
        </div>
        <div className="upload">
        <FontAwesomeIcon icon={faCloudUpload} />
          <span>อัพโหลด</span>
        </div>
      </div>
    </nav>
  );
}
