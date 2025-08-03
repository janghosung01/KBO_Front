import { useForm } from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
export function Login() {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();

  const navigate = useNavigate();
  const handle = async (e) => {
    e.preventDefault();
    try {
      const apiData = await axios.post("asd", { id, pw });
      const { accessToken, refreshToken } = apiData.token;

      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      console.log("로그인 성공");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="formSet" onSubmit={handle}>
        <div className="sec1">
          <div>
            <label htmlFor="id">ID</label>
            <input
              id="id"
              type="text"
              placeholder="Id"
              value={id}
              onChange={onChangeId}
            />
          </div>
          <div>
            <label htmlFor="pw">PW</label>
            <input
              id="pw"
              type="password"
              placeholder="Pw"
              value={pw}
              onChange={onChangePw}
            />
          </div>
        </div>
        <button className="btn " type="submit">
          login
        </button>
      </form>
    </>
  );
}
