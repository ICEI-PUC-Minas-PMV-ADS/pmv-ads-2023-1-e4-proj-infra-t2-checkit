import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';


export default function CreateProjectForm() {

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState(null);
  const [prazo, setPrazo] = useState(null);
  const [tasks, setTasks] = useState(['']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/");
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, '']);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 form-background">
          <div className="p-inputgroup flex-1 py-2">
            <span className="p-float-label">
              <InputText id="titulo" value={titulo} onChange={(e) => setTitulo(e.value)} placeholder="Título do seu projeto"/>
              <label className="px-2" htmlFor="titulo">Título</label>
               <span className="p-inputgroup-addon">
                <i className="pi pi-list"></i>
              </span>
            </span>
          </div>
          <div className="p-inputgroup flex-1 py-2">
            <span className="p-float-label">
              <Calendar value={prazo} onChange={(e) => setPrazo(e.value)} />
              <label className="px-2" htmlFor="Prazo">Prazo</label>
              <span className="p-inputgroup-addon">
                <i className="pi pi-calendar"></i>
              </span>
            </span>
          </div>
          {tasks.map((task, index) => (
          <div key={index} className="p-inputgroup flex-1 py-2">
              <span className="p-float-label">
               <InputText placeholder="Tarefa" value={task} onChange={(e) => handleTaskChange(index, e.target.value)} />
               <label className="px-2" htmlFor="tarefa">Tarefa</label>
               <span className="p-inputgroup-addon">
                 <i className="pi pi-times" onClick={() => handleRemoveTask(index)} ></i>
                </span>
              </span>
          </div>
          ))}
          <Button type="button" label="Add Task" icon="pi pi-plus" onClick={handleAddTask} />
          <div className="justify-content-around py-2">
            <Button className="btn cyan-50" label="Criar novo projeto" type="submit"/>
          </div>
      </form>
  )
}
