import { Box, ThemeProvider } from '@mui/system';

export default function Card() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0059B2',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 600,
          bgcolor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </ThemeProvider>
  );
}
