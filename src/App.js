import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";

import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
