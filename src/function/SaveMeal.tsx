import { doc, setDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";

export const SaveMeal = async (
  mealName: string,
  calorie: number,
  protein: number,
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
  
  try {
    await updateDoc(dateDocRef, {
      meals: arrayUnion({
        mealName,
        calorie,
        protein,
      }),
    });
  } catch (error) {
    await setDoc(dateDocRef, {
      meals: [
        {
          mealName,
          calorie,
          protein,
        },
      ],
    });
  }
};


