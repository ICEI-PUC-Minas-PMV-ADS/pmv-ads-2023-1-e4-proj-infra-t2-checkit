import { Card } from 'primereact/card';
import TaskItem from './TaskItem';
import { ProgressBar } from 'primereact/progressbar';
import '../style/index.css';
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';
import { BsPencil } from "react-icons/bs";
import { Button } from 'primereact/button';
import EditProject from './EditProject';
import { Dialog } from 'primereact/dialog';




export default function ProjectCard(props) {
  const [progress, setProgress] = useState(0);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const onHide = () => {
    setDisplayEditForm(false);
  };


  const { project } = props

  const startDate = new Date(project.dueDate);
  const currentDate = new Date();

  const timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const [color, setColor] = useState('e66465');
  const [color2, setColor2] = useState('9198e5');
  const hashtag = '#';

  return (
      <Card className="shadow-sm border border-light rounded project-card m-1"
      style={{background: `radial-gradient(${hashtag}${color},${hashtag}${color2} )`}}>
        <div className="d-flex justify-content-between">
          <div>
              <ColorPicker className="colorpicker sticky-top px-3" value={color} onChange={(e) => setColor(e.value) } />
              <ColorPicker className="colorpicker" value={color2} onChange={(e) => setColor2(e.value) } />
          </div>
           <div className="text-light px-3">
            <Button icon="pi pi-pencil" onClick={() => setDisplayEditForm(true)}/>
            </div>
          <Dialog visible={displayEditForm} onHide={onHide} header="Editar projeto">
            <EditProject />
          </Dialog>
        </div>
        <h6 className="h6 text-light mt-1 pt-3">Prazo final em {diffDays} dias</h6>
        <h3 className="p-3 text-light"> {project.title}</h3>
         {/* <p className="px-3 text-justify text-light">{project.descricao}</p> //adicionar "descricao" aqui*/}
         <ProgressBar className="mt-3 mx-3 progress-bar" style={{ height: '10px' }} value={progress}></ProgressBar>
        < TaskItem tasks={project.tasks} onProgressChange={setProgress} className="text-light"/>
      </Card>
  );
}
