import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Header/Header"; // 헤더수정

import { Home } from "./Page/Home";
import { Login } from "./Page/Login";                             
import { MyPage } from "./Page/MyPage";
import { Option } from "./Page/Option";
import { AttCheck } from "./Components/AttCheck";
import { Friend } from "./Page/Friend/Friend";
import { SpotFriend } from "./Page/SpotFriend/SpotFriend";
import { TeamChating } from "./Page/TeamChating/TeamChating";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userNmae, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLogin(!!token); // 토큰 있으면 로그인 상태
  }, []);
  return (
    <BrowserRouter>
      <div className="MainContainer">

        <div className="HeaderBar">
          <Header />
        </div>
        <div className="PageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Option" element={<Option />} />
            <Route path="/AttCheck" element={<AttCheck/>} />
            <Route path="/Friend" element={<Friend />} />
            <Route path="/SpotFriend" element={<SpotFriend />} />
            <Route path="/TeamChating" element={<TeamChating />} />          
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
