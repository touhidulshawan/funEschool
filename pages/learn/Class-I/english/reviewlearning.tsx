import Link from "next/link";
import Layout from "../../../../components/Layout";

const ReviewLearning: React.FC = () => {
  return (
    <Layout title="Review Learning">
      <section>
        <div>
          <Link href="/games/name_that_picture">
            <a>Name That Picture</a>
          </Link>
        </div>
        <div>
          <Link href="/games/counting">
            <a>Counting</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewLearning;
