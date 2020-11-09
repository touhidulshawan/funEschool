import Image from "next/image";
interface Props {
  word: string;
  imagePath: string;
}

const WordWithImageCard: React.FC<Props> = ({ word, imagePath }) => {
  return (
    <div>
      <Image src={imagePath} width={200} height={200} />
      <p>{word}</p>
    </div>
  );
};

export default WordWithImageCard;
