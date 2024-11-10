import { Link } from "react-router-dom";
import { Header } from "./Header";
export const Profile = () => {
  const handleNameChange = () => { }
  const handleHeightChange = () => { }
  const handleWeightChange = () => { }
  const onUpdate = () => { }
  return (
    <div className="container mx-auto p-4">
      <Header />
      <br />
      <label>ユーザー名</label>
      <br />
      <input type="text" onChange={handleNameChange} className='border  rounded-lg border-gray-900' />
      <br />
      <br />
      <label>身長 [cm]</label>
      <br />
      <input type="text" onChange={handleHeightChange} className='border  rounded-lg border-gray-900' />
      <br />
      <br />
      <label>体重 [kg]</label>
      <br />
      <input type="text" onChange={handleWeightChange} className='border  rounded-lg border-gray-900' />
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