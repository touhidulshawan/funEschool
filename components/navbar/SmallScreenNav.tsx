import { useState } from "react";
import NavItem from "./NavItem";
import Logo from "../Logo";
import { RiMenu3Line } from "react-icons/ri";

const SmallScreenNav: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="bg-gray-900 border-b-2 border-gray-800 mb-4 text-teal-400 p-2 w-screen">
      <div className="container m-auto flex justify-between items-center">
        <div className="ml-6">
          <Logo />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="ml-2 text-2xl text-gray-500 hover:text-gray-700 transtion-all ease-in-out duration-500"
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
      <ul
        className={`mt-4 flex flex-col justify-start items-start ${
          toggleMenu ? "block" : "hidden"
        }`}
      >
        <NavItem className="mr-6 uppercase" link="/" linkName="Home" />
        <NavItem className="mr-6 uppercase" link="/learn" linkName="Learn" />
        <NavItem className="mr-6 uppercase" link="/games" linkName="Games" />
        <NavItem className="mr-6 uppercase" link="/ar" linkName="AR" />
      </ul>
    </nav>
  );
};

export default SmallScreenNav;
