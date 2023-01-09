import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //서버와 연결전 테스트용 더미데이터
  const realId = "postmelon@naver.com";
  const realPw = "12345678";

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  //유효성 검사를 하여 통과할 경우 로그인 버튼 활성화
  /**아이디에 '@'가 포함되어있고 비밀번호가 5자리 이상일 떄 로그인 버튼 활성화 */
  function changeButton() {
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <input
              placeholder="사용자 이름 또는 이메일"
              id="id"
              className="h-12 rounded-md relative bg-black px-6 font-semibold text-white"
              onChange={(e) => {
              setId(e.target.value);
              }}
              onKeyUp={changeButton}
              />

            </div>
          </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <input
                    type="password"
                    placeholder="비밀번호"
                    id="password"
                    className="h-12 rounded-md bg-black px-6 font-semibold text-white"
                    onChange={(e) => {
                    setPw(e.target.value);
                    }}
                    onKeyUp={changeButton}
                    />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <button
                    type="button"
                    className="ml-16 mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    disabled={button}
                    onClick={(e) => {
                      if (realId === id) {
                      if (realPw === pw) {
                        e.stopPropagation();
                        goToHome();
                      }
                      } else {
                        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
                      }
                      }}
                      >
                      Login
                  </button>
                </div>
              </div>
              <div className="p-2 w-1/2 ml-24">
              <Link to="/signup">회원가입</Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
