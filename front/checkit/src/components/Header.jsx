import { Menubar } from 'primereact/menubar';
import { useState } from 'react';
import { BsGrid1X2Fill, BsPlusSquareFill, BsGearFill, BsDoorClosedFill } from "react-icons/bs"
import CreateProject from './CreateProject';
import EditUserForm from './EditUserForm';
import { Dialog } from 'primereact/dialog';



export default function MenuBar() {

  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [displayUserForm, setDisplayUserForm] = useState(false);


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
            command: () => setDisplayUserForm(true)
        }
  ]
  const end = < BsDoorClosedFill className="mx-3" />;

  const onHide = () => {
      setDisplayCreateForm(false);
    };

    const onHideUser = () => {
      setDisplayUserForm(false);
    };

  return (
        <div className="card">
          <Menubar model={items} end={end} />
          <Dialog visible={displayCreateForm} onHide={onHide} header="Novo projeto">
            <CreateProject />
          </Dialog>
          <Dialog visible={displayUserForm} onHide={onHideUser} header="Editar usuário">
            <EditUserForm />
          </Dialog>
        </div>
    )
}
