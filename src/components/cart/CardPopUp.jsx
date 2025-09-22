// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addNewCard } from "../../redux/reducers/orderReducer";
// import '../../css/card.css'
// import '../../css/dropdown.css'

// function CardPopup({ isOpen, onClose }) {
//   const dispatch = useDispatch();
//   const [number, setNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");

//   if (!isOpen) return null;

//   const handleAddCard = () => {
//     dispatch(addNewCard({ id: Date.now(), last4: number.slice(-4), type: "Visa" }));
//     onClose();
//   };

//   return (
//     <div className="popupOverlay" onClick={onClose}>
//       <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//         <h2>הוסף כרטיס חדש</h2>
//         <input placeholder="מספר כרטיס" value={number} onChange={(e) => setNumber(e.target.value)} />
//         <input placeholder="תוקף" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
//         <input placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
//         <button onClick={handleAddCard}>שמור כרטיס</button>
//         <button onClick={onClose}>X</button>
//       </div>
//     </div>
//   );
// }

// export default CardPopup;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../../redux/reducers/orderReducer";
import '../../css/card.css'
import '../../css/dropdown.css'

function CardPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  if (!isOpen) return null;

  const handleAddCard = () => {
    dispatch(addNewCard({ id: Date.now(), last4: number.slice(-4), type: "Visa" }));
    onClose();
  };

  return (
    <div className="cardPopupOverlay" onClick={onClose}>
      <div className="cardPopupContent" onClick={(e) => e.stopPropagation()}>
        <h2 className="cardPopupHeader">הוסף כרטיס חדש</h2>
        <input
          className="cardPopupInput"
          placeholder="מספר כרטיס"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="cardPopupInput"
          placeholder="תוקף"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          className="cardPopupInput"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <div className="cardPopupButtons">
          <button className="cardPopupBtn saveCardBtn" onClick={handleAddCard}>שמור כרטיס</button>
          <button className="cardPopupBtn closeCardBtn" onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
}

export default CardPopup;
