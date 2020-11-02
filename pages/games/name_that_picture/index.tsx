import { useState, useEffect, FormEvent } from "react";
import Layout from "../../../components/Layout";
import Data from "../../../data/NameThatPictureData.json";

interface GameData {
  id: string;
  name: string;
  imgPath: string;
}

const NameThatPicture: React.FC = () => {
  const [gameData] = useState<Array<GameData>>(Data);
  const [counter, setCounter] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(gameData[0].imgPath);
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [wrongAnswer, setWrongAnswer] = useState<number>(0);

  // * update current imagePath when counter changed
  useEffect(() => {
    if (counter > 24) return;
    setCurrentImage(gameData[counter].imgPath);
  }, [counter]);

  // * save current value of user input
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = evt.currentTarget.value;
    setAnswer(currentValue);
  }

  //* handle form submission
  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    if (gameData[counter].name.toLowerCase() === answer.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setWrongAnswer((prevState) => prevState + 1);
    }
    setCounter((prevCounter) => prevCounter + 1);
    setAnswer("");
  }

  //* restart game
  function handleRestartGame() {
    setCounter(0);
    setCurrentImage(gameData[0].imgPath);
    setScore(0);
    setWrongAnswer(0);
  }

  return (
    <Layout title="Name That Picture">
      {counter <= 24 ? (
        <section>
          <div>
            <h1>Score: {score}</h1>
          </div>
          <div>
            <img src={currentImage} alt="" />
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <input
              value={answer}
              type="text"
              name="userInput"
              id="userInput"
              required
              maxLength={30}
              placeholder="Type your answer here"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Your Score: {score} out of 25</h1>
          <h2>Total wrong answer: {wrongAnswer}</h2>
          <button onClick={handleRestartGame}>Play Again</button>
        </section>
      )}
    </Layout>
  );
};

export default NameThatPicture;
