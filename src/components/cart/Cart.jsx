import "../../css/cart.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartItemList from "./CartItemList";
import CartItemDropdown from "./CartItemDropdown";



function Cart() {
  const orders = useSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState(false);
  const [itemDropdown,setItemDropdown] = useState(null)


  const hasItems = orders.data.length > 0;
  console.log(orders)

  // קיבוץ לפי קטגוריה
  const groupedByCategory = orders.data.reduce((acc, item) => {
    const category = item.category || "אחר";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <motion.div
      
      transition={{ duration: 0.5 }}
      initial={{ y: 100, opacity: 0 }}
      animate={hasItems ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      className={`cartController ${
        hasItems ? "openCartController" : "closeCartController "
      } ${isOpen ? "expanded" : ""}`}
    >
      <div className="cartContent">
        {!isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)} className="orderIdAndPrice">
            <h2 style={{ fontSize: "20px" }}>₪{orders.totalPrice.toFixed(2)}</h2>
            <h2 style={{ fontSize: "10px" }} className="orderId">
              #143209
            </h2>
          </div>
        ) : null}
       

        {isOpen && (

       <>
    <CartItemList itemDropdown={itemDropdown} setItemDropdown={setItemDropdown}   groupedByCategory={groupedByCategory}  />


    
    <div className="cart-actions">
      <button className="cart-btn back" onClick={() => setIsOpen(false)}>חזרה להזמנה</button>
      <button className="cart-btn submit">בצע הזמנה</button>
    </div>
  </>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
