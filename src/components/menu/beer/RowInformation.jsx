import { useState } from "react";
import "../../../css/menu.css";
import BeerDropdown from "../../dropdown/BeerDropdown";



function RowInformation(props) {

    const [beerDropdown,setBeerDropdown] = useState({isActive:false,data:{}})

    function activeDropDown(){
  
        setBeerDropdown({isActive:!beerDropdown.isActive})
    }


  
  return ( 
<div className="beerRowItem">
<div onClick={activeDropDown}
    style={{
      backgroundImage: `linear-gradient(45deg ,transparent 0% 5%,var(--second-color)50% 90% ),url(${props.data.img})`,
    }}
    className="cw itemRowTab"
  >
    <div className="menuRowItem">
      <h2 className="secondaryHeader ">{props.data.name}</h2>
      <h2 className="secondaryHeader bgb">
        {" "}
        {props.data.price}/{props.data.price + 6}
      </h2>
    </div>

    
  </div>
  <BeerDropdown isActive={beerDropdown.isActive} data={props.data} />
</div>
  );
}

export default RowInformation;
