import Link from "next/link";
import Image from "next/image";

interface GamesNameProps {
  gameName: string;
  gameLinkName: string;
}

const GameName: React.FC<GamesNameProps> = ({ gameName, gameLinkName }) => {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-700  shadow-md pb-3 rounded-md transform hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="w-full mb-5 m-auto border-b-2 border-blue-200 flex justify-center items-center p-4">
        <Image src={`/images/${gameLinkName}.svg`} width={200} height={200} />
      </div>
      <Link href={`/games/${gameLinkName}`}>
        <a className="capitalize text-xl text-gray-400 hover:text-blue-400 md:text-2xl  text-center pb-5">
          {gameName}
        </a>
      </Link>
    </div>
  );
};
export default GameName;
