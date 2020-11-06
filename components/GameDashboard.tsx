interface GameDashboardProps {
  score: number;
  wrongAnswer: number;
  handleRestartGame: () => void;
}

const GameDashboard: React.FC<GameDashboardProps> = ({
  score,
  wrongAnswer,
  handleRestartGame,
}) => {
  return (
    <section>
      <h1>Your Score: {score} out of 25</h1>
      <h2>Total wrong answer: {wrongAnswer}</h2>
      <button onClick={handleRestartGame}>Play Again</button>
    </section>
  );
};

export default GameDashboard;
