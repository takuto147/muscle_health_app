import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// Contextを作成
const AuthContext = createContext<{ user: User | null; loading: boolean }>({
  user: null,
  loading: true,
});
// 子コンポーネントの型定義
type AuthProviderProps = {
  children: ReactNode;
};


// AuthProviderコンポーネント
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // ログインしている場合はuser情報をセット
      setLoading(false); // 読み込みが終わったのでloadingをfalseに
    });

    // クリーンアップ
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// コンポーネント内でユーザー情報を取得するカスタムフック
export const useAuth = () => useContext(AuthContext);
