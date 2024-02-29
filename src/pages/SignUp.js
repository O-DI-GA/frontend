import React from "react";
import "../css/SignUp.css";
import Button from "@mui/material/Button";

function SignUp() {
  return (
    <div>
      <div className="SignUp">
        <h1 className="SignUp-txt">회원 가입</h1>
        <div className="SignUp-Container">
          <form className="SignUp-Form">
            <div className="formBox">
              <label className="inputLabel">아이디</label>
              <input type="text" id="id" name="id" className="signUpInputBox" />
            </div>
            <div className="formBox">
              <label htmlFor="password" className="inputLabel">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="signUpInputBox"
              />
            </div>
            <div className="formBox">
              <label htmlFor="checkPassword" className="inputLabel">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="checkPassword"
                name="checkPassword"
                className="signUpInputBox"
              />
            </div>
            <div className="formBox">
              <label htmlFor="nickname" className="inputLabel">
                닉네임
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                className="signUpInputBox"
              />
            </div>
            <div className="formBox">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#6C8EF4",
                  fontSize: "18px",
                  color: "white",
                  marginTop: "20px",
                  width: "150px",
                  height: "40px",
                  borderRadius: "30px",
                  ":hover": {
                    backgroundColor: "#5a76d4",
                  },
                }}
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
