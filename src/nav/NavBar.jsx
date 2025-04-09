import { Link } from "react-router-dom";
import "../css/nav.css";
import TextLogo from "../components/logo/TextLogo";
function NavBar() {
  return (
    <div className="navbar flex-col-center">
      <div className="navFirstChild">
      
        <div className="textLogoHolder flex-col-center">
          <TextLogo />
        </div>
        <Link className="navMenuButton" to={"/"}>
        <div className="lineMenu"></div>
        <div className="lineMenu"></div>
        <div className="lineMenu"></div>
        
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
