import { Card } from 'primereact/card';
import TaskItem from './TaskItem'
import '../style/index.css'

export default function ProjectCard() {
  return (
      <Card className="shadow-sm border border-light project-card m-1">
        <h3 className="pb-3"> titulo aqui fia</h3>
         <p className="px-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
         </p>
        < TaskItem />
      </Card>
  );
}
