import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCloudUpload } from "@fortawesome/free-solid-svg-icons"
import React from "react";
export default function Navbar() {
  return (
    <nav>
      <span className="media-keep">MEDIA KEEP</span>
      <div className="actions">
        <div className="home">
          {/* <div className="home-1" />  */}
          <FontAwesomeIcon icon={faHouse} />
          <span className="page-home">หน้าแรก</span>
        </div>
        <div className="upload">
        <FontAwesomeIcon icon={faCloudUpload} />
          <span className="span-upload">อัพโหลด</span>
        </div>
      </div>
    </nav>
  );
}
