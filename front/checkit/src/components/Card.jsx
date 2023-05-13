import { Card } from 'primereact/card'
import TaskItem from './TaskItem'
import { ProgressBar } from 'primereact/progressbar';
import '../style/index.css';
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';
import { BsPencil } from "react-icons/bs"



export default function ProjectCard() {
  const completedTasks = 40

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
            <BsPencil  />
          </div>
        </div>
        <h6 className="h6 text-light mt-1 pt-3">prazo em 2 dias</h6>
        <h3 className="p-3 text-light"> titulo aqui fia</h3>
         <p className="px-3 text-justify text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
         </p>
         <ProgressBar className="mt-3 mx-3 progress-bar" style={{ height: '10px' }} value={completedTasks}></ProgressBar>
        < TaskItem className="text-light"/>
      </Card>
  );
}
