import Layout from "../../../../components/Layout";
import { v4 as uuid } from "uuid";

const LearningNumber: React.FC = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout title="Learning Number">
      <section>
        <div>
          {numbers.map((num) => (
            <div key={uuid()}>
              <p>{num}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default LearningNumber;
