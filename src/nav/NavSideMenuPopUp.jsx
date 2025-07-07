import MenuLogo from "../components/logo/MenuLogo";
import { menu } from "../database/menu";
import "../css/nav.css";
import Category from "../components/menu/Category";

function NavSideMenuPopUp(props) {
  const currentPath = window.location.pathname;

  return (
    <div className={props.activePopUp ? "openNavSideMenuPopUp" : "closeNavSideMenuPopUp"}>
      <div onClick={props.closeMenu} className="closeMenuButton">
        X
      </div>
      <div className="menuContainer">
        {/* תוכל לשים לוגו אם תרצה */}
        {/* <div className="menuLogo flex-col-center">
          <MenuLogo />
        </div> */}

        {currentPath === "/mainMenu" ? (
          <div className="linkList" onClick={props.closeMenu}>
            {/* תצוגה שונה רק בדף הזה */}
            <p style={{ color: "white", textAlign: "center" }}>ברוך הבא לתפריט הראשי!</p>
            {/* כאן אפשר גם לשים קומפוננטות אחרות */}
          </div>
        ) : (
          <div className="linkList" onClick={props.closeMenu}>
            {menu.map((e, i) => (
              <Category key={i} category={e} items={e.items} image={e.image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavSideMenuPopUp;
