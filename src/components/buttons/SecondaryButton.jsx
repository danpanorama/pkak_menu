import "../../css/btn.css";

function SecondaryButton({ to, onClick, children ,text}) {

  return (
     <button className="SecondaryButton" onClick={onClick}>
    <p className="SecondaryButtonText ">
       {text}
    </p>
   
    </button>
  )
 
}

export default SecondaryButton;
