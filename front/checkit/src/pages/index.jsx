import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../components/Card.jsx'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function AutoGrid() {
  return (
    <Box>
      <Grid container >
        <Grid spacing={5}>
          <Item><Card /></Item>
        </Grid>
        <Grid>
          <Item><Card /></Item>
        </Grid>
        <Grid>
          <Item><Card /></Item>
        </Grid>
        <Grid>
          <Item><Card /></Item>
        </Grid>
        <Grid>
          <Item><Card /></Item>
        </Grid>
        <Grid>
          <Item><Card /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
