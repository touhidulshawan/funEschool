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
              <a className="bg-gray-900 text-teal-400 border-2 border-gary-800 rounded-md p-4 shadow-none tracking-wide uppercase hover:bg-gray-800 transition-all duration-200">
                Start Learning
              </a>
            </Link>
          </div>
        </div>
        <div className="m-auto lg:-mt-3 overflow-hidden">
          <HeroImage />
        </div>
      </section>
    </Layout>
  );
}
export default Home;
