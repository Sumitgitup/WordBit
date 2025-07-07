
// Component to render the MUI Alert for game win
import Alert from '@mui/material/Alert';

const GameOverAlert = () => {
  return (
    <Alert
      variant="filled"
      severity="success"
      sx={{
        position: 'fixed',
        top: '420px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
      }}
    >
      Congratulations! You solved the puzzle.
    </Alert>
  );
};

export default GameOverAlert;
