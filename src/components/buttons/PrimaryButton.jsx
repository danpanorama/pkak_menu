import { Link } from "react-router-dom";
import "../../css/btn.css";

function PrimaryButton({ to, onClick, children ,text}) {
  if (to) {
    return <Link to={to} className="primaryButton">
      {text}
    </Link>;
  }

  return <button className="primaryButton" onClick={onClick}>
   
       {text}
 
   
    
    </button>;
}

export default PrimaryButton;
