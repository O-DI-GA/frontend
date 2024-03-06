import React from "react";
import headerLogo from "../asset/ODIGA_LOGO.png";
import headerTextLogo from "../asset/ODIGA_TEXT_LOGO.png";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={headerLogo} alt="Header Logo" className="logo" />
        <img src={headerTextLogo} alt="Header Text Logo" className="textLogo" />
      </div>
      <div>
        <a href="/login" className="link">
          로그인
        </a>
        <a href="/signup" className="link">
          회원가입
        </a>
      </div>
    </header>
  );
}

export default Header;
