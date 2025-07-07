import { Link, useLocation, useParams } from "react-router-dom";
import CategoryHeader from "../components/headers/CategoryHeader";
import RowInformation from "../components/menu/beer/BeerItem";
import "../css/items.css";
import PizzaCategory from "../components/menu/pizza/PizzaCategory";
import { useState } from "react";
import CartButtons from "../components/buttons/CartButtons";
import PopUp from "../components/menu/pizza/PopUp";
import ProductsComp from "../components/menu/products/ProductsComp";
import BeerItem from "../components/menu/beer/BeerItem";
import { useSelector } from "react-redux";

function ItemsPage(props) {
  const { category } = useParams();
  const totalPrice = useSelector((state) => state.order.totalPrice);

  const location = useLocation();
  const categoryData = location.state;
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // סגירת הפופ-אפ
  const closePopup = () => setSelectedItem(null);
  // הפונקציה שמפעילה את הפופ-אפ עם פריט ספציפי
  const openPopup = (item) => setSelectedItem(item);
  const renderDynamicComponent = () => {
    if (!categoryData) return null;
    const cat = categoryData.category.toLowerCase();

    switch (cat) {
      case "בירה בקבוק":
      case "בירה":
        return (

          <div className="itemsFirstChild">
          {categoryData.items.map((e, i) => (
  <BeerItem
    key={i}
    data={e}
    isOpen={openDropdownId === e.id}
    onToggle={() =>
      setOpenDropdownId((prev) => (prev === e.id ? null : e.id))
    }
  />
))}

          </div>
        );

      case "פיצה":
      case "לא פיצה":
        return (
          <div className="productsBackground">
            <div className="productsWrapperGrid">
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
        <p className="cw categoryDetails">{categoryData?.details || ""}</p>
      </div>


       


      {renderDynamicComponent()}

   {/* <div className="productsBackground">
            <div className="productsWrapperGrid">
              {categoryData.items.map((item, index) => (
                <ProductsComp
                  key={index}
                  item={item}
                  onClick={() => openPopup(item)}
                />
              ))}
            </div>
          </div>  */}


      {/* פופ-אפ */}
         {selectedItem && (
        <PopUp selectedItem={selectedItem} closePopup={closePopup} />
      )}


      {totalPrice > 0 && (
  <div className="cartSummaryContainer">
    <Link to="/cart" className="goToCartButton">
      לצפייה בעגלה ({totalPrice.toFixed(2)} ₪)
    </Link>
  </div>
)}

    </div>
  );
}

export default ItemsPage;
