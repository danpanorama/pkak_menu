import "../../../css/pizza.css";
import CartButtons from "../../buttons/CartButtons";

function PizzaCategory(props) {
  return (
    <div
        onClick={props.onClick}  // הקש על הפריט יפתח פופ-אפ
     className="pizzaSquare flex-col-center">
      <div className="image">
        <img src={props.item.image} alt="" className="img round" />
      </div>

    
        <div className="infoPizzaHolder">
        <h1 className="pizzaItemHeader ">{props.item.name}</h1>
        <p className="text max-h">{props.item.materials}</p>
      </div>
      <p className="priceHeader ">שח {props.item.price}</p>

  
     {/* <CartButtons/> */}
    </div>
  );
}

export default PizzaCategory;
