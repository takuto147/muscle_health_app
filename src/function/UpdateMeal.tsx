import { db, app } from "../firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

interface Meal {
  mealName: string;
  calorie: number;
  protein: number;
}

export const updateMeal = async (
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

   const mealDocRef = doc(db, "users", user.uid, "dates", selectedDate);

    // 現在の食事データを取得
    const docSnap = await getDoc(mealDocRef);
    if (!docSnap.exists()) {
      throw new Error("指定された日付のデータがありません");
    }
    const meals = docSnap.data()?.meals || [];

    // 更新対象の食事を特定して変更
    const updatedMeals = meals.map((meal: Meal) =>
      meal.mealName === mealName
        ? { ...meal, mealName, calorie, protein } //省略記法で更新
        : meal
    );

    // 更新データをFirestoreに保存
    await updateDoc(mealDocRef, {
      meals: updatedMeals
    });
};
