import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase";

export const Logout = () => {
  const auth = getAuth(app);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("ログアウト成功");
    } catch (error) {
      alert("ログアウトに失敗しました" );
    }
  };

  return <button onClick={handleLogout} className='active:translate-y-1 active:shadow-inner hover:bg-green-300 p-4 text-sm rounded-lg flex justify-items-end'>ログアウト</button>;
};
