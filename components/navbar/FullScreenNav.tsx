import Link from "next/link";
import NavItem from "./NavItem";
import Logo from "../Logo";

const FullScreenNav: React.FC = () => {
  return (
    <nav className="shadow-sm border-b text-gray-500  w-full">
      <div className="container m-auto md:flex md:justify-between md:items-center">
        <div className="ml-6">
          <Logo />
        </div>
        <ul className="flex md:justify-end md:items-center ">
          <NavItem className="mr-6 uppercase" link="/" linkName="Home" />
          <NavItem className="mr-6 uppercase" link="/learn" linkName="Learn" />
          <NavItem className="mr-6 uppercase" link="/games" linkName="Games" />
        </ul>
      </div>
    </nav>
  );
};

export default FullScreenNav;
