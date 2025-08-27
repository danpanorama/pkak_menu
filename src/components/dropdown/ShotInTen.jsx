// import "../../css/dropdown.css";
// import BeerButtons from "../buttons/BeerButtons";
// import CartButtons from "../buttons/CartButtons";
// import ShotOf from "../../icons/shotof.svg";

// function ShotInTen(props) {
//   return (
//     <div
//       className={
//         props.isTrue ? "shotComponentContainer" : "closeShotComponentContainer"
//       }
//     >
//       {/* <h1>יש לך <span className="sumShots">{props.sum?props.sum :0}</span> צייסרים ב ₪{props.item.deal?.price} ליחידה</h1> */}
//       <div className="holdShotDiv">
//         <div className="shotIconDiv">
//           <span>{props.sum ? props.sum : 0}</span>
//           <img src={ShotOf} className="icon" alt="" />
//         </div>
//         <div className="numberOfShot">

//           <p className="NumberShotsText">עם כל בירה צייסר ב ₪10</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShotInTen;
import { useState } from "react";
import "../../css/dropdown.css";
import ShotOf from "../../icons/shotof.svg";
import { useDispatch } from "react-redux";
import { updateDealOrderAction } from "../../redux/actions/addOrderItem";

function ShotInTen(props) {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={
          props.isTrue
            ? "shotComponentContainer"
            : "closeShotComponentContainer"
        }
        onClick={() => setShowPopup(true)} // פותח פופאפ בלחיצה
      >
        <div className="holdShotDiv">
          <div className="shotIconDiv">
            <span>{props.sum ? props.sum : 0}</span>
            <img src={ShotOf} className="icon" alt="" />
          </div>
          <div className="numberOfShot">
            <p className="NumberShotsText">עם כל בירה צייסר ב ₪10</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popupOverlay" onClick={() => setShowPopup(false)}>
          <div
            className="popupContent"
            onClick={(e) => e.stopPropagation()} // כדי לא לסגור בלחיצה פנימית
          >
            <h2 className="shotHeader">בחר את הצ'ייסר שלך</h2>
            <div className="shotsGrid">
              {["וודקה", "טקילה", "ויסקי", "ארק", "ליקר", "רום"].map(
                (shot, index) => (
                  <div
                    key={index}
                    className="shotBox"
                    onClick={() => {
                      dispatch(
                        updateDealOrderAction({
                          ...props.item,
                          deal:{name:shot,selectedOptions:true} , // הוספת מאפיין חדש
                        })
                      );
                      setShowPopup(false);
                    }}
                  >
                    <img src={ShotOf} className="icon" alt="" />
                    <p className="shotName">{shot}</p>
                  </div>
                )
              )}
            </div>
            <button className="exitBtn" onClick={() => setShowPopup(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShotInTen;
