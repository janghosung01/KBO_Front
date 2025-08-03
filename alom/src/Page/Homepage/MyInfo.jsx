import "./MyInfo.css";
export function MyInfo() {
  return (
       <div className="InfoCard">
      <h3 className="info-title">내 응원팀</h3>
      <div className="team-emoji">🦅</div>
      <p>***님</p>
      <p>롯데자이언츠</p>
      <p>포인트</p>
      <p>출석체크</p>
      <p className="team-name">LG 트윈스</p>
      <button className="team-button">팀 채팅방 입장</button>
    </div>
  );
}


