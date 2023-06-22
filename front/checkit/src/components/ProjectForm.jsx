import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useNavigate } from "react-router-dom";

export default function ProjectForm({ project, onSubmit, onChange }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [tasks, setTasks] = useState([""]);

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, ""]);
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

  useEffect(() => {
    setTitle(project.title || "");
    setDueDate(project.dueDate ? new Date(project.dueDate) : null);
    setTasks(project.tarefaId ? project.tarefaId.map((task) => task.title || "") : []);
  }, [project]);

  useEffect(() => {
    if (title !== project.title) {
      onChange({ target: { name: "title", value: title } });
    }
  }, [title, onChange, project.title]);

  useEffect(() => {
    if (dueDate !== project.dueDate) {
      onChange({ target: { name: "dueDate", value: dueDate } });
    }
  }, [dueDate, onChange, project.dueDate]);

  useEffect(() => {
    if (tasks.join(",") !== project.tarefaId?.map((task) => task.title).join(",")) {
      onChange({ target: { name: "tasks", value: tasks } });
    }
  }, [tasks, onChange, project.tarefaId]);

  return (
    <form onSubmit={handleSubmit} className="px-5 form-background">
      <div className="p-inputgroup flex-1 py-4">
        <span className="p-float-label">
          <InputText
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do seu projeto"
          />
          <label className="px-2" htmlFor="title">
            Título
          </label>
        </span>
      </div>
      <div className="p-inputgroup flex-1 py-3">
        <span className="p-float-label">
          <Calendar
            value={dueDate}
            onChange={(e) => setDueDate(e.value)}
            placeholder="Prazo"
          />
          <label className="px-2" htmlFor="duedate">
            Prazo
          </label>
        </span>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="p-inputgroup flex-1 py-3">
          <span className="p-float-label">
            <InputText
              placeholder="Tarefa"
              value={task}
              onChange={(e) => handleTaskChange(index, e.target.value)}
            />
            <Button
              icon="pi pi-times"
              className="btn"
              onClick={() => handleRemoveTask(index)}
            />
            <label className="px-2" htmlFor={`task-${index}`}>
              Tarefa
            </label>
          </span>
        </div>
      ))}
      <Button
        type="button"
        className="py-2 btn-gradient"
        label="Add tarefa"
        icon="pi pi-plus"
        onClick={handleAddTask}
      />
      <div className="justify-content-around py-4">
        <Button className="btn cyan-50" label="Salvar" type="submit" />
      </div>
    </form>
  );
}
