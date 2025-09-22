// import "../../css/dropdown.css";
// import ShotOf from "../../icons/shotof.svg";
// import { useDispatch } from "react-redux";
// import { updateDealOrderAction } from "../../redux/actions/addOrderItem";

// function ShotPopup({ isOpen, onClose, item }) {
//   const dispatch = useDispatch();

//   if (!isOpen) return null; // לא מציג כלום אם סגור

//   return (
//     <div className="popupOverlay" onClick={onClose}>
//       <div
//         className="popupContent"
//         onClick={(e) => e.stopPropagation()} // שלא יסגר בלחיצה בפנים
//       >
//         <h2 className="shotHeader">בחר את הצ'ייסר שלך</h2>
//         <div className="shotsGrid">
//           {["וודקה", "טקילה", "ויסקי", "ארק", "ליקר", "רום"].map(
//             (shot, index) => (
//               <div
//                 key={index}
//                 className="shotBox"
//                 onClick={() => {
//                   dispatch(
//                     updateDealOrderAction({
//                       ...item,
//                       deal: { name: shot, selectedOptions: true },
//                     })
//                   );
//                   onClose();
//                 }}
//               >
//                 <img src={ShotOf} className="icon" alt="" />
//                 <p className="shotName">{shot}</p>
//               </div>
//             )
//           )}
//         </div>
//         <button className="exitBtn" onClick={onClose}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ShotPopup;
import "../../css/dropdown.css";
import ShotOf from "../../icons/shotof.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../utils/cartHelper";
import { updateDealOrderAction } from "../../redux/actions/addOrderItem";

function ShotPopup({ isOpen, onClose, item }) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.data);

  if (!isOpen) return null;

  const handleShotSelect = (shot) => {
    // בודק אם המוצר כבר קיים בעגלה לפי Origin_Id
    const existingItem = orders.find((o) => o.Origin_Id === item.Origin_Id);

    if (existingItem) {
      // אם קיים → מעדכן רק את deal
      const updatedItem = { ...existingItem, deal: { name: shot, selectedOptions: true } };
     console.log('yes its a existing item ')
      dispatch(updateDealOrderAction(updatedItem));

    } else {
      // אם לא קיים → מוסיף חדש
      const itemWithDeal = { ...item, deal: { name: shot, selectedOptions: true } };
      addToCart(dispatch, itemWithDeal);
    }

    onClose();
  };

  const handleCloseWithoutDeal = () => {
    const existingItem = orders.find((o) => o.Origin_Id === item.Origin_Id);

    if (existingItem) {
      const updatedItem = { ...existingItem, deal: { name: null, selectedOptions: false } };
      addToCart(dispatch, updatedItem);
    } else {
      addToCart(dispatch, { ...item, deal: { name: null, selectedOptions: false } });
    }

    onClose();
  };

  return (
    <div className="popupOverlay" onClick={handleCloseWithoutDeal}>
      <div
        className="popupContent"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="shotHeader">  צ'ייסר  ב 10 שח?</h2>
        <div className="shotsGrid">
          {["וודקה", "טקילה", "ויסקי", "ארק", "ליקר", "רום"].map(
            (shot, index) => (
              <div
                key={index}
                className="shotBox"
                onClick={() => handleShotSelect(shot)}
              >
                <img src={ShotOf} className="icon" alt="" />
                <p className="shotName">{shot}</p>
              </div>
            )
          )}
        </div>
        <button className="exitBtn" onClick={handleCloseWithoutDeal}>לא תודה</button>
      </div>
    </div>
  );
}

export default ShotPopup;

