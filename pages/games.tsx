import { InferGetStaticPropsType } from "next";
import GameName from "../components/gameName/GameName";
import Layout from "../components/Layout";

interface GamesNames {
  id: string;
  gameName: string;
  gameLinkName: string;
}

const Games = ({
  gameNames,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Games">
      <section className="mx-auto">
        <h1 className="text-center capitalize text-xl my-4 p-3 md:text-2xl  lg:pb-6 text-purple-600 tracking-wide">
          test your learning by playing games
        </h1>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
          {gameNames.map((game) => (
            <GameName
              key={game.id}
              gameLinkName={game.gameLinkName}
              gameName={game.gameName}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default Games;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/c91a867693ff825c42fb7d5a1fc2fa46/raw/80310ce3b8ef124123018bb81a9d4c7e868adfbb/GameName"
  );
  const gameNames: GamesNames[] = await response.json();

  return {
    props: {
      gameNames,
    },
  };
};
