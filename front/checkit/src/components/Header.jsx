import { Menubar } from 'primereact/menubar';
import { BsGrid1X2Fill, BsPlusSquareFill, BsGearFill } from "react-icons/bs"


export default function MenuBar() {
    const items = [
        {
            icon: <BsGrid1X2Fill />

        },
        {
            icon: <BsPlusSquareFill />

        },
        {
            icon: <BsGearFill />,
        },
        {
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
