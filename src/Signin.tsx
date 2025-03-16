import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Header } from "./Header";
import { app } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const onSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`ユーザー情報：${user}`);
        alert("サインイン完了");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(`サインインに失敗 ${error.message}`);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h3 className="text-lg font-bold">サインイン</h3>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <label className="text-sm font-semibold">メールアドレス</label>
      <br />
      <input
        type="email"
        className="rounded-lg border border-gray-200"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label className="text-sm font-semibold">パスワード</label>
      <br />
      <input
        type="password"
        className="rounded-lg border border-gray-200"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mt-3"
        onClick={onSignin}
      >
        サインイン
      </button>
      <br />
      <br />
      <label className="text-sm font-semibold">
        アカウントが無い方はこちら
      </label>
      <br />
      <br />
      <Link
        to="/signup"
        className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mt-3"
      >
        新規作成
      </Link>
    </div>
  );
};
