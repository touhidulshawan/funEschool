import Link from "next/link";
import Layout from "../components/Layout";
import Bio from "../components/home/Bio";
import Button from "../components/Button";
import HeroImage from "../components/home/HeroImage";

function Home() {
  return (
    <Layout title="Fun-eSchool">
      <section className="flex flex-col-reverse justify-between h-full lg:grid lg:grid-cols-2  lg:grid-flow-row lg:mt-10 lg:gap-2 lg:justify-items-center lg:items-center ">
        <div className="p-2 px-4">
          <Bio />
          <div className="mt-8 mb-4 lg:mt-12">
            <Link href="/learn">
              <a className="bg-gradient-to-l from-blue-600 to-pink-600 text-gray-300 p-4 shadow-md my-5 rounded font-semibold tracking-widest   uppercase focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                Start Learning
              </a>
            </Link>
          </div>
        </div>
        <div className="m-auto lg:-mt-3 overflow-hidden p-4 max-w-2xl">
          <HeroImage />
        </div>
      </section>
    </Layout>
  );
}
export default Home;
