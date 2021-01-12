import Link from "next/link";
import Layout from "../components/Layout";
import Bio from "../components/ar/Bio";
import HeroImage from "../components/HeroImage";

const AR = () => {
  return (
    <Layout title="Augmented Reality">
      <section className="flex flex-col-reverse justify-between h-full lg:grid lg:grid-cols-2  lg:grid-flow-row lg:mt-10 lg:gap-2 lg:justify-items-center lg:items-center ">
        <div className="p-2 px-4">
          <Bio />
          <div className="mt-8 mb-4 lg:mt-12">
            <Link href="/ar/gallery">
              <a className="bg-gradient-to-bl from-blue-600 to-pink-600 text-gray-300 p-4 shadow-md my-5 rounded font-semibold tracking-widest  uppercase focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transform hover:translate-y-2">
                Explore AR Gallery
              </a>
            </Link>
          </div>
        </div>
        <div className="m-auto lg:-mt-3 overflow-hidden p-4 max-w-2xl">
          <HeroImage imgPath="/images/augmented_reality.svg" />
        </div>
      </section>
    </Layout>
  );
};
export default AR;
