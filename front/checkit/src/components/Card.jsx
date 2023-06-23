import { Card } from 'primereact/card';
import TaskItem from './TaskItem';
import { ProgressBar } from 'primereact/progressbar';
import '../style/index.css';
import { useState, useRef, useEffect } from "react";
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import EditProject from './EditProject';
import { Dialog } from 'primereact/dialog';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useProjects } from "../contexts/ProjectsProvider";




export default function ProjectCard(props) {
  const { project } = props
  const { getTaskFromProject, getTask } = useProjects();
  const { deleteProject } = useProjects();
  const [tasks, setTasks] = useState([]);

  const [progress, setProgress] = useState(0);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const startDate = new Date(project.dueDate);
  const currentDate = new Date();

  const timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const [color, setColor] = useState('e66465');
  const [color2, setColor2] = useState('9198e5');
  const hashtag = '#';

  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  useEffect(() => {
    const fetchTasksForProject = async () => {
      try {
        const tasksId = await getTaskFromProject(props.project.id);

        const tasksData = await Promise.all(tasksId.map(async (taskId) => {
          const task = await getTask(taskId);
          return { id: taskId, tituloTarefa: task.tituloTarefa };
        }));

        // Handle the tasks data as needed
        setTasks(tasksData);

      } catch (error) {
        console.error(error);
      }
    };

    fetchTasksForProject();
  }, [getTaskFromProject, props.project.id]);

  const accept = async () => {
    try {
      await deleteProject(props.project.id);
      toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Projeto deletado', life: 3000 });
      window.location.reload();
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };


  const reject = () => {
      toast.current.show({ severity: 'warn', summary: 'Operação não confirmada', detail: 'Projeto não deletado', life: 3000 });
  }

  const onHide = () => {
    setDisplayEditForm(false);
  };

  const handleSubmit = (editedProject) => {
    try {
      // Call your API or update logic here
      console.log("Updated project:", editedProject);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  const confirm = () => {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
    });
};



  return (
      <Card className="shadow-sm border border-light rounded project-card m-1"
      style={{background: `radial-gradient(${hashtag}${color},${hashtag}${color2} )`}}>
        <div className="d-flex justify-content-between">
          <div>
              <ColorPicker className="colorpicker sticky-top px-3" value={color} onChange={(e) => setColor(e.value) } />
              <ColorPicker className="colorpicker" value={color2} onChange={(e) => setColor2(e.value) } />
          </div>
            <div className="d-flex justify-content-around">
           <div className="text-light px-3">
             <Button icon="pi pi-pencil" onClick={() => setDisplayEditForm(true)}/>
            </div>
            <div>
            <Toast ref={toast} />
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
            header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <Button icon="pi pi-trash" onClick={() => setVisible(true)}/>
            </div>
            </div>
          <Dialog visible={displayEditForm} onHide={onHide} header="Editar projeto">
            <EditProject  projectId={project.id} project={project} onSubmit={handleSubmit} />
          </Dialog>
        </div>
        <h6 className="h6 text-light mt-1 pt-3">Prazo final em {diffDays} dias</h6>
        <h3 className="p-3 text-light"> {project.title}</h3>
         <ProgressBar className="mt-3 mx-3 progress-bar" style={{ height: '10px' }} value={progress}></ProgressBar>
        < TaskItem tasks={tasks} onProgressChange={setProgress} className="text-light"/>
      </Card>
  );
}
