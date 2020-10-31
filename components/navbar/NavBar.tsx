import { useWindowWidth } from "../utils/useWindowWidth";
import SmallScreenNav from "./SmallScreenNav";
import FullScreenNav from "./FullScreenNav";

const NavBar = (props) => {
  let width = useWindowWidth();

  if (width <= 767) {
    return <SmallScreenNav />;
  } else {
    return <FullScreenNav />;
  }
};

export default NavBar;
