import CartButtons from "../../buttons/CartButtons";
import "../../../css/pizza.css";
import { motion } from "framer-motion";
function PopUp({ selectedItem, closePopup }) {
  return (
    <div className="popupOverlay" onClick={closePopup}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <div className="exitBtnDiv">
          <button className="exitBtn" onClick={closePopup}>
            X
          </button>
        </div>
        <div className="transformY cardItem">
          <motion.div
          
          
          >
            <h2>{selectedItem.name}</h2>
          <motion.img
            className="img itemImage"
            src={selectedItem.image}
            alt={selectedItem.name}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
            initial={{ height: "auto" }}
            animate={{ height: "300px" }}
            exit={
              {
                // transition: { duration: 1 },  // משך זמן האנימציה ביציאה
                // animation: 'exitAnimation 1s', // אנימציה ספציפית ביציאה
                // animationFillMode: 'forwards'
              }
            }
        
          />
          </motion.div>

          <motion.div
            transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
            initial={{ height: "auto" }}
            animate={{ height: "100px" }}
            exit={
              {
                // transition: { duration: 1 },  // משך זמן האנימציה ביציאה
                // animation: 'exitAnimation 1s', // אנימציה ספציפית ביציאה
                // animationFillMode: 'forwards'
              }
            }
            className="cardInfoHolder"
          >
            <p className="text-popup" >{selectedItem.materials}</p>
            <p className="text-popup" >מחיר: {selectedItem.price} ש"ח</p>


            <CartButtons item={selectedItem} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
