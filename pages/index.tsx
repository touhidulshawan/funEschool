import Head from "next/head";
import Layout from "../components/Layout";
import Bio from "../components/home/Bio";
import Button from "../components/Button";
import HeroImage from "../components/home/HeroImage";

function Home() {
  return (
    <Layout title="FuneSchool">
      <div>
        <Bio />
        <Button btnName="Start Learing" />
      </div>
      <div>
        <HeroImage />
      </div>
    </Layout>
  );
}
export default Home;
