
import MenuLogo from "../components/logo/MenuLogo";
import { menu } from "../database/menu";
import "../css/nav.css";
import Category from "../components/menu/Category";

function NavSideMenuPopUp(props) {
  return (
        <div className={props.activePopUp?"openNavSideMenuPopUp":"closeNavSideMenuPopUp"}>
          
          <div onClick={props.closeMenu} className="closeMenuButton">
            X
          </div>
          <div className="menuContainer">
            {/* <div className="menuLogo flex-col-center">
              <MenuLogo/>
            </div> */}


            <div onClick={props.closeMenu} className="linkList">
   {menu.map((e, i) => (
            <Category  key={i} category={e} items={e.items} image={e.image} />
          ))}
            </div>



          </div>
          
        </div>
  )



}

export default NavSideMenuPopUp;
