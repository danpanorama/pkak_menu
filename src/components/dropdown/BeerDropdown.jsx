import "../../css/dropdown.css";

function BeerDropdown(props) {
  return (
    <div className={props.isActive ? "dropDownContainer" : "closeDropdownBeer"}>
      <div className="dropdownHolder">
        <div className="infoSide">
          <h1 className="dropdownHeader" >{props.data.name}</h1>

          <div className="infoBeerRow">
            <p className="text head">אחוז אלכוהול:</p>{" "}
            <p className="text">{props.data.alcoholPercent}</p>
        
          </div>

          <div className="infoBeerRow">
            <p className="text head"> מדינה:</p>{" "}
            <p className="text flex-row-center">{props.data.origin} <img className="imgSmall" src={props.data.img} alt="" /></p>
          </div>

          <div className="infoBeerRow">
            <p className="text head"> טעם:</p>{" "}
            <p className="text">{props.data.tasteNotes}</p>
          </div>
          <div className="infoBeerRow">
            <p className="text head"> זורם עם:</p>{" "}
            <p className="text">{props.data.pairing}</p>
          </div>
          <div className="infoBeerRow">
            <p className="text head"> תיאור:</p>{" "}
            <p className="text">{props.data.description}</p>
          </div>
        </div>
        <div className="imageSide">
            <img src={props.data.logo} alt="" className="img" />

        </div>
      </div>
    </div>
  );
}

export default BeerDropdown;
