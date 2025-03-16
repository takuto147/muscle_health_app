import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "../Signin";
import { Signup } from "../Signup";
import { Home } from "../Home";
import { EditProfile } from "../EditProfile";
import { AddMeal } from "../AddMeal";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { EditMeal } from "../EditMeal";

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
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/addmeal" element={<AddMeal />} />
        <Route path="/editmeal" element={<EditMeal />} />
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
