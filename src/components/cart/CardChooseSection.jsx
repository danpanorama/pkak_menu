import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCard } from "../../redux/reducers/orderReducer"; // רידוסר לבחירת כרטיס
import CardPopup from "./CardPopUp";
import '../../css/card.css'

const CardChooseSection = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.order.cards); // כרטיסים קיימים
  const selectedCard = useSelector((state) => state.order.selectedCard);

  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  return (
    <>
      <div className="cardsGrid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`cardBox ${selectedCard?.id === card.id ? "selected" : ""}`}
            onClick={() => dispatch(selectCard(card))}
          >
            <p>{card.type}</p>
            <p>**** {card.last4}</p>
          </div>
        ))}
        <div className="cardBox addCard" onClick={() => setIsCardPopupOpen(true)}>
          <p>+</p>
        </div>
      </div>

      <CardPopup isOpen={isCardPopupOpen} onClose={() => setIsCardPopupOpen(false)} />
    </>
  );
};

export default CardChooseSection;
