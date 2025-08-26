import "../../css/btn.css";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { addItem, removeItem } from "../../redux/reducers/orderReducer";
import { addToCart } from "../../utils/cartHelper";
import half from "../../icons/beer-svgrepo-com (2).svg";
import third from "../../icons/beer-poured-into-glass-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
function BeerButtons({ item,thirdQuantity,halfQuantity }) {
    const dispatch = useDispatch();

  return (
    <motion.div
      transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="beerButtonsHolder"
    >
      <div className="beerButtonsHolder">
        <button
          onClick={() => addToCart(dispatch, { ...item, size: "half" })}
          className="beerBtn"
        >
          חצי <img src={half} className="icon2" alt="" />
        </button>

        <button
          onClick={() => addToCart(dispatch, { ...item, size: "third" })}
          className="beerBtn"
        >
          שליש <img src={third} className="icon2" alt="" />
        </button>
      </div>
      <div className="beerButtonsHolder">
        {halfQuantity > 0 && (
          <div>
            <img onClick={()=>{  dispatch(removeItem({ ...item, size: "half" }))}} src={half} className="icon2" alt="" />
            {halfQuantity}חצי
          </div>
        )}

        {thirdQuantity > 0 && (
          <div>
            <img onClick={()=>{  dispatch(removeItem({ ...item, size: "third" }))}} src={third} className="icon2" alt="" />
            {thirdQuantity}שליש
          </div>
        )}
      </div>

      {/* {itemQuantity > 0 && <button className="beerBtn minus">-</button>} */}
    </motion.div>
  );
}

export default BeerButtons;
