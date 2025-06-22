import { useLocation, useParams } from "react-router-dom";
import CategoryHeader from "../components/headers/CategoryHeader";
import RowInformation from "../components/menu/beer/RowInformation";
import "../css/items.css";
import PizzaCategory from "../components/menu/pizza/PizzaCategory";
import { useState } from "react";
import CartButtons from "../components/buttons/CartButtons";
import PopUp from "../components/menu/pizza/PopUp";
function ItemsPage(props) {
  const { category } = useParams();
  const location = useLocation();
  const categoryData = location.state;
  const [selectedItem, setSelectedItem] = useState(null);
  // סגירת הפופ-אפ
  const closePopup = () => setSelectedItem(null);

  // הפונקציה שמפעילה את הפופ-אפ עם פריט ספציפי
  const openPopup = (item) => setSelectedItem(item);

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
      case "לא פיצה":
        return (
          <div className="pizzaBackground">
            <div className="pizzaWrapperGrid">
              {categoryData.items.map((item, index) => (
                <PizzaCategory
                  key={index}
                  item={item}
                  onClick={() => openPopup(item)}
                />
              ))}
            </div>
          </div>
        );

      default:
        return <div className="pizzaBackground"></div>;
    }
  };

  return (
    <div className="itemsContainer itemsPage">
      <br />
      <br />
      <br />
      <br />
      <div className="beerHeader">
        <h1 className="categorySmallHeader">
          {categoryData?.category || "טוען..."}
        </h1>
        <p className="cw">{categoryData?.details || ""}</p>
      </div>
      <div className="line"></div>

      {renderDynamicComponent()}

      {/* פופ-אפ */}
         {selectedItem && (
        <PopUp selectedItem={selectedItem} closePopup={closePopup} />
      )}
    </div>
  );
}

export default ItemsPage;
