import { Card } from 'primereact/card';
import TaskItem from './TaskItem'

export default function ProjectCard() {
  return (
    <div>
        <Card className="border border-primary-subtle">
         <p >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
         </p>
        < TaskItem />
      </Card>
    </div>
  );
}