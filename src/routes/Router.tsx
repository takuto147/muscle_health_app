import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from "../Signin"
import { Signup } from '../Signup';
import { Home } from '../Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
