import { Link } from "react-router-dom";
import "../css/nav.css";
import TextLogo from "../components/logo/TextLogo";
import NavSideMenuPopUp from "./NavSideMenuPopUp";
import { useState } from "react";
function NavBar() {

  const [activePopUp,setActivePopUp] = useState(false)


  function openMenu(){
    setActivePopUp(!activePopUp)
  }


  return (
    <div className="navbar flex-col-center">
         {/* <div className="backLinkDiv">

הדבר הזה בשביל שהלוגו יתחלף עם כפתור לחזרה אחורה הבנו שאנחנו בפקק לא צריך לוגו כל הדרך

        <Link className="backLink" to='/mainMenu'>back</Link>
      </div> */}
      <div className="navFirstChild">
      <Link to={"/"} >
        <div className="textLogoHolder flex-col-center">
          <TextLogo />
        </div>
      </Link>
      
        <div className="navMenuButton"  onClick={openMenu} >
        <div className="lineMenu"></div>
        <div className="lineMenu"></div>
        <div className="lineMenu"></div> 
        </div>

      




      </div>
        <NavSideMenuPopUp closeMenu={openMenu} activePopUp={activePopUp} />
    </div>
  );
}

export default NavBar;
