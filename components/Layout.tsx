import Head from "next/head";
import NavBar from "./navbar/NavBar";

interface LayoutProps {
  title: string;
}
const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
