import "../../css/cart.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItemList from "./CartItemList";
import CartItemDropdown from "./CartItemDropdown";
import TipSelect from "./TipSelect";
import CardChooseSection from "./CardChooseSection";
import { useDispatch } from "react-redux";
import { startOrder, orderPending } from "../../redux/reducers/orderStatusSlice";
import { addOrderItem } from "../../redux/actions/addOrderItem";

function Cart() {
  const orders = useSelector((state) => state.order);
  const [isOpen, setIsOpen] = useState(false);
  const [itemDropdown, setItemDropdown] = useState(null);
  const [selectedTip, setSelectedTip] = useState(0);

  const hasItems = orders.data.length > 0;
  console.log(orders)
 
const tipAmount = (orders.totalPrice * selectedTip) / 100;

const dispatch = useDispatch();

const handleSubmitOrder = () => {
  console.log('here')
  // 1. מציג מצב loading
  dispatch(startOrder());

  // 2. סימולציה של שליחה לשרת
  setTimeout(() => {
    const orderData = {
      id: Math.floor(Math.random() * 100000),
      eta: 20, // זמן משוער בדקות
      items: orders.data,
      totalPrice: orders.totalPrice,
    };

    // שולח לרדיוסר של סטטוס ההזמנה
    dispatch(orderPending(orderData));

    // שולח כל פריט לרדיוסר של orders אם צריך
    orders.data.forEach(item => dispatch(addOrderItem(item)));
  }, 1000);
};

useEffect(() => {
  const handleScroll = () => {
    if (isOpen && window.scrollY > 50) {
      setIsOpen(false); // סוגר בסטייל
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isOpen]);




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
      animate={isOpen ? { y: 0, opacity: 1, height: "80vh" } : { y: 0, opacity: 1, height:  hasItems ? "10vh" : "0 " }}
      // animate={hasItems ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      className={`cartController ${
        hasItems ? "openCartController" : "closeCartController "
      } ${isOpen ? "expanded" : ""}`}
    >
      <div className="cartContent">
        {!isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)} className="orderIdAndPrice">
            <h2 className="orderPriceCart">₪{orders.totalPrice.toFixed(2)}</h2>
            {/* <h2  className="orderId">
              #143209
            </h2> */}
          </div>
        ) : null}

        {isOpen && (
          <>
            <CartItemList
              itemDropdown={itemDropdown}
              setItemDropdown={setItemDropdown}
              groupedByCategory={groupedByCategory}
            />
            <div className="padpage">
              <p className="totalPrice">
                דמי תפעול: ₪{Math.trunc(orders.totalPrice / 17)}
              </p>

              <p className="totalPrice ">
                סך הכל :₪{orders.totalPrice.toFixed(2)}{" "}
              </p>
            </div>
            <div className="lineKav"></div>
            <div className="lastAlerts">
              <div className="notes">
                <p className="alertLabel">הערות נוספות</p>
                <textarea name="" className="textarea" id=""></textarea>
              </div>
              <div className="selections">
                <div className="flex row selects ">
                  <input type="checkbox" name="" id="" />
                  <label className="select" htmlFor="">
                    אני רוצה לקבל התראה לטלפון שהכל מוכן
                  </label>
                </div>
                <div className="flex row selects ">
                  <input type="checkbox" name="" id="" />
                  <label className="select" htmlFor="">
                    לא לשלוח לכאן הודעות{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="lineKav"></div>
            <div className="lastAlerts">

           <TipSelect onSelectTip={(tip) => setSelectedTip(tip)} />


              <div className="lineKav"></div>
                 <p className="totalPrice ">
              כרטיס אשראי לבחירה
              </p>

<CardChooseSection/>

              <div className="lineKav"></div>

              {/* פה יהיה הקומפוננט של בחירת כרטיס אשראי  */}

              <div className="dropdownRadio">
                <h1 className="closeDealHeader">סיכום הזמנה</h1>
                <p className="totalPrice">
                  {" "}
                  דמי תפעול:₪{4}{" "}
                </p>
       

                <p className="totalPrice">
                  {" "}
                  טיפ:₪{tipAmount}
                </p>


                <p className="totalPrice">
                  סך הכל :₪{orders.totalPrice.toFixed(2)}{" "}
                </p>
              </div>
            </div>

            <div className="cart-actions">
              <button
                className="cart-btn back"
                onClick={() => setIsOpen(false)}
              >
                חזרה להזמנה
              </button>
              <button  onClick={handleSubmitOrder}  className="cart-btn submit">בצע הזמנה</button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
