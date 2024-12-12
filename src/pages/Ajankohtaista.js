import React from "react";
import styles from "../styles/ajankohtaista.css";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons
import Button from 'react-bootstrap/Button';

function Info() {
  return (
    <div className="home-container">
<Button variant="info" size="lg">Hinnasto</Button>

<p>Seuraa meitä somessa</p>
<div className="social-links">
        <a
          href="https://www.facebook.com/salonfooni/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link facebook"
        >
          <FaFacebook size={40} /> {/* Facebook Icon */}
        </a>

        <a
          href="https://www.instagram.com/salonfooni/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <FaInstagram size={40} /> {/* Instagram Icon */}
        </a>
      </div>
    </div>
  );
}

export default Info;
