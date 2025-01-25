import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCloudUpload } from "@fortawesome/free-solid-svg-icons"
import React from "react";

import './nav.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">MEDIA KEEP</Link>
      <div className="actions">
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <Link to="/">หน้าแรก</Link>
        </div>
        <div>
        <FontAwesomeIcon icon={faCloudUpload} />
          <Link to="/upload">อัพโหลด</Link>
        </div>
      </div>
    </nav>
  );
}
