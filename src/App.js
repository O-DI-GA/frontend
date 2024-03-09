import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import CreateRoom from "./pages/CreateRoom";

import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/start" element={<Start />} />
        <Route path="/createroom" element={<CreateRoom />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
