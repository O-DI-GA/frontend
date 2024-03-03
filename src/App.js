import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Start from "./pages/Start";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/start" element={<Start />} />
            </Routes>
        </div>
    );
}

export default App;
