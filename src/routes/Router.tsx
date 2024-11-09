import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from "../Signin"
import { Signup } from '../Signup';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { AddMeal } from '../AddMeal';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addmeal" element={<AddMeal />} />

      </Routes>
    </BrowserRouter>
  );
};
