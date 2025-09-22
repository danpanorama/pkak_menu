import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import '../css/waiting.css'

function WaitingOrder() {
  const { status, countdown, orderData } = useSelector((state) => state.orderStatus);
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (status === "pending") {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 60000); // דקה
      return () => clearInterval(interval);
    }
  }, [status]);

  if (status !== "pending") return null;

  return (
    <div className="floatingOrderOverlay">
      <div className="orderCircle">
        <h2>הזמנתך התקבלה!</h2>
        <p>מספר הזמנה: {orderData.id}</p>
        <p>זמן משוער: {timeLeft} דקות</p>
        <button onClick={() => console.log("סגור/חזור")}>✖</button>
      </div>
    </div>
  );
}

export default WaitingOrder;
