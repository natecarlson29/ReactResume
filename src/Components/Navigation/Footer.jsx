import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faEnvelope, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <p><FontAwesomeIcon icon={faEnvelope} /> <a href='mailto:ncarlson29@gmail.com'>ncarlson29@gmail.com</a></p>
    </footer>
  );
}

export default Footer;