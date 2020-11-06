import { useState, useEffect, FormEvent } from "react";
import Layout from "../../../components/Layout";
import { GameData } from "../../../utils/GameDataInterface";
import Data from "../../../data/NameThatPictureData.json";
import ImageCard from "../../../components/ImageCard";
import { v4 as uuid } from "uuid";
import ScoreBoard from "../../../components/ScoreBoard";
import GameDashboard from "../../../components/GameDashboard";

const Counting: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [gameData] = useState<Array<GameData>>(Data);
  const [counter, setCounter] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(gameData[0].imgPath);
  const [currentImageName, setCurrentImageName] = useState<string>(
    gameData[0].name
  );
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [wrongAnswer, setWrongAnswer] = useState<number>(0);

  // generate random number
  const generateRandomNumber = (max: number, min: number) => {
    let number = Math.floor(Math.random() * max - min + 1) + min;
    setRandomNumber(number);
  };

  //   render image times of randomNumber
  let renderImage = [...Array(randomNumber)].map((index) => {
    return <ImageCard key={uuid()} currentImgPath={currentImage} />;
  });

  // * update current imagePath when counter changed
  useEffect(() => {
    if (counter > 24) return;
    setCurrentImage(gameData[counter].imgPath);
    setCurrentImageName(gameData[counter].name);
    generateRandomNumber(10, 1);
  }, [counter]);

  // * save current value of user input
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const getValue = evt.currentTarget.value;
    setAnswer(getValue);
  }

  //* handle form submission
  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    if (randomNumber === parseInt(answer)) {
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
    <Layout title="Counting">
      <h1>Counting Game</h1>
      {counter <= 24 ? (
        <>
          <ScoreBoard score={score} />
          <div>{renderImage}</div>
          <div>
            <h2>How many {currentImageName}s you see here</h2>
          </div>
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <input
                type="number"
                name="userInput"
                id="userInput"
                placeholder="Type your result here..."
                required
                value={answer}
                onChange={handleChange}
              />
              <button type="submit">Submit Your Answer</button>
            </form>
          </div>
        </>
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

export default Counting;
