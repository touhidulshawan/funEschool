import Link from "next/link";

interface GamesNameProps {
  gameName: string;
  gameLinkName: string;
}

const GameName: React.FC<GamesNameProps> = ({ gameName, gameLinkName }) => {
  return (
    <div>
      <Link href={`/games/${gameLinkName}`}>
        <a>{gameName}</a>
      </Link>
    </div>
  );
};
export default GameName;
