import { useState } from "react";
import GameName from "../components/gameName/GameName";
import Layout from "../components/Layout";
import GamesNameData from "../data/GamesName.json";

interface GamesData {
  id: string;
  gameName: string;
  gameLinkName: string;
}

const Games: React.FC = () => {
  const [gamesData] = useState<Array<GamesData>>(GamesNameData);
  return (
    <Layout title="Games">
      <section>
        <h1>Games Pages</h1>
        {gamesData.map((game) => (
          <GameName gameLinkName={game.gameLinkName} gameName={game.gameName} />
        ))}
      </section>
    </Layout>
  );
};
export default Games;
