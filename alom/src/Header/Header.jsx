import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="headerContainer">
      <h1 className="leftSection Tilte">크볼래?</h1>

      <div className="rightSection">
        <Link className="link" to="/">홈</Link>
        <Link className="btn" to="/MyPage">마이페이지</Link>
        <Link className="btn" to="/Login">로그인</Link>
        <Link className="btn" to="/Option">설정</Link>
      </div>

    </div>
  );
}
