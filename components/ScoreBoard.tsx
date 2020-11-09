interface Score {
  score: number;
}

const ScoreBoard: React.FC<Score> = ({ score }) => {
  return (
    <div className="text-center text-yellow-500 text-xl uppercase tracking-wider font-bold block w-full p-4 mb-5">
      <h1>Score: {score}</h1>
    </div>
  );
};

export default ScoreBoard;
