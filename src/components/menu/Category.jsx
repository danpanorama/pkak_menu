import "../../css/menu.css";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const navigate = useNavigate();

  function movePage() {
    
    navigate(`/item/${props.category.category}`, { state: props.category });
  }

  return (
    <div
      onClick={movePage}
      style={{
        backgroundImage: `linear-gradient(45deg ,transparent 0% 10%,rgb(0, 0, 0)60% 100% ),url(${props.category.image})`,
      }}
      className="categoryTab"
    >
      <div className="categoryFirstChild">
        <p className="categoryHeader">{props.category.category}</p>
      </div>
    </div>
  );
}

export default Category;
