import { useLocation, useParams } from "react-router-dom";
import CategoryHeader from "../components/headers/CategoryHeader";
import RowInformation from "../components/menu/beer/RowInformation";
import "../css/items.css";
import PizzaCategory from "../components/menu/pizza/PizzaCategory";

function ItemsPage(props) {
  const { category } = useParams();
  const location = useLocation();
  const categoryData = location.state;

  const renderDynamicComponent = () => {
    if (!categoryData) return null;

    const cat = categoryData.category.toLowerCase();

    switch (cat) {
      case "בירה":
        return (
          <div className="itemsFirstChild">
            {categoryData.items.map((e, i) => (
              <RowInformation key={i} data={e} />
            ))}
          </div>
        );

      case "פיצה":
        return (
         <div className="pizzaBackground">
           <div className="pizzaWrapperGrid">
            {categoryData.items.map((item, index) => (
             <PizzaCategory item={item} />
            ))}
          </div>
         </div>
        );

      default:
        return (
          <div className="itemsFirstChild">
            {categoryData.items.map((e, i) => (
              <RowInformation key={i} data={e} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="itemsContainer itemsPage">
      <br />
      <br />
      <br />
      <br />
      <div className="beerHeader">
        <CategoryHeader text={categoryData?.category || "טוען..."} />
        <p className="cw">{categoryData?.details || ""}</p>
      </div>
      <div className="line"></div>

      {renderDynamicComponent()}
    </div>
  );
}

export default ItemsPage;
