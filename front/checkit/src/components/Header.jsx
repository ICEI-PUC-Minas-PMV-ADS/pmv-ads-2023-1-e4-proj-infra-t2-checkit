import { Menubar } from 'primereact/menubar';
import { useState } from 'react';
import { BsGrid1X2Fill, BsPlusSquareFill, BsGearFill, BsDoorClosedFill } from "react-icons/bs"
import CreateProjectForm from './CreateProjectForm';
import { Dialog } from 'primereact/dialog';



export default function MenuBar() {

  const [displayCreateForm, setDisplayCreateForm] = useState(false);

  const items = [
        {
            icon: <BsGrid1X2Fill />,
        },
        {
            icon: <BsPlusSquareFill />,
            command: () => setDisplayCreateForm(true)

        },
        {
            icon: <BsGearFill />,
        }
  ]
  const end = < BsDoorClosedFill className="mx-3" />;

  const onHide = () => {
      setDisplayCreateForm(false);
    };

  return (
        <div className="card">
          <Menubar model={items} end={end} />
          <Dialog visible={displayCreateForm} onHide={onHide}>
            <CreateProjectForm />
          </Dialog>
        </div>
    )
}
