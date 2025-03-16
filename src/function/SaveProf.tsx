import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";

export const SaveProf = async (height: number, weight: number, age: number) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("ユーザーがログインしていません");
  }

  const userDocRef = doc(db, "users", user.uid);
  //　固定ID"profile"で登録
  const profileDocRef = doc(userDocRef, "profs", "profile");

  try {
    // 既存のプロフィールデータを確認
    const profileSnap = await getDoc(profileDocRef);

    if (profileSnap.exists()) {
      // 既存データがあれば更新
      await updateDoc(profileDocRef, {
        height,
        weight,
        age,
      });
      console.log("プロフィールを更新しました");
    } else {
      // 初回登録（新規追加）
      await setDoc(profileDocRef, {
        height,
        weight,
        age,
      });
      console.log("新しいプロフィールを登録しました");
    }
  } catch (error) {
    console.error("プロフィールの保存に失敗しました", error);
  }
};
