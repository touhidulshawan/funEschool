interface Score {
  score: number;
}

const ScoreBoard: React.FC<Score> = ({ score }) => {
  return (
    <div>
      <h1>Score: {score}</h1>
    </div>
  );
};

export default ScoreBoard;
