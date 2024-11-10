
export const DayMeal = () => {
  return (
    <>
      {/* 食事の枠 */}
      <div className="mt-4 space-y-4">
        {/* 朝食 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">朝食</h3>
          <p>サンプル内容: オートミール、フルーツ、ヨーグルト</p>
        </div>

        {/* 昼食 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">昼食</h3>
          <p>サンプル内容: サラダ、サンドイッチ、スープ</p>
        </div>

        {/* 夕食 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">夕食</h3>
          <p>サンプル内容: 魚、野菜、味噌汁</p>
        </div>

        {/* 間食 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">間食</h3>
          <p>サンプル内容: ナッツ、果物、ヨーグルト</p>
        </div>
      </div>
    </>
  );
};