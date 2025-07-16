import "../../css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../../utils/cartHelper";
import CartItemDropdown from "./CartItemDropdown";


function CartItemList({ groupedByCategory,setItemDropdown,itemDropdown }) {
  const sizeMap = {
    third: "שליש",
    half: "חצי",
    pint: "פיינט",
    liter: "ליטר",
  };
  const dispatch = useDispatch();
  return (
   <div className="cartItems">
      {Object.entries(groupedByCategory).map(([category, items]) => (
        
        <div  key={category} className="cartCategory">
          <h3 className="categoryTitle">{category}</h3>
          <ul>
            {items.map((item, index) => (
              <>
              <li
                key={index}
                className="cartItemRow"
                    onClick={() =>
                    setItemDropdown(
                      itemDropdown === item.id ? null : item.id
                    )
                  }
               
              >
                <span className="itemName">
                  x{item.quantity} {item.name}{" "}
                  {item.size ? sizeMap[item.size] || item.size : ""}
                </span>

                <span className="itemExtras">
                  {item.extras?.length > 0
                    ? item.extras.map((extra, i) => (
                        <span key={i}>
                          {extra}
                          {i < item.extras.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : " "}
                </span>

                <div className="cart-buttons">
                  <button
                    className="btn-cart minus"
                    onClick={(e) => {
                      e.stopPropagation(); // לא יפעיל את הפופאפ
                      removeFromCart(dispatch, { ...item, quantity: 1 });
                    }}
                  >
                    –
                  </button>
                  <button
                    className="btn-cart plus"
                    onClick={(e) => {
                      e.stopPropagation(); // לא יפעיל את הפופאפ
                      addToCart(dispatch, { ...item, quantity: 1 });
                    }}
                  >
                    +
                  </button>
                </div>
                
              

              </li>
                 <CartItemDropdown     item={item}
                  isOpen={itemDropdown === item.id}  />
               </>
            ))}
          </ul>
          
        </div>
      ))}
     

    </div>
  );
}

export default CartItemList;
