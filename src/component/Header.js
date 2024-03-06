import React from "react";
import headerLogo from "../asset/ODIGA_LOGO.png";
import headerTextLogo from "../asset/ODIGA_TEXT_LOGO.png";
import notification from "../asset/notification.png";
import defaultImg from "../asset/defaultImg.png";
import "../css/Header.css";

function Header() {
  const isLoggedIn = false; // 테스트용 변수
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={headerLogo} alt="Header Logo" className="logo" />
        <img src={headerTextLogo} alt="Header Text Logo" className="textLogo" />
      </div>

      {isLoggedIn ? (
        // 로그인 후 헤더
        <div className="iconContainer">
          <img src={notification} alt="notification" className="icon" />
          <img src={defaultImg} alt="profileImg" className="icon" />
          <h3>이름 님</h3>
        </div>
      ) : (
        // 로그인 전 헤더
        <>
          <div>
            <a href="/login" className="link">
              로그인
            </a>
            <a href="/signup" className="link">
              회원가입
            </a>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
