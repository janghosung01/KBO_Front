import axios from "axios";
import { useNavigate } from "react-router-dom";


export const LoginApi = async (id, pw) => {
const navigate=useNavigate();
    try{
  const result = await axios.post( // 자동로그인 access 접근
    "http~~",
    {
      id,
      pw,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }

  );
    }
    catch(error){
        if(error.response.status===401){ // 자동로그인 access 재발급
            try {
            const refreshResult =getNewRefresh();
            const accessToken=result.accessToken;
            localStorage.setItem("accessToken",accessToken);                
            
        } catch (error) {
            alert("세션이 만료됌");
            navigate("/login")
            }



        }
    }
  return result.data;
};
