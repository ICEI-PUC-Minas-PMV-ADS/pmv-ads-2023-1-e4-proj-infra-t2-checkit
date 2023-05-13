import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./style/styles.css";
import '@fontsource/roboto/300.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CSSGrid from './pages/index.jsx';
import Teste from './pages/teste.jsx';
import Login from "./Pages/Login";
import Register from "./Pages/Register";




export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/index"
            element={< CSSGrid />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </Router>
    </>
  )
}
