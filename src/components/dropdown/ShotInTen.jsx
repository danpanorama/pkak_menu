import "../../css/dropdown.css";
import BeerButtons from "../buttons/BeerButtons";
import CartButtons from "../buttons/CartButtons";

function ShotInTen(props) {

  return (
    <div className={ props.isTrue ? "shotComponentContainer" : 'closeShotComponentContainer'}>
      <h1>יש לך <span className="sumShots">{props.sum?props.sum :0}</span> צייסרים ב ₪{props.item.deal?.price} ליחידה</h1>

     
    </div>
  );
}

export default ShotInTen;
