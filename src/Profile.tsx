import { Link } from "react-router-dom";
import { Header } from "./Header";
export const Profile = () => {
  const handleNameChange = () => { }
  const handleHeightChange = () => { }
  const handleWeightChange = () => { }
  const handleBMItChange = () => {}
  const handleFatPerChange = () => {}
  const handleFatWeightChange = () => {}
  const handleMuscleWeightChange = () => {}
  const handleMetabolismChange = () => {}
  const onUpdate = () => { }
  return (
    <div className="container mx-auto p-4">
      <Header />
      <br />
      <label>ユーザー名</label>
      <br />
      <input type="text" onChange={handleNameChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>身長 [cm]</label>
      <br />
      <input type="text" onChange={handleHeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>体重 [kg]</label>
      <br />
      <input type="text" onChange={handleWeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>BMI</label>
      <br />
      <input type="text" onChange={handleBMItChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>体脂肪率 [%]</label>
      <br />
      <input type="text" onChange={handleFatPerChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>脂肪量 [kg]</label>
      <br />
      <input type="text" onChange={handleFatWeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>筋肉量 [kg]</label>
      <br />
      <input type="text" onChange={handleMuscleWeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>基礎代謝 [kcal]</label>
      <br />
      <input type="text" onChange={handleMetabolismChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <button type='button' onClick={onUpdate}
        className='"border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mt-3'>
        更新
      </button>
      <br />
      <br />
      <Link to="/" className="bg-green-300 border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-green-500">ホームに戻る</Link>
    </div>
  );
};