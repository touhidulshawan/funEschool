import { useState, useEffect, FormEvent } from "react";
import GameDashboard from "../../../components/GameDashboard";
import ImageCard from "../../../components/ImageCard";
import Layout from "../../../components/Layout";
import ScoreBoard from "../../../components/ScoreBoard";
import Data from "../../../data/NameThatPictureData.json";
import { GameData } from "../../../utils/GameDataInterface";

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
          <ScoreBoard score={score} />
          <ImageCard currentImgPath={currentImage} />
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
        <GameDashboard
          score={score}
          wrongAnswer={wrongAnswer}
          handleRestartGame={handleRestartGame}
        />
      )}
    </Layout>
  );
};

export default NameThatPicture;
