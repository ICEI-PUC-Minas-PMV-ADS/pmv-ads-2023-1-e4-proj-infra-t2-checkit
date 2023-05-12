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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../style/index.css'


export default function TaskItem() {
  return (
    <FormControl>
        <FormControlLabel
          className='checkbox-item'
          value="start"
          control={<Checkbox sx={{
            color: 'white',
          }}/>}
          label="Start"
          labelPlacement="start"
          />
    </FormControl>
  );
}
