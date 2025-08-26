import "../../css/dropdown.css";
import BeerButtons from "../buttons/BeerButtons";
import CartButtons from "../buttons/CartButtons";
import ShotInTen from "./ShotInTen";
import { useSelector, useDispatch } from "react-redux";
function BeerDropdown(props) {
  const orders = useSelector((state) => state.order.data);
  //   const existingItem = orders.find(
  //     (orderItem) =>
  //       orderItem.name === item.name &&
  //       JSON.stringify(orderItem.extras?.sort()) ===
  //         JSON.stringify(item.extras?.sort())
  //   );

  const halfItem = orders.find(
    (orderItem) =>
      orderItem.name === props.data.name &&
      orderItem.size === "half" &&
      JSON.stringify(orderItem.extras?.sort()) ==
        JSON.stringify(props.data.extras?.sort())
  );

  const thirdItem = orders.find(
    (orderItem) =>
      orderItem.name === props.data.name &&
      orderItem.size === "third" &&
      JSON.stringify(orderItem.extras?.sort()) ==
        JSON.stringify(props.data.extras?.sort())
  );

  const halfQuantity = halfItem ? halfItem.quantity : 0;
  const thirdQuantity = thirdItem ? thirdItem.quantity : 0;

  //   const itemQuantity = existingItem ? existingItem.quantity : 0;

  const sumShots = orders.reduce((sum, item) => {
    if (item.deal) {
      // כל יחידה של חצי או שליש נותנת צייסר אחד
      return sum + item.quantity;
    }
    return sum;
  }, 0);

  return (
    <div
      className={
        props.isActive && props.data.id == props.itemId
          ? "dropDownContainer"
          : "closeDropdownBeer"
      }
    >
      <div className="dropdownHolder">
        <div className="holdBeerInfo">
          <div className="infoSide">
            <h1 className="dropdownHeader">{props.data.name}</h1>
            <div className="infoBeerRow">
              <p className="text head">אחוז אלכוהול:</p>{" "}
              <p className="text">{props.data.alcoholPercent}</p>
            </div>
            <div className="infoBeerRow">
              <p className="text head"> מדינה:</p>{" "}
              <p className="text flex-row-center">
                {props.data.origin}{" "}
                <img className="imgSmall" src={props.data.img} alt="" />
              </p>
            </div>
            <div className="infoBeerRow">
              <p className="text head"> טעם:</p>{" "}
              <p className="text">{props.data.tasteNotes}</p>
            </div>
            <div className="infoBeerRow">
              <p className="text head"> זורם עם:</p>{" "}
              <p className="text">{props.data.pairing}</p>
            </div>
            <div className="infoBeerRow">
              <p className="text head"> תיאור:</p>{" "}
              <p className="text">{props.data.description}</p>
            </div>
          </div>
          <div className="imageSide">
            <img src={props.data.logo} alt="" className="img" />
          </div>
        </div>
        <BeerButtons
          item={{ ...props.data, category: props.category }}
          halfQuantity={halfQuantity}
          thirdQuantity={thirdQuantity}
        />
      </div>
      
        <ShotInTen
        item={{ ...props.data, category: props.category }}
        isTrue={halfQuantity ||thirdQuantity ? true : false}
        sum={sumShots}
      />
      
    
    </div>
  );
}

export default BeerDropdown;
