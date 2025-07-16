import CartButtons from "../../buttons/CartButtons";
import "../../../css/pizza.css";
import { motion } from "framer-motion";
import PopUpOptions from "./PopUpOptions";
import { useState } from "react";

function PopUp({ selectedItem, closePopup, category }) {
  const [selectedChanges, setSelectedChanges] = useState([]);

  const materialsArray = selectedItem.materials
    ? selectedItem.materials.split(",").map((mat) => mat.trim())
    : [];

  return (
    <div className="popupOverlay" onClick={closePopup}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <div className="exitBtnDiv">
          <button className="exitBtn" onClick={closePopup}>
            X
          </button>
        </div>
        <div className="transformY cardItem">
          <motion.div>
            <h2>{selectedItem.name}</h2>
            <motion.img
              className="img itemImage"
              src={selectedItem.image}
              alt={selectedItem.name}
              transition={{ duration: 0.75, ease: "easeInOut", delay: .3 }}
              initial={{ height: "auto" }}
              animate={{ height: "300px" }}
            />
          </motion.div>

          <motion.div
            transition={{ duration: 0.75, ease: "easeInOut", delay: .3 }}
            initial={{ height: "auto",width:"100%" }}
            className="cardInfoHolder"
          >
            <p className="text-popup">{selectedItem.description}</p>
            <p className="text-popup">מחיר: ₪{selectedItem.price} </p>

            <PopUpOptions
              materialsArray={materialsArray}
              selectedChanges={selectedChanges}
              setSelectedChanges={setSelectedChanges}
            />

            <CartButtons
              closePopup={closePopup}
              item={{
                ...selectedItem,
                extras: selectedChanges,
                category: category || selectedItem.category || "ללא קטגוריה",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
