import Link from "next/link";
import Layout from "../components/Layout";
import Bio from "../components/home/Bio";
import Button from "../components/Button";
import HeroImage from "../components/home/HeroImage";

function Home() {
  return (
    <Layout title="FuneSchool">
      <div>
        <Bio />
        <Link href="/learn">
          <a>Start Learning</a>
        </Link>
      </div>
      <div>
        <HeroImage />
      </div>
    </Layout>
  );
}
export default Home;
