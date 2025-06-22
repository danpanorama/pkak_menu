import "../../css/btn.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function CartButtons({ item }) {
  const orders = useSelector((state) => state.order.data);

  // בדיקה אם המוצר הזה קיים בעגלה
  const itemExists = orders.some((orderItem) => {
    return (
      orderItem.name === item.name &&
      JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
    );
  });

  return (
    <motion.div
      transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="buttonsHolder"
    >
        {itemExists && <button className="btn minus">-</button>}
      <button className="btn quantity">0</button>
       <button className="btn plus">+</button>
   
    </motion.div>
  );
}

export default CartButtons;
