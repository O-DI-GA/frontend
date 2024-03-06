import React from "react";
import "../css/Footer.css";
import footerTextLogo from "../asset/ODIGA_TEXT_LOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={footerTextLogo}
        alt="footerTextLogo"
        className="footerTextLogo"
      />
      <p className="gitAddr">https://github.com/O-DI-GA</p>
    </footer>
  );
}

export default Footer;
