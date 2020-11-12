import Link from "next/link";
import Image from "next/image";
import Layout from "../../../../components/Layout";
import GameName from "../../../../components/gameName/GameName";

const ReviewLearning: React.FC = () => {
  return (
    <Layout title="Review Learning">
      <h1 className="text-3xl tracking-wide text-center text-pink-400 md:border-b-2 border-gray-800 pb-4 mb-4">
        Review Your Learning
      </h1>
      <section className="p-3 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:mt-8 mt-4 gap-5">
        <GameName
          gameLinkName="name_that_picture"
          gameName="name that picture"
        />
        <GameName gameLinkName="counting" gameName="counting" />
      </section>
    </Layout>
  );
};

export default ReviewLearning;
