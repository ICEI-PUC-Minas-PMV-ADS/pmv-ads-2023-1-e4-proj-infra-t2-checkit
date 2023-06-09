import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login.jsx';
import Register from '../pages/Register.jsx';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
