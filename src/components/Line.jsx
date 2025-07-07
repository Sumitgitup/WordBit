
// Component to render a single row of 5 tiles
import React from 'react';
import '../styles/Line.css'; // Correct side-effect import for CSS

const WORD_LENGTH = 5;

export const Line = React.memo(({ guess, isFinal, solution }) => {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i] || '';
    let className = 'tile';

    if (isFinal && solution) {
      if (char === solution[i]) {
        className += ' correct';
      } else if (solution.includes(char)) {
        className += ' close';
      } else {
        className += ' incorrect';
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
});

export default Line;