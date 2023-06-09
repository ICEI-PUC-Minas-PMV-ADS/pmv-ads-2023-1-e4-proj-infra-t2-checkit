import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexGrid from '../pages/Index.jsx';


const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<IndexGrid />}  />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
