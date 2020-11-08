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
      <section>
        <h1>Games Pages</h1>
        {gameNames.map((game) => (
          <GameName
            key={game.id}
            gameLinkName={game.gameLinkName}
            gameName={game.gameName}
          />
        ))}
      </section>
    </Layout>
  );
};
export default Games;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/c91a867693ff825c42fb7d5a1fc2fa46/raw/472b76954a5db80865b4270d1f2e1483de6d914f/GameName"
  );
  const gameNames: GamesNames[] = await response.json();

  return {
    props: {
      gameNames,
    },
  };
};
