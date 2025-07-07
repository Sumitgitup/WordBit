
// Component to render confetti animation
import Confetti from 'react-confetti-boom';

const ConfettiAnimation = () => {
  return (
    <Confetti
      mode="boom"
      particleCount={600}
      colors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#FF69B4']}
    />
  );
};

export default ConfettiAnimation;
