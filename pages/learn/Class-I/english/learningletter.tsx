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
  return (
    <Layout title="Learning Word">
      <section>
        <h1>Learning Letter and Word</h1>
      </section>
      <div>
        <section>
          <h2>There are 26 letters in English</h2>
          <div>
            {letters.map((letter) => (
              <div key={uuid()}>
                <h2>{letter}</h2>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
            {wordWithImage.map(({ id, imgPath, name }) => (
              <WordWithImageCard key={id} imagePath={imgPath} word={name} />
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
