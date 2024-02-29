import React from "react";
import "../css/Start.css";
import Button from "@mui/material/Button";
import start1 from "../asset/start1.png"; // 사진 나중에 실제 화면 사진으로 바꾸기!!
import start2 from "../asset/start2.png";
import start3 from "../asset/start3.png";
import start4 from "../asset/start4.png";

// 중복되는 버튼 스타일 객체
const commonButtonStyle = {
  backgroundColor: "#6C8EF4",
  fontSize: "18px",
  color: "white",
  marginTop: "20px",
  width: "130px",
  height: "40px",
  borderRadius: "30px",
  ":hover": {
    backgroundColor: "#5a76d4",
  },
};

function SignUp() {
  return (
    <div className="start">
      <h2 className="startText">
        친구들과 일정을 공유하고 최적의 여행지를 찾아보세요.
      </h2>
      <div className="ButtonBox">
        <Button type="submit" variant="contained" sx={commonButtonStyle}>
          로그인
        </Button>
        <Button type="submit" variant="contained" sx={commonButtonStyle}>
          회원가입
        </Button>
      </div>
      <h2 className="startText">일정 공유</h2>
      <p className="startText">
        친구들과 일정을 공유해 여행 날짜를 쉽게 정해보세요
      </p>
      <div className="imgContainer">
        <img src={start1} alt="calendar" className="startImg" />
        <img src={start2} alt="vote" className="startImg" />
      </div>
      <h2 className="startText">여행지 추천</h2>
      <p className="startText">
        여행 갈 지역과 테마를 선택해 여행지를 추천받고, 최적의 동선으로 여행을
        해보세요
      </p>
      <div className="imgContainer">
        <img src={start3} alt="recommend" className="startImg" />
        <img src={start4} alt="path" className="startImg" />
      </div>
      <h2 className="startText">지금 시작하기</h2>
      <div className="ButtonBox">
        <Button type="submit" variant="contained" sx={commonButtonStyle}>
          로그인
        </Button>
        <Button type="submit" variant="contained" sx={commonButtonStyle}>
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
