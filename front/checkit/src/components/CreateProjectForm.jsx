import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';


export default function CreateProjectForm() {

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState(null);
  const [prazo, setPrazo] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 mx-5 form-container">
          <h2>Novo projeto</h2>
          <div className="p-3">
            <span className="p-float-label">
              <InputText id="nome" value={titulo} placeholder="Título do seu projeto"/>
              <label className="px-2" htmlFor="titulo">Título</label>
            </span>
          </div>
          <div className="p-3">
            <span className="p-float-label">
              <Calendar value={prazo} onChange={(e) => setDate(e.value)} />
              <label className="px-2" htmlFor="Prazo">Prazo</label>
            </span>
          </div>
          <div className="justify-content-around px-3">
          <Button className="btn cyan-50" label="Criar novo projeto" type="submit"/>
          </div>
      </form>
  )
}
