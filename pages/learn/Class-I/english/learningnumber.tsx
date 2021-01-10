import Layout from "../../../../components/Layout";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const LearningNumber: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  return (
    <Layout title="Learning Number">
      <h1 className="pb-5 mb-4 text-2xl tracking-wide text-center text-pink-500 capitalize flex justify-center items-center">
        Learn numbers
      </h1>
      <section className="max-w-xl mx-auto text-center flex justify-center items-center">
        <div className="flex justify-center items-center flex-col m-4 w-full max-w-md p-8">
          <p className="font-bold text-9xl px-8 text-gray-300  py-2">{num}</p>
          <div className="flex justify-between w-full mt-10">
            <button
              onClick={() => setNum(num - 1)}
              disabled={num === 0}
              className="bg-red-700 text-red-200 px-6 py-2 font-bold text-lg focus:ring-1 focus:ring-red-500"
            >
              Previous Number
            </button>
            <button
              onClick={() => setNum(num + 1)}
              className="bg-green-700 text-green-200 px-6 py-2 font-bold text-lg focus:ring-1 focus:ring-green-500"
            >
              Next Number
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearningNumber;
