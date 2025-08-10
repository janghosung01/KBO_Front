import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footerContainer">
      <h1 className=" title footerLogo">
        <img src="/logo.svg" alt="크볼래 로고" /> <p>크볼래</p>{" "}
      </h1>
      <div className="footerInfosec">
        <div className="footerService">
          <p className="ftTile">서비스</p>
          <Link className="ftText" to="/AttCheck"> 
                출석체크
              </Link>
              <Link className="ftText" to="/SpotFriend">
                직관프렌드
              </Link>
              <Link className="ftText" to="/TeamChating">
                팀채팅
              </Link>

        </div>
        <div className="footerSocial">
          <p className="ftTile">소셜 미디어</p>

          
              <Link className="ftText" to="/">
                Instagram
              </Link>
              
              <Link className="ftText" to="/">
              Facebook
              </Link>
        </div>
      </div>
    </div>
  );
}




