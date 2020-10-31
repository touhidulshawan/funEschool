import NavBar from "./navbar/NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
