import { doc,  getDoc} from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";

interface Profs {
  height: number;
  weight: number;
  age: number;
}



export const LoadProf = async (
) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("ユーザーがログインしていません");
  }

  const userDocRef = doc(db, "users", user.uid);
  const profileDocRef = doc(userDocRef, "profs", "profile"); 

  const profileSnap = await getDoc(profileDocRef);
  console.log("LoadProf確認",profileSnap.data());
  // log結果：{weight: 20, age: 1, height: 9000}
  if(profileSnap.exists()){
    return profileSnap.data() as Profs
  }else{
    throw new Error("プロフィールが登録されていません");
  }
};
