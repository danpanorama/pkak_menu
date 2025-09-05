import { useState } from "react";
import "../../css/dropdown.css";
import ShotOf from "../../icons/shotof.svg";
import ShotPopup from "../cart/ShotPopup";

function ShotInTen({ openPopUp, setPopUpState }) {
  return (
    <ShotPopup
      isOpen={openPopUp.isOpen}
      onClose={() => setPopUpState({ ...openPopUp, isOpen: false })}
      item={openPopUp.data}
    />
  );
}


export default ShotInTen;
