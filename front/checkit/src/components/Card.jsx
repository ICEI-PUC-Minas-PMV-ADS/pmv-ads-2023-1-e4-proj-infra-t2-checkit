import { Card } from 'primereact/card'
import TaskItem from './TaskItem'
import { ProgressBar } from 'primereact/progressbar';
import '../style/index.css';
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';



export default function ProjectCard() {
  const completedTasks = 40

  const [color, setColor] = useState('e66465');
  const [color2, setColor2] = useState('9198e5');
  const hashtag = '#';

  return (

      <Card className="shadow-sm border border-light rounded project-card m-1"
      style={{background: `radial-gradient(${hashtag}${color},${hashtag}${color2} )`}}>
        <div>
            <ColorPicker value={color} onChange={(e) => setColor(e.value) } />
            <ColorPicker value={color2} onChange={(e) => setColor2(e.value) } />

        </div>
        <h6 className="h6">prazo em 2 dias</h6>
        <h3 className="p-3"> titulo aqui fia</h3>
         <p className="px-3 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
         </p>
         <ProgressBar className="m-3" value={completedTasks}></ProgressBar>
        < TaskItem />
      </Card>
  );
}
