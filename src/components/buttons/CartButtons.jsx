import "../../css/btn.css";
import { motion } from "framer-motion";
import { useSelector,useDispatch } from "react-redux";
import { useMemo } from "react";
import { addItem } from "../../redux/reducers/orderReducer";
import { addToCart } from "../../utils/cartHelper";


function CartButtons({ item }) {
  const orders = useSelector((state) => state.order.data);
  const dispatch = useDispatch();

  const existingItem = orders.find(
    (orderItem) =>
      orderItem.name === item.name &&
      JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
  );

  const itemQuantity = existingItem ? existingItem.quantity : 0;



  return (
    <motion.div
      transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="buttonsHolder"
    >
<button onClick={() => addToCart(dispatch, item)} className="btn plus">+</button>

  
    <button className="btn quantity">{itemQuantity}</button>
         {itemQuantity > 0 && <button className="btn minus">-</button>}
    </motion.div>
  );
}

export default CartButtons;
