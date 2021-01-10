import { InferGetStaticPropsType } from "next";
import { useState, useEffect, FormEvent } from "react";
import GameDashboard from "../../../components/GameDashboard";
import ImageCard from "../../../components/ImageCard";
import Layout from "../../../components/Layout";
import ScoreBoard from "../../../components/ScoreBoard";
import { GameData } from "../../../utils/GameDataInterface";

const NameThatPicture = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [gameData] = useState<Array<GameData>>(data);
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
        <section className="flex flex-col justify-center items-center max-w-4xl mx-auto bg-gradient-to-r from-blue-300 to-pink-300 p-4 shadow-md rounded-md">
          <ScoreBoard score={score} />
          <ImageCard currentImgPath={currentImage} />
          <h1 className="text-xl  mb-5 text-gray-700">What is this?</h1>
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between"
          >
            <input
              className="py-3 px-4 text-lg bg-gray-800 outline-none border-2 border-blue-300 rounded"
              value={answer}
              type="text"
              name="userInput"
              id="userInput"
              required
              maxLength={30}
              placeholder="Type your answer here"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="py-3 px-8 mt-5 mb-5 uppercase bg-yellow-400 text-yellow-800 border-b-4 rounded-sm border-indigo-600 text-lg tracking-widest md:ml-4"
            >
              Submit
            </button>
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

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/ef6331bd216179a110fd1ace2f1b1c63/raw/0337233b13854a1ce919d03cb39186b229947731/NameThatPictureData"
  );

  const data: GameData[] = await response.json();

  return {
    props: {
      data,
    },
  };
};
