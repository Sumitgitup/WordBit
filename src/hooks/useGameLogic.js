
// Custom hook to manage Wordle game logic
import { useState, useEffect } from 'react';
import { fetchWord } from '../utils/api';

const WORD_LENGTH = 5;

export const useGameLogic = () => {
  const [solution, setSolution] = useState('HELLO'); // Hardcoded for testing
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const handleType = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }

      if (isGameOver || isLoading) {
        return;
      }

      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          alert('Please enter a 5-letter word!');
          return;
        }

        const newGuesses = [...guesses];
        const emptyIndex = guesses.findIndex(val => val == null);
        if (emptyIndex !== -1) {
          newGuesses[emptyIndex] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('');

          const isCorrect = solution === currentGuess;
          if (isCorrect) {
            setIsGameOver(true);
            setIsExploding(true);
          }
        }
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (event.key.length === 1 && /[a-zA-Z]/.test(event.key) && currentGuess.length < 5) {
        setCurrentGuess(oldGuess => oldGuess + event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, isLoading, solution]);

  useEffect(() => {
    const fetchWordAsync = async () => {
      try {
        setIsLoading(true);
        const randomWord = await fetchWord();
        // setSolution(randomWord.toUpperCase()); // Uncomment for API
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching word:', error);
        setSolution('HELLO'); // Fallback to hardcoded word
        setIsLoading(false);
      }
    };
    fetchWordAsync();
  }, []);

  useEffect(() => {
    if (isExploding) {
      const timeout = setTimeout(() => setIsExploding(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [isExploding]);

  return { solution, guesses, currentGuess, isGameOver, isLoading, isExploding };
};
