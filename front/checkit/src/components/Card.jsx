import { Card } from 'primereact/card'
import TaskItem from './TaskItem'
import { ProgressBar } from 'primereact/progressbar'
import '../style/index.css'
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function ProjectCard() {
  const completedTasks = 40

  const [color, setColor] = useState('lightblue');

  return (


      <Card className="shadow-sm border border-light border-rounded project-card m-1" style={{ background: color }}>
        <div>
            <ColorPicker value={color} onChange={(e) => setColor(e.value) } />
        </div>
        <h6 className="h6">prazo em 2 dias</h6>
        <h3 className="p-3"> titulo aqui fia</h3>
         <p className="px-3 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
         </p>
         <ProgressBar value={completedTasks}></ProgressBar>
        < TaskItem />
      </Card>
  );
}
