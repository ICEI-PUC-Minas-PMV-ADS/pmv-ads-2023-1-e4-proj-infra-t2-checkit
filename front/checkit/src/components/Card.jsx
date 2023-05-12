import { Box } from '@mui/system';
import TaskItem from './TaskItem'
import '../style/index.css'

export default function Card() {
  return (
      <Box
        sx={{
          width: 400,
          background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
          }}
          padding={5}
      >
        <h1 className='titulo'>titulo </h1>
        <p className='descricao'>descrição descrição descrição descrição descrição descrição</p>
        < TaskItem />
      </Box>
  );
}
