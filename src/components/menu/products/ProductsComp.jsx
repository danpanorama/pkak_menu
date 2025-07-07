import "../../../css/pizza.css";
import CartButtons from "../../buttons/CartButtons";


// אני לא משתמש בזה זה מוכן לסקיצה שניה אם אני עושה הכל אותו דבר 

function ProductsComp(props) {
  return (
    <div
        onClick={props.onClick}  // הקש על הפריט יפתח פופ-אפ
     className="pizzaSquare flex-col-center">
      <div className="image">
        <img src={props.item?.image?props.item.image:''} alt="" className="img round" />
      </div>

    
        <div className="infoPizzaHolder">
        <h1 className="pizzaItemHeader ">{props.item?.name}</h1>
        <p className="text max-h">{props.item?.materials}</p>
      </div>
      <p className="priceHeader ">{props.item?.price}₪ </p>

  
  
    </div>
  );
}

export default ProductsComp;
