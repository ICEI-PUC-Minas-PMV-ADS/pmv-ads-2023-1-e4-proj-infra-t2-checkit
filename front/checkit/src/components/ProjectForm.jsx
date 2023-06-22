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
      const formattedDueDate = project.dueDate ? new Date(project.dueDate) : null;
      setDueDate(formattedDueDate);
      console.log(dueDate)
    }

    if (project.tarefaId) {
      const initialTasks = project.tarefaId.map((task) => task.title || "");
      setTasks(initialTasks);
    }
  }, [project]);



  // // Save the project data
  // const projectData = {
  //   title: title,
  //   dueDate: dueDate,
  // };

  // // Assuming you have a separate API endpoint to save projects
  // const savedProject = await saveProject(projectData); // Save the project data

  // // Save each task separately with the project ID
  // const savedTasks = await Promise.all(
  //   tasks.map((task) => saveTask({ projectId: savedProject.id, title: task.title }))
  // );

  // // Combine the saved project and tasks
  // const updatedProject = {
  //   ...savedProject,
  //   tasks: savedTasks,
  // };
  // onSubmit(updatedProject);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    navigate("/index");
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 form-background">
          <div className="p-inputgroup flex-1 py-4">
            <span className="p-float-label">
              <InputText id="title" value={title} onChange={(e) => setTitle(e.value)} placeholder="Título do seu projeto"/>
              <label className="px-2" htmlFor="title">Título</label>
            </span>
          </div>
          <div className="p-inputgroup flex-1 py-3">
            <span className="p-float-label">
              <Calendar value={dueDate} onChange={(e) => setDueDate(e.value)}  />
              <label className="px-2" htmlFor="duedate">Prazo</label>
            </span>
          </div>
          {tasks.map((task, index) => (
          <div key={index} className="p-inputgroup flex-1 py-3">
              <span className="p-float-label">
               <InputText placeholder="Tarefa" value={task} onChange={(e) => handleTaskChange(index, e.target.value)} />
               <Button icon="pi pi-times" className="btn" onClick={() => handleRemoveTask(index)}  />
               <label className="px-2" htmlFor="tarefa">Tarefa</label>
              </span>
          </div>
          ))}
          <Button type="button" className="py-2 btn-gradient" label="Add tarefa" icon="pi pi-plus" onClick={handleAddTask} />
          <div className="justify-content-around py-4">
            <Button className="btn cyan-50" label="Salvar" type="submit"/>
          </div>
      </form>
  )
}
