import { useState, useEffect } from "react";
import { Checkbox } from "primereact/checkbox";



export default function TaskItem(props) {
  const { tasks } = props
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
  }, [selectedTasks, tasks]);

    return (

        <div className="p-3">
            <div>
            {tasks.map((task) => {
                    return (
                        <div key={task.id} className="d-flex justify-content-between border border-light rounded my-2 p-2">
                            <label htmlFor={task.id} className="ml-2 text-light">
                                {task.title}
                            </label>
                            <Checkbox inputId={task.id} name="task" value={task} onChange={onTaskChange}
                              checked={selectedTasks.some((item) => item.id === task.id)}/>
                        </div>
                    );
                  })}

            </div>
        </div>
    )
}
