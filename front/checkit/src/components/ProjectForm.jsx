import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useNavigate } from "react-router-dom";

export default function ProjectForm({ project, onSubmit }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      dueDate: dueDate ? dueDate.toISOString() : null,
    });
    navigate("/index");
  };

  useEffect(() => {
    if (project) {
      setTitle(project.title || "");
      setDueDate(project.dueDate ? new Date(project.dueDate) : null);
    } else {
      setTitle("");
      setDueDate(null);
    }
  }, [project]);

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
      <div className="justify-content-around py-4">
        <Button className="btn cyan-50" label="Salvar" type="submit" />
      </div>
    </form>
  );
}
