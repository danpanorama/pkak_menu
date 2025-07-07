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
        backgroundImage: `linear-gradient(to top ,rgba(0, 0, 0, 0.56),transparent,rgba(0,0,0,.4)), url(${props.category.image})`,
      }}
      className="categoryTab" >
      <div className="categoryFirstChild">
        <p className="categoryHeader">
          <img src={props.category.icon} alt="" className="icon spaceicon" />
          {props.category.category} </p>
      </div>
    </div>
  );
}

export default Category;
