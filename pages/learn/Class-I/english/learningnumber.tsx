import Layout from "../../../../components/Layout";
import { v4 as uuid } from "uuid";

const LearningNumber: React.FC = () => {
  const numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  return (
    <Layout title="Learning Number">
      <h1 className="pb-5 mb-4 text-2xl tracking-wide text-center text-pink-500 capitalize md:border-b-2 md:border-gray-800">
        Learn numbers
      </h1>
      <section className="max-w-xl mx-auto text-center ">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {numbers.map((num) => (
            <div
              key={uuid()}
              className="flex items-center justify-center w-32 h-32 bg-gray-800 border-2 border-gray-900 rounded-md"
            >
              <p className="text-5xl text-gray-400">{num}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default LearningNumber;
