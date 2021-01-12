import { InferGetStaticPropsType } from "next";
import Layout from "../../components/Layout";
import ARModelCard from "../../components/ar/ARModelCard";

interface ARModels {
  id: string;
  modelName: string;
  modelPath: string;
}

const Gallery = ({
  armodels,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="AR Models">
      <section className="mx-auto">
        <div className="m-4 p-4 border-b-2 border-gray-700 rounded shadow-none">
          <h1 className=" text-lg md:text-2xl mb-4 text-yellow-200">
            How can I see Augmented Reality
          </h1>
          <ol className="list-decimal ml-4 pl-4 text-base">
            <li className="mb-2  tracking-wide">
              First Click on this{" "}
              <span className="text-pink-500">
                <a
                  href="https://raw.githubusercontent.com/touhidulShawan/funEschool/master/public/images/marker/hiro.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marker image
                </a>
              </span>
            </li>
            <li className="mb-2  tracking-wide">
              Visit this page on Mobile Device For better experience
            </li>
            <li className="mb-2  tracking-wide">Click on any models below</li>
            <li className="mb-2  tracking-wide">
              Focus the camera on Marker image
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {armodels.map((model) => (
            <ARModelCard
              key={model.id}
              modelLink={model.modelPath}
              modelName={model.modelName}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default Gallery;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/53a211f5bf6ef6a54943489fed132996/raw/e6ea9d23bde6ecd61c475ef86b299aa6304a13c0/AR-Models"
  );
  const armodels: ARModels[] = await response.json();

  return {
    props: {
      armodels,
    },
  };
};
