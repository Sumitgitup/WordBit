
// Main app component that orchestrates the Wordle game UI
import { useGameLogic } from './hooks/useGameLogic';
import Board from './components/Board';
import ConfettiAnimation from './components/Confetti';
import GameOverAlert from './components/GameOverAlert';
import './styles/App.css'; // Correct side-effect import for CSS
import Headers from './components/Headers';

export default function App() {
  const { solution, guesses, currentGuess, isGameOver, isLoading, isExploding } = useGameLogic();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div>
        <Headers/>
      </div>
      {isExploding && (
        <>
          <ConfettiAnimation />
          <GameOverAlert />
        </>
      )}
      <Board solution={solution} guesses={guesses} currentGuess={currentGuess} isGameOver={isGameOver} />
    </div>
  );
}
