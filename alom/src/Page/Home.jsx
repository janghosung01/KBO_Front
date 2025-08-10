import { TodaytMatch } from "./Homepage/TodayMatch";
import { TodayQuiz } from "./Homepage/TodayQuiz";
import { MyInfo } from "./Homepage/MyInfo";

import { Link } from "react-router-dom";

import "./Home.css";
export function Home() {
  return (
    <>
      <div className="container">
        <div className="section1">
          <div className="sec1sec1">
            <MyInfo />
          </div>
          <div className="sec1sec2">
            <TodaytMatch />
          </div>
          <div className="sec1sec3">
            <TodayQuiz />
          </div>
        </div>
        <div className="section2">
          <div className="sec2sec1">
            <div className="nav-item">
              <Link className="nav" to="/AttCheck"> 
                출석체크
              </Link>
            </div>
          </div>

          <div className="sec2sec2">
            <div className="nav-item">
              <Link className="nav" to="/SpotFriend">
                직관프렌드
              </Link>
            </div>
          </div>

          <div className="sec2sec3">
            {" "}
            <div className="nav-item">
              <Link className="nav" to="/TeamChating">
                팀채팅
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
