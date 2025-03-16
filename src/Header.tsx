import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import { Logout } from "./Signout";
import { FC } from "react";

export const Header: FC = () => {
  const { user, loading } = useAuth();

  console.log(`ユーザー：${user} @Header`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="bg-green-200 mb-4 p-4 border shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-lg font-bold">マッスル食事管理アプリ</h1>
        {user ? (
          <div>
            <Link
              to="/editprofile"
              className="active:translate-y-1 active:shadow-inner hover:bg-green-300 p-4 text-sm rounded-lg flex justify-items-end"
            >
              プロフィール登録/更新
            </Link>
            <Logout />
          </div>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
};
