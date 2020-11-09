import Button from "./Button";

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
    <section className="max-w-lg mx-auto bg-gray-800 p-4 shadow-sm text-gray-400 rounded-sm">
      <h1 className="text-2xl mt-2 mb-4">Your Score: {score} out of 25</h1>
      <h2 className="text-xl my-5 text-red-500">
        Total wrong answer: {wrongAnswer}
      </h2>
      <Button handleClick={handleRestartGame} btnName="play again" />
    </section>
  );
};

export default GameDashboard;
