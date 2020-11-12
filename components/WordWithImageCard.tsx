import Image from "next/image";
interface Props {
  word: string;
  imagePath: string;
  textCase: boolean;
}

const WordWithImageCard: React.FC<Props> = ({ word, imagePath, textCase }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 py-2 px-4 border-2 border-gray-800 rounded-md">
      <Image src={imagePath} width={100} height={100} />
      <p
        className={`text-center mt-4  text-indigo-300 text-2xl ${
          textCase ? "uppercase" : "lowercase"
        }`}
      >
        {word}
      </p>
    </div>
  );
};

export default WordWithImageCard;
