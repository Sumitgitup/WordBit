
// Component to render the 6x5 Wordle grid
import Line from './Line';
import '../styles/Board.css'; // Correct side-effect import for CSS

const Board = ({ solution, guesses, currentGuess, isGameOver }) => {
  return (
    <div className="board">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex(val => val == null) && !isGameOver;
        return (
          <Line
            key={i}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
            isFinal={!isCurrentGuess && guess != null}
            solution={solution}
          />
        );
      })}
    </div>
  );
};

export default Board;