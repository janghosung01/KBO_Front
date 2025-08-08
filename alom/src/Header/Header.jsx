import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="headerContainer">
      <h1 className="leftSection title"><img src="/logo.svg" alt="크볼래 로고" /> <p>크볼래</p> </h1>

      <div className="rightSection">
        <Link className="link" to="/">홈</Link>
        <Link className="btn" to="/MyPage">마이페이지</Link>
        <Link className="btn" to="/Login">로그인</Link>
        <Link className="btn" to="/Option">설정</Link>
      </div>

    </div>
  );
}




