import { Link } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <div className="NavBox">
      <div className="nav-item">
        <Link className="nav" to="/Friend">친구</Link>
      </div>
      <div className="nav-item">
        <Link className="nav" to="/Chating">채팅</Link>
      </div>
      <div className="nav-item">
        <Link className="nav" to="/TeamChating">팀채팅</Link>
      </div>
      <div className="nav-item">
        <Link className="nav" to="/SpotFriend">직관프렌드</Link>
      </div>
    </div>
  );
}
