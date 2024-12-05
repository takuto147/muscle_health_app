import { Link } from "react-router-dom";
import { Header } from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SaveProf } from "./function/SaveProf";


export const EditProfile = () => {

  const navigate = useNavigate()
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))

  const onUpdateProf = async () => {
    try {
      await SaveProf(height, weight, age);
      alert("プロフィール登録/更新しました");
      navigate('/')
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <p>プロフィール未設定の方は最初に登録してください！！</p>
      <br />
      <label>身長 [cm]</label>
      <br />
      <input type="text" onChange={handleHeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>体重 [kg]</label>
      <br />
      <input type="text" onChange={handleWeightChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <label>年齢 [歳]</label>
      <br />
      <input type="text" onChange={handleAgeChange} className='border  rounded-lg border-gray-900 mb-5' />
      <br />
      <button type='button' onClick={onUpdateProf}
        className='"border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mt-3'>
        登録/更新
      </button>
      <br />
      <br />
      <Link to="/" className="bg-green-300 border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-green-500">ホームに戻る</Link>
    </div>
  );
};