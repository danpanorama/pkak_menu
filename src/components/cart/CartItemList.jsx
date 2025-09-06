import "../../css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../utils/cartHelper";
import CartItemDropdown from "./CartItemDropdown";
import ShotInTen from "../dropdown/ShotInTen";
import ShotPopup from "./ShotPopup";
import { useState } from "react";

function CartItemList({ groupedByCategory, setItemDropdown, itemDropdown }) {
  const [openPopupFor, setOpenPopupFor] = useState(null); // סטייט ברמת CartItemList

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
        <div key={category} className="cartCategory">
          <h3 className="categoryTitle">{category}</h3>
          <ul>
            {items.map((item, index) => {
              const uniqueKey = item.Origin_Id;
              return (
                <>
                  <div className="borderBottomCart">
                    <li
                      key={uniqueKey} // עדיף להשתמש ב-uniqueKey כמפתח במקום index
                      className="cartItemRow"
                      onClick={() =>
                        setItemDropdown((current) =>
                          current === uniqueKey ? null : uniqueKey
                        )
                      }
                    >
                      <span className="itemName">
                        x{item.quantity} {item.name}{" "}
                        {item.size ? sizeMap[item.size] || item.size : ""}
                      </span>

                      <span className="itemExtras">
                        {item.deal ? (
                          item.deal.selectedOptions ? (
                            <span>{item.deal.name}</span>
                          ) : (
                            <span
                              className="dealLink"
                              onClick={(e) => {
                                e.stopPropagation();
                               setOpenPopupFor(item.Origin_Id);
                              }}
                            >
                              לחץ לקבלת צ'ייסר ב־10
                            </span>
                          )
                        ) : item.extras?.length > 0 ? (
                          item.extras.map((extra, i) => (
                            <span key={i}>
                              {extra}
                              {i < item.extras.length - 1 ? ", " : ""}
                            </span>
                          ))
                        ) : (
                          " "
                        )}
                      </span>

                      <ShotPopup
                        isOpen={openPopupFor === item.Origin_Id}
                        onClose={() => setOpenPopupFor(null)}
                        item={item}
                      />

                      <div className="cart-buttons">
                        <button
                          className="btn-cart minus"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(dispatch, { ...item, quantity: 1 });
                          }}
                        >
                          –
                        </button>
                        <button
                          className="btn-cart plus"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(dispatch, { ...item, quantity: 1 });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>

                    {item.category != "בירה" && (
                      <CartItemDropdown
                        item={item}
                        isOpen={itemDropdown === uniqueKey}
                      />
                    )}
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CartItemList;
