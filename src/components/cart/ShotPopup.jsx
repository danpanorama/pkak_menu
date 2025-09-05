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
import { useDispatch } from "react-redux";
import { addOrderItem, updateDealOrderAction } from "../../redux/actions/addOrderItem";
import { addToCart } from "../../utils/cartHelper";

function ShotPopup({ isOpen, onClose, item }) {
  const dispatch = useDispatch();

  if (!isOpen) return null;

 const handleShotSelect = (shot) => {
  console.log(item)
  const itemWithDeal = { ...item, deal: { name: shot, selectedOptions: true } };
  addToCart(dispatch, itemWithDeal); // dispatch כאן תקין
  onClose();
};

const handleCloseWithoutDeal = () => {
  addToCart(dispatch, { ...item, deal: { name: null, selectedOptions: false } });
  onClose();
};

  return (
    <div className="popupOverlay" onClick={handleCloseWithoutDeal}>
      <div
        className="popupContent"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="shotHeader">בחר את הצ'ייסר שלך</h2>
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
        <button className="exitBtn" onClick={handleCloseWithoutDeal}>X</button>
      </div>
    </div>
  );
}

export default ShotPopup;
