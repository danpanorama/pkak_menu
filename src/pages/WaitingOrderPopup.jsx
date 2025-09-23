import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import '../css/order.css';

function WaitingOrderPopup({ order, close }) {
  const [timeLeft, setTimeLeft] = useState(order?.eta || 0);

  useEffect(() => {
    if (!order) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, [order]);

  if (!order) return null;

  return (
    <motion.div
      className="floatingOrderOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="orderCircle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h2>הזמנתך התקבלה!</h2>
        <p>מספר הזמנה: {order.id}</p>
        <p>זמן משוער: {timeLeft} דקות</p>
        <button className="closeBtn" onClick={close}>✖</button>
      </motion.div>
    </motion.div>
  );
}


export default WaitingOrderPopup;
