import React, { useState } from "react";
import "../css/ReadyRoom.css";
import defaultImg from "../asset/defaultImg.png";
import chatImg from "../asset/chat.png";
import calImg from "../asset/임시 캘린더 이미지.PNG"; // 나중에 캘린더 컴포넌트 넣기
import Button from "@mui/material/Button";

function ReadyRoom() {
  return (
    <div className="readyRoom">
      <div className="shareCalendar">
        <div className="shareCalendarTitle">
          <h2>공유캘린더</h2>
          <p>합쳐진 캘린더로 일정을 한 눈에 비교하세요</p>
        </div>
        {/* 캘린더 컴포넌트 */}
        <img src={calImg} className="calendarConponent" />
      </div>
      <div className="attendedPeople">
        <div className="attendedPeopleTitle">
          <h2>현재 참석한 인원</h2>
        </div>
        <div className="attendedPeopleContainer">
          <div className="personContainer">
            <img src={defaultImg} alt="profileImg" className="profileImg" />
            <h3>홍길동</h3>
          </div>
          <div className="personContainer">
            <img src={defaultImg} alt="profileImg" className="profileImg" />
            <h3>김철수</h3>
          </div>
          <div className="personContainer">
            <img src={defaultImg} alt="profileImg" className="profileImg" />
            <h3>홍길동</h3>
          </div>
          <div className="personContainer">
            <img src={defaultImg} alt="profileImg" className="profileImg" />
            <h3>김철수</h3>
          </div>
          <div className="personContainer">
            <img src={defaultImg} alt="profileImg" className="profileImg" />
            <h3>김철수</h3>
          </div>
        </div>

        <div className="buttonContainer">
          <Button
            sx={{
              backgroundColor: "#6C8EF4",
              color: "#FFFFFF",
              width: "400px",
              height: "70px",
              fontSize: "20px",
            }}
          >
            여행 시작하기
          </Button>
          <Button>
            <img src={chatImg} alt="chatImg" className="chatImg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReadyRoom;
