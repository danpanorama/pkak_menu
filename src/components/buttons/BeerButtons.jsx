// import "../../css/btn.css";
// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import { addItem, removeItem } from "../../redux/reducers/orderReducer";
// import { addToCart } from "../../utils/cartHelper";
// import half from "../../icons/beer-svgrepo-com (2).svg";
// import third from "../../icons/beer-poured-into-glass-svgrepo-com.svg";
// import { useSelector, useDispatch } from "react-redux";
// function BeerButtons({ item, thirdQuantity, halfQuantity, setPopUpState }) {
//   const dispatch = useDispatch();

//   return (
//     <motion.div
//       transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="beerButtonsHolder"
//     >
//       <div className="beerButtonsHolder">
//         <button
//           onClick={() => {
//             addToCart(dispatch, { ...item, size: "half" });
//             setPopUpState({ isOpen: true, data: { ...item, size: "half" } });
//           }}
//           className="beerBtn"
//         >
//           חצי <img src={half} className="icon2" alt="" />
//         </button>

//         <button
//           onClick={() => {
//             addToCart(dispatch, { ...item, size: "third", volume: "330ml" });
//             setPopUpState({ isOpen: true, data: { ...item, size: "third" } });
//           }}
//           className="beerBtn"
//         >
//           שליש <img src={third} className="icon2" alt="" />
//         </button>
//       </div>
//       <div className="beerButtonsHolder">
//         {halfQuantity > 0 && (
//           <div className="buttonHolderBeer">
//             <img
//               onClick={() => {
//                 addToCart(dispatch, { ...item, size: "half" });
//                 setPopUpState({ isOpen: true, data: item }); // פותח פופאפ עם המידע של הבירה
//               }}
//               src={half}
//               className="icon2"
//               alt=""
//             />
//             {halfQuantity}חצי
//             <span className="minusOne">-</span>
//           </div>
//         )}

//         {thirdQuantity > 0 && (
//           <div className="buttonHolderBeer">
//             <img
//               onClick={() => {
//                 addToCart(dispatch, {
//                   ...item,
//                   size: "third",
//                   volume: "330ml",
//                 });
//                 setPopUpState({ isOpen: true, data: item }); // פותח פופאפ עם המידע של הבירה
//               }}
//               src={third}
//               className="icon2"
//               alt=""
//             />
//             {thirdQuantity}שליש
//             <span className="minusOne">-</span>
//           </div>
//         )}
//       </div>

//       {/* {itemQuantity > 0 && <button className="beerBtn minus">-</button>} */}
//     </motion.div>
//   );
// }

// export default BeerButtons;
import "../../css/btn.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart, QuickRemoveFromCart, removeFromCart } from "../../utils/cartHelper";
import half from "../../icons/beer-svgrepo-com (2).svg";
import third from "../../icons/beer-poured-into-glass-svgrepo-com.svg";

function BeerButtons({ item, thirdQuantity, halfQuantity, setPopUpState }) {
  const dispatch = useDispatch();

  const handleClick = (size) => {
    setPopUpState({ isOpen: true, data: { ...item, size } });
  };

  return (
    <motion.div
      transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="beerButtonsHolder"
    >
      <div className="beerButtonsHolder">
        <button onClick={() => handleClick("half")} className="beerBtn">
          חצי <img src={half} className="icon2" alt="" />
        </button>

        <button onClick={() => handleClick("third")} className="beerBtn">
          שליש <img src={third} className="icon2" alt="" />
        </button>
      </div>

      <div className="beerButtonsHolder">
        {halfQuantity > 0 && (
          <div className="buttonHolderBeer">
            <img
              onClick={() => QuickRemoveFromCart(dispatch, { ...item, size: "half" })}
              src={half}
              className="icon2"
              alt=""
            />
            {halfQuantity}חצי
            <span className="minusOne">-</span>
          </div>
        )}

        {thirdQuantity > 0 && (
          <div className="buttonHolderBeer">
            <img
              onClick={() => QuickRemoveFromCart(dispatch, { ...item, size: "third" })}
              src={third}
              className="icon2"
              alt=""
            />
            {thirdQuantity}שליש
            <span className="minusOne">-</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default BeerButtons;
