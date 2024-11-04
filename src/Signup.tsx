import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onSignup = () => {

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log(userCredential.user);
        console.log(userCredential.user.email);
        const user = userCredential.user
        console.log(`ユーザー情報：${user}`);
      })
      .catch((error) => {
        setErrorMessage(`サインアップに失敗 ${error}`)
      })

  }

  return (
    <div>
      <h3>アカウント作成</h3>
      {errorMessage && (
        <p className="">{errorMessage}</p>
      )}
      <label className="">メールアドレス</label>
      <br />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label className="">パスワード</label>
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={onSignup}>
        作成
      </button>
    </div>
  );
};

