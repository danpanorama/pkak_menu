import { useState } from "react";
import "../../../css/menu.css";
import BeerDropdown from "../../dropdown/BeerDropdown";
import PkakOnly from "../../logo/PkakOnly";

function BeerItem({ data, isOpen, onToggle,category }) {
  return ( 
    <div className="beerRowItem">
      <div
        onClick={onToggle}
        style={{
          backgroundImage: `linear-gradient(45deg ,transparent 0% 5%,var(--second-color)50% 90% ),url(${data.img})`,
        }}
        className="cw itemRowTab"
      >
        <div className="menuRowItem">
          <h2 className="secondaryHeader ">{data.name}</h2>
          <h2 className="priceHeader bgb">
            <span className="cupSize">{data.price}</span>/
            <span className="cupSize">{data.price + 6}</span>
          </h2>
        </div>
      </div>
      <BeerDropdown category={category} itemId={data.id} isActive={isOpen} data={data} />
    </div>
  );
}


export default BeerItem;
