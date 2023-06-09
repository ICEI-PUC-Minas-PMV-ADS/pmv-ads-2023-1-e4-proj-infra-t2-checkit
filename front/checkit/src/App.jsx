import React, {useContext} from 'react'
import { AuthContext } from './services/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import "./style/styles.css";
import '@fontsource/roboto/300.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CSSGrid from './pages/index.jsx';
import Login from "./pages/login";
import Register from "./Pages/Register";
import ProjectList from "./components/ProjectList";




export default function App() {
  const { auth } = useContext(AuthContext)
  console.log("auth", auth)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/index"
            element={< CSSGrid />} />
          <Route path="/teste" element={< ProjectList />} />
        </Routes>
      </Router>
    </>
  )
}
