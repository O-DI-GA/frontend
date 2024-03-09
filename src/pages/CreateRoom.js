import React from "react";
import "../css/CreateRoom.css";
import cancel from "../asset/cancel.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import searchImage from "../asset/searchImage.png";
import Button from "@mui/material/Button";

function CreateRoom() {
  const handleSearchClick = () => {
    // 돋보기 버튼 눌렀을때 친구 목록 띄우기
  };
  return (
    <div>
      <div className="createRoom">
        <form className="createRoomForm">
          <div className="createRoomTitle">
            <h2>방 생성하기</h2>
            <img src={cancel} alt="cancel img" className="cancelImg" />
          </div>
          <div className="formBox">
            <label className="inputLabel">여행 이름</label>
            <TextField
              id="tripName"
              name="tripName"
              variant="outlined"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                width: "80%",
                ".MuiInputBase-input": {
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#F0F2F9",
                  height: "20px",
                  padding: "10px 20px",
                },
                ".MuiOutlinedInput-root": {
                  "& > fieldset": { border: "none" },
                },
              }}
            />
          </div>
          <div className="formBox">
            <label className="inputLabel">여행 기간</label>
            <input
              type="number"
              id="tripPeriodNight"
              name="tripPeriodNight"
              className="tripPeriodInputBox"
            />
            박
            <input
              type="number"
              id="tripPeriodDay"
              name="tripPeriodDay"
              className="tripPeriodInputBox"
            />
            일
          </div>
          <div className="formBox">
            <label className="inputLabel">여행 날짜</label>
            <div className="checkboxContainer">
              <div className="checkboxRow">
                {Array.from({ length: 6 }, (_, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        className="checkboxStyle"
                        value={`${index + 1}월`}
                      />
                    }
                    label={`${index + 1}월`}
                  />
                ))}
              </div>
              <div className="checkboxRow">
                {Array.from({ length: 6 }, (_, index) => (
                  <FormControlLabel
                    key={index + 6}
                    control={
                      <Checkbox
                        className="checkboxStyle"
                        value={`${index + 7}월`}
                      />
                    }
                    label={`${index + 7}월`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="formBox">
            <label className="inputLabel inviteLabel">인원 초대</label>
            <div>
              <div className="inviteContainer">
                <div className="inviteInputContainer">
                  <input
                    type="text"
                    id="invite"
                    name="invite"
                    className="inviteInput"
                  />
                  <button className="searchButton" onClick={handleSearchClick}>
                    <img
                      src={searchImage}
                      alt="Search"
                      className="searchIcon"
                    />
                  </button>
                </div>

                <div className="linkInviteContainer">
                  <p>링크로 초대하기 </p>
                  <p>url/asdfaiosjf/asdfasdf/asf/asd/fasd/fasf</p>
                  <p className="linkCopy">링크 복사하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className="formBox buttonContainer">
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
              등록
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
