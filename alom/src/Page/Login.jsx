
// import "./Login.css";
// export function Login() {

//   const kakaoLogin = () => {
//   const REST_KEY = '3f5190783359806b42b350aa27b67e93' //import.meta.env.VITE_KAKAO_REST_KEY; // .env 권장
//   const REDIRECT_URI = 'http://localhost:5173/Login';  // 콘솔에 동일하게 등록 
//   const url =
//     `https://kauth.kakao.com/oauth/authorize` +
//     `?response_type=code` +
//     `&client_id=${REST_KEY}` +
//     `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
//     `&state=${crypto.randomUUID()}`; // 옵션(위조방지) 

//   window.location.href = url;        // ✅ axios가 아니라 페이지 이동  window.open(url, '_self') 팝업하려명 이거사용
// };

//   return (
//     <>
//       <button onClick={kakaoLogin} color="blue">kko</button>
      
//     </>
//   );
// }










import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [sp] = useSearchParams();
  const navigate = useNavigate();

  const REST_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const kakaoLogin = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_KEY}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${crypto.randomUUID()}`;
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




        if (data.accessToken) localStorage.setItem("accessToken", data.accessToken);
        navigate("/");
      } catch {
        alert("카카오 로그인 실패");
        navigate("/Login");
      }
    })();
  }, []);

  return <button onClick={kakaoLogin}>카카오로 로그인</button>;
}
