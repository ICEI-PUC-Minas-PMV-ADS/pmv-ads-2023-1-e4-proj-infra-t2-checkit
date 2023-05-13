// export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
//     return (
//       <li>
//         <label>
//           <input
//             type="checkbox"
//             checked={completed}
//             onChange={e => toggleTodo(id, e.target.checked)}
//           />
//           {title}
//         </label>
//         <button onClick={() => deleteTodo(id)} className="btn btn-danger">
//           Delete
//         </button>
//       </li>
//     )
//   }
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="p-3">
            <div>
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="d-flex justify-content-between border border-light my-2 p-2">
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
