import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useNavigate } from "react-router-dom";


export default function ProjectForm({ project, onSubmit }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [tasks, setTasks] = useState(['']);

  useEffect(() => {
    if (project) {
      setTitle(project.title || "");
      setDueDate(project.dueDate || null);
      setTasks(project.tasks || []);
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/");
    onSubmit({ title, dueDate, tasks });
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
              <InputText id="title" value={title} onChange={(e) => setTitle(e.value)} placeholder="Título do seu projeto"/>
              <label className="px-2" htmlFor="title">Título</label>
               <span className="p-inputgroup-addon">
                <i className="pi pi-list"></i>
              </span>
            </span>
          </div>
          <div className="p-inputgroup flex-1 py-2">
            <span className="p-float-label">
              <Calendar value={dueDate} onChange={(e) => setDueDate(e.value)} />
              <label className="px-2" htmlFor="duedate">Prazo</label>
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
          <Button type="button" className="btn-tarefa py-2" label="Add tarefa" icon="pi pi-plus" onClick={handleAddTask} />
          <div className="justify-content-around py-4">
            <Button className="btn cyan-50" label="Criar novo projeto" type="submit"/>
          </div>
      </form>
  )
}
