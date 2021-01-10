import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import Layout from "../../../../components/Layout";
import { v4 as uuid } from "uuid";
import WordWithImageCard from "../../../../components/WordWithImageCard";

interface Word {
  id: string;
  name: string;
  imgPath: string;
}

const LearningWord = ({
  letters,
  wordWithImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [toggleCase, setToggleCase] = useState<boolean>(false);
  return (
    <Layout title="Learning Word">
      <section className="py-2 mb-8">
        <h1 className="text-center text-2xl tracking-wider">
          Learning Letter and Word
        </h1>
        <h2 className="text-center text-lg text-pink-500 my-3 tracking-wide">
          There are 26 letters in English
        </h2>
      </section>
      <div>
        <section className="ml-6">
          <button
            className="mr-2 tracking-wide lowercase border-2 border-blue-400 border-opacity-50 p-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => setToggleCase(false)}
          >
            Lowercase
          </button>
          <button
            className="mr-2 tracking-wide ml-2 uppercase border-2 border-blue-400 border-opacity-50 p-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => setToggleCase(true)}
          >
            Uppercase
          </button>
        </section>
        <section className="p-4 my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 border-b-2 pb-3 md:pr-4 md:border-r-2 border-gray-800 ">
            {letters.map((letter) => (
              <div
                key={uuid()}
                className="bg-gray-200 w-32 h-32 flex flex-col justify-center items-center shadow-md border-2 border-gray-900 rounded-md"
              >
                <h2
                  className={`text-6xl font-bold text-gray-800 ${
                    toggleCase ? "uppercase" : "lowercase"
                  }`}
                >
                  {letter}
                </h2>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-5">
            {wordWithImage.map(({ id, imgPath, name }) => (
              <WordWithImageCard
                key={id}
                imagePath={imgPath}
                word={name}
                textCase={toggleCase}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default LearningWord;

export const getStaticProps = async () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/ef6331bd216179a110fd1ace2f1b1c63/raw/0337233b13854a1ce919d03cb39186b229947731/NameThatPictureData"
  );

  const wordWithImage: Word[] = await response.json();

  return {
    props: {
      letters,
      wordWithImage,
    },
  };
};
