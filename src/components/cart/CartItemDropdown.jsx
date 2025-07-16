import React, { useState } from "react";
import "../../css/CartItemDropdown.css"; // נניח שאתה רוצה לשים סטייל נפרד

import CartDropdownOptions from "./CartDropdownOptions";

const CartItemDropdown = ({ item ,isOpen}) => {
  const [selectedChanges, setSelectedChanges] = useState([]);
  return (
    <>
    {isOpen?
    <div className="cartDropdownShadow" >
      <CartDropdownOptions 
      item={item}
  materialsArray={item?.materialsArray || []}
  selectedChanges={selectedChanges}
  setSelectedChanges={setSelectedChanges}
/>

     
    </div>
:""}
    </>
    
  );
};

export default CartItemDropdown;
