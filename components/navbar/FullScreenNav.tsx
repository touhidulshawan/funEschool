import { useRouter } from "next/router";
import NavItem from "./NavItem";
import Logo from "../Logo";
import HomeIcon from "../icon/HomeIcon";
import LearnIcon from "../icon/LearnIcon";
import GameIcon from "../icon/GameIcon";

const FullScreenNav: React.FC = () => {
  const router = useRouter();
  const listStyle = "flex justify-center items-center";
  return (
    <nav className=" bg-gray-900 border-b border-gray-900 mb-4 text-teal-400  w-full">
      <div className="container m-auto md:flex md:justify-between md:items-center">
        <div className="ml-6">
          <Logo />
        </div>
        <ul className="flex md:justify-end md:items-center ">
          <li
            className={
              router.pathname === "/" ? `${listStyle} text-blue-400` : listStyle
            }
          >
            <div className="w-4 h-4">
              <HomeIcon />
            </div>
            <NavItem className="mr-6 uppercase" link="/" linkName="Home" />
          </li>
          <li
            className={
              router.pathname === "/learn"
                ? `${listStyle} text-blue-400 `
                : listStyle
            }
          >
            <div className="w-4 h-4">
              <LearnIcon />
            </div>
            <NavItem
              className="mr-6 uppercase"
              link="/learn"
              linkName="Learn"
            />
          </li>
          <li
            className={
              router.pathname === "/games"
                ? `${listStyle} text-blue-400`
                : listStyle
            }
          >
            <div className="w-5 h-5 mt-1">
              <GameIcon />
            </div>
            <NavItem
              className="mr-6 uppercase"
              link="/games"
              linkName="Games"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FullScreenNav;
