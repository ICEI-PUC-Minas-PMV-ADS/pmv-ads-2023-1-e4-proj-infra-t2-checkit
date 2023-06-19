import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthProvider  from '../src/services/AuthProvider.jsx';
import { ProjectsProvider } from "./contexts/ProjectsProvider";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <ProjectsProvider>
    <App />
    </ProjectsProvider>
   </AuthProvider>
  </React.StrictMode>,
)
