import "../../css/cart.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
  const orders = useSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState(false);

  const hasItems = orders.data.length > 0;

  const groupedByCategory = orders.data.reduce((acc, item) => {
    const category = item.category || "אחר";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      transition={{ duration: 0.5 }}
      initial={{ y: 100, opacity: 0 }}
      animate={hasItems ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      className={`cartController ${hasItems ? "openCartController" : "closeCartController"} ${isOpen ? "expanded" : ""}`}
    >
      <div className="cartContent">
        <h2 style={{fontSize:'20px'}}>סך הכל: ₪{orders.totalPrice.toFixed(2)}</h2>

        {isOpen && (
          <div className="cartItems">
            {Object.entries(groupedByCategory).map(([category, items]) => (
              <div key={category} className="cartCategory">
                {/* <h3>{category}</h3> */}
                <ul>
                  {items.map((item, index) => (
                    <li  key={index}>
                      {console.log(item)}
                      <span style={{fontSize:'13px'}} >{item.name}</span> 
<span style={{ fontSize: '13px',maxWidth:'100px', }}>
  {item.extras?.length > 0
    ? item.extras.map((change, index) => (
        <span key={index}>
          {change}
          {index < item.extras.length - 1 ? ', ' : ''}
        </span>
      ))
    : 'ללא שינויים'}
</span>

                       <span style={{fontSize:'13px'}}>₪{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
