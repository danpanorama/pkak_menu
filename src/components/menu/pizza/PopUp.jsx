import CartButtons from "../../buttons/CartButtons";
import "../../../css/pizza.css";
import { motion } from "framer-motion";
import PopUpOptions from "./PopUpOptions";

function PopUp({ selectedItem, closePopup }) {
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
              transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
              initial={{ height: "auto" }}
              animate={{ height: "300px" }}
            />
          </motion.div>

          <motion.div
            transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
            initial={{ height: "auto" }}
            className="cardInfoHolder"
          >
            <p className="text-popup">{selectedItem.description}</p>
            <p className="text-popup">מחיר: {selectedItem.price} ש"ח</p>

            <PopUpOptions materialsArray={selectedItem.materials.split(',')} />

            <CartButtons item={selectedItem} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
