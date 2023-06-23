import { useState, useEffect } from "react";
import { Checkbox } from "primereact/checkbox";
import { useProjects } from "../contexts/ProjectsProvider";
import { Button } from 'primereact/button';

export default function TaskItem(props) {
  const { updateTask, createTask, updateProject, deleteTask } = useProjects();

  const { tasks, setTasks, onDeleteTask, onProgressChange, project } = props;
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
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await props.onDeleteTask(taskId); // Invoke the prop function
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <div className="py-3">
      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="d-flex justify-content-between">
              <div className="py-2 ml-0 pl-0">
                <Button
                  icon="pi pi-times"
                  className="btn btn-lin text-white"
                  onClick={() => handleDeleteTask(task.id)}
                  text
                />
              </div>
              <div className="d-flex justify-content-between border border-light rounded my-2 p-2 flex-grow-1">
                <span
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleTaskTitleChange(task, e.target.textContent)}
                  className="text-light"
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
            </div>
          );
        })}
        <button className="btn btn-lin text-white" onClick={handleAddNewTask}>
          + Adicionar tarefa
        </button>
      </div>
    </div>
  );
}
