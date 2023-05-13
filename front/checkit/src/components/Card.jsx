import { Card } from 'primereact/card';
import TaskItem from './TaskItem'
import { ProgressBar } from 'primereact/progressbar';
import '../style/index.css'

export default function ProjectCard() {
  const completedTasks = 40

  return (


      <Card className="shadow-sm border border-light project-card m-1">
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
