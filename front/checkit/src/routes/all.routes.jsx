import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexGrid from '../pages/index.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/Register.jsx';


const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<IndexGrid />}  />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
