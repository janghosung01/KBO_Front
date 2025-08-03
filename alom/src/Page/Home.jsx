
import { TodaytMatch } from "./Homepage/TodayMatch";
import { TodayQuiz } from "./Homepage/TodayQuiz";
import { MyInfo } from "./Homepage/MyInfo";

import { Announce } from "./Homepage/Announce";
import "./Home.css";
export function Home() {
  return (
    <>

      <div className="container">
        <div className="section section2">
          <TodaytMatch />
        </div>
        <div className="section section3">
          <TodayQuiz />          
        </div>
        <div className="section section4">
          <TodayQuiz /> 
        </div>
        <div className="section section5">
          <MyInfo />
        </div>
        <div className="section section6">
          <Announce />
          
        </div>
      </div>
    </>
  );
}
