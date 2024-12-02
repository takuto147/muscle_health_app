import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from "../Signin"
import { Signup } from '../Signup';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { AddMeal } from '../AddMeal';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../AuthContext"

export const Router = () => {
  const { user, loading } = useAuth();

  console.log(`ユーザー：${user}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addmeal" element={<AddMeal />} />
        {user ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" />} />
        )}

      </Routes>
    </BrowserRouter>
  );
};
