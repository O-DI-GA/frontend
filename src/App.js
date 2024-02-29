import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
