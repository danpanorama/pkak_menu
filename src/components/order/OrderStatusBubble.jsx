import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import WaitingOrderPopup from "../../pages/WaitingOrderPopup";
import "../../css/order.css";
function OrderStatusBubble() {
  const [selectedOrder, setSelectedOrder] = useState(null); // השינוי כאן
  const { orders } = useSelector((state) => state.orderStatus);

  if (!orders || orders.length === 0) return null;

  return (
    <>
      {orders.map((order, index) => (
        <motion.div
          key={order.id}
          className="orderStatusBubble"
          drag
          dragMomentum={false}
          dragConstraints={{
            left: 0,
            top: 0,
            right: window.innerWidth - 100,
            bottom: window.innerHeight - 100,
          }}
          onClick={() => setSelectedOrder(order)} // שמירת ההזמנה שנבחרה
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: "fixed",
            bottom: 20 + index * 70,
            right: 20,
            zIndex: 1000 + index,
            cursor: "grab",
          }}
        >
      {order.id}#
          🚖 ההזמנה בדרך
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedOrder && (
          <WaitingOrderPopup
            order={selectedOrder} // שולחים את ההזמנה לפופאפ
            close={() => setSelectedOrder(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}


export default OrderStatusBubble;











