import { doc, collection, getDoc } from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";

export const LoadMeal = async (
  selectedDate: string
) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("ユーザーがログインしていません");
  }

  //データ構造作成
  const userDocRef = doc(db, "users", user.uid);
  const dateDocRef = doc(collection(userDocRef, "dates"), selectedDate);


  const docSnap = await getDoc(dateDocRef);
  console.log("Document data:", docSnap.data()) //data()メソッドはocumentSnapshot からドキュメントのフィールドを含むオブジェクトを返す

  if (docSnap.exists()) {
    return docSnap.data(); // データを返す
  } else {
    throw new Error("指定の日付のデータが存在しません");
  }

};


