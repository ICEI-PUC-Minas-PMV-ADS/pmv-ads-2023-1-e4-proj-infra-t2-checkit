import { useState, useEffect } from "react";
import { Checkbox } from "primereact/checkbox";
import { useProjects } from "../contexts/ProjectsProvider";

export default function TaskItem(props) {
  const { updateTask, createTask, updateProject } = useProjects();

  const { tasks, onProgressChange, project } = props;
  const [selectedTasks, setSelectedTasks] = useState([]);

  const onTaskChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setSelectedTasks([...selectedTasks, value]);
    } else {
      setSelectedTasks(selectedTasks.filter((task) => task.id !== value.id));
    }
  };

  useEffect(() => {
    const completedTasks = selectedTasks.length;
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100;
    onProgressChange(progress);
  }, [selectedTasks, tasks, onProgressChange]);

  const handleTaskTitleChange = async (task, newTitle) => {
    try {
      const updatedTask = { ...task, tituloTarefa: newTitle };
      await updateTask(task.id, updatedTask);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };
  const handleAddNewTask = async () => {
    try {
      const newTask = {
        tituloTarefa: "",
      };
      const createdTask = await createTask(newTask);

      const updatedProject = {
        ...project,
        tarefaId: [...project.tarefaId, createdTask.id],
      };
      await updateProject(project.id, updatedProject);

      // Handle the created task as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };



  return (
    <div className="p-3">
      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="d-flex justify-content-between border border-light rounded my-2 p-2">
              <span
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleTaskTitleChange(task, e.target.textContent)}
                className="ml-2 text-light"
              >
                {task.tituloTarefa}
              </span>
              <Checkbox
                inputId={task.id}
                name="task"
                value={task}
                onChange={onTaskChange}
                checked={selectedTasks.some((item) => item.id === task.id)}
              />
            </div>
          );
        })}
        <button className="btn btn-link" onClick={handleAddNewTask}>
          Add new task
        </button>
      </div>
    </div>
  );
}
