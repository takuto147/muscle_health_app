import { db,app } from "../firebase";
import { doc, updateDoc,getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


interface Meal {
  mealName: string;
  calorie: number;
  protein: number;
}

export const deleteMeal = async (  
  mealName : string,
  selectedDate: string
) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("ユーザーがログインしていません");
  }

    const mealDocRef = doc(db, "users", user.uid, "dates", selectedDate);

    // 現在の食事データを取得
    const docSnap = await getDoc(mealDocRef);
    if (!docSnap.exists()) {
      throw new Error("指定された日付のデータがありません");
    }
    const meals = docSnap.data()?.meals || [];

    // 食事データを削除
    const updatedMeals = meals.filter((meal: Meal) => meal.mealName !== mealName);

    // 更新データをFirestoreに保存（食事が削除された状態）
    await updateDoc(mealDocRef, {
      meals: updatedMeals
    });
};
