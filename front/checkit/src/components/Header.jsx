import { Menubar } from 'primereact/menubar';
import { BsGrid1X2Fill, BsPlusSquareFill, BsGearFill, BsDoorClosedFill } from "react-icons/bs"


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
        }
    ]
    const end = < BsDoorClosedFill className="mx-3" />

    return (
        <div className="card">
          <Menubar model={items} end={end} />
        </div>
    )
}
