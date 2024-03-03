import React from "react";
import styled from "styled-components";

import { TextField, Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import kakaoLogo from "../asset/kakao_logo.png";

function Login() {
    return (
        <LoginPage>
            <LoginHeader>
                <h2> 로그인 </h2>
            </LoginHeader>
            <LoginContainer>
                <div>
                    <LoginTextField
                        fullWidth
                        id="filled-basic"
                        size="small"
                        label="아이디"
                        variant="outlined"
                    />
                    <LoginTextField
                        fullWidth
                        id="filled-basic"
                        size="small"
                        label="비밀번호"
                        variant="outlined"
                    />
                    <LoginButton fullWidth variant="outlined">
                        로그인
                    </LoginButton>
                    <ThemeProvider theme={theme}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="ochre"
                            startIcon={<KakaoLogo />}
                            sx={{ margin: "10px" }}
                            disableElevation={true}>
                            카카오 계정으로 시작하기
                        </Button>
                    </ThemeProvider>
                </div>
                <div>
                    <p>
                        아직 회원이 아니신가요?
                        <span>
                            <Link
                                href="/signup"
                                underline="none"
                                sx={{ color: "#6c8ef4" }}>
                                회원가입 하러가기
                            </Link>
                        </span>
                    </p>
                </div>
            </LoginContainer>
        </LoginPage>
    );
}

export function KakaoLogo() {
    return (
        <>
            <img
                src={kakaoLogo}
                alt="Kakao Logo"
                style={{ width: "20px", height: "20px", margin: "3px" }}
            />
        </>
    );
}

// styled-components
const LoginPage = styled.div`
    background-color: #f0f2f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const LoginHeader = styled.div`
    margin-top: 100px;
`;

const LoginContainer = styled.div`
    background-color: #ffffff;
    width: 30%;
    margin: 50px 100px;
    padding: 50px 80px;
    border-radius: 20px;
`;

const LoginTextField = styled(TextField)`
    && {
        input {
            background-color: #f0f2f9;
            border-radius: 10px;
        }
        fieldset {
            display: none;
        }
        margin: 10px;
    }
`;

const LoginButton = styled(Button)`
    && {
        margin: 10px;
        color: #6c8ef4;
        border-color: #6c8ef4;
    }
`;

const theme = createTheme({
    palette: {
        ochre: {
            main: "#FDDC3F",
            contrastText: "#242105",
        },
    },
});

export default Login;
