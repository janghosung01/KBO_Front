import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

export function Login() {
  const [sp] = useSearchParams();
  const navigate = useNavigate();

  const REST_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const kakaoLogin = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_KEY}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&state=${crypto.randomUUID()}`;
    window.location.href = url;
  };

  useEffect(() => {
    const code = sp.get("code");

    if (!code) return; // 코드가 없으면 버튼 화면 유지
    console.log(code);
    (async () => {
      try {
        const { data } = await axios.post(
          `/auth/kakao/login`,
          { code },
          { withCredentials: true }
        );
        //////여기서 백앤드가 토큰 주면 로그인 시키고 토큰 저장

        // /auth/kakao/register

        ////// 여기서 백앤드가 정보없다고 회원가입하라 그러면 첫 정보입력
        console.log(data);

        if (data.accessToken)
          localStorage.setItem("accessToken", data.accessToken);
        navigate("/");
      } catch {
        alert("카카오 로그인 실패");
        navigate("/Login");
      }
    })();
  }, []);

  return (
    <div className="logincontainer">
      <div className="logoSet">        
        <img src="/logo.svg" alt="크볼래 로고" className="logo loginlogo" /> <p>크볼래</p></div>

<div className="kakaoBtncontainer">
      <button onClick={kakaoLogin} className="kakao-btn">
  <img
    src="/kakao_login_large_narrow.png"
    alt="카카오 로그인"
    className="kakao-img"
  />
</button>
</div>
    </div>
  );
}
