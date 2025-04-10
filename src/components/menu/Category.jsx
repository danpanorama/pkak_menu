import "../../css/menu.css";
import SecondaryButton from "../buttons/SecondaryButton";

function Category(props) {
  console.log(props.category.image);
  return (
    <div
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
