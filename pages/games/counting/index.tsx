import { useState, useEffect, FormEvent } from "react";
import Layout from "../../../components/Layout";
import { GameData } from "../../../utils/GameDataInterface";
import ImageCard from "../../../components/ImageCard";
import { v4 as uuid } from "uuid";
import ScoreBoard from "../../../components/ScoreBoard";
import GameDashboard from "../../../components/GameDashboard";
import { InferGetStaticPropsType } from "next";

const Counting = ({ Data }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  let renderImage = [...Array(randomNumber)].map(() => {
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
      {counter <= 24 ? (
        <section className="flex flex-col justify-center items-center max-w-5xl mx-auto bg-gradient-to-br from-blue-300 to-pink-300 p-4 shadow-md rounded-md">
          <ScoreBoard score={score} />
          <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3">
            {renderImage}
          </div>
          <div className="my-4">
            <h2 className="text-2xl text-gray-700">
              How many{" "}
              <span className="text-pink-500 font-bold">
                {currentImageName}
              </span>{" "}
              you see here?
            </h2>
          </div>
          <div>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between"
            >
              <input
                className="py-3 px-4 text-lg bg-gray-800 outline-none shadow-outline"
                type="number"
                name="userInput"
                id="userInput"
                placeholder="Type your result here..."
                required
                value={answer}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="py-3 px-8 mt-5 mb-5 uppercase bg-yellow-400 text-yellow-800 border-b-4 rounded-sm border-indigo-600 text-lg tracking-widest md:ml-4"
              >
                Submit
              </button>
            </form>
          </div>
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

export default Counting;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/ef6331bd216179a110fd1ace2f1b1c63/raw/0337233b13854a1ce919d03cb39186b229947731/NameThatPictureData"
  );

  const Data: GameData[] = await response.json();

  return {
    props: {
      Data,
    },
  };
};
