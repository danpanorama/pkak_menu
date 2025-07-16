import { Link, useLocation, useParams } from "react-router-dom";
import CategoryHeader from "../components/headers/CategoryHeader";
import RowInformation from "../components/menu/beer/BeerItem";
import "../css/items.css";
import PizzaCategory from "../components/menu/pizza/PizzaCategory";
import { useState,useEffect } from "react";
import CartButtons from "../components/buttons/CartButtons";
import PopUp from "../components/menu/pizza/PopUp";
import ProductsComp from "../components/menu/products/ProductsComp";
import BeerItem from "../components/menu/beer/BeerItem";
import { useSelector } from "react-redux";
import Cart from "../components/cart/Cart";


function ItemsPage(props) {
  const { category } = useParams();
  const totalPrice = useSelector((state) => state.order.totalPrice);

  const location = useLocation();
  const categoryData = location.state;
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

 
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  <BeerItem
    key={i}
    data={e}
    isOpen={openDropdownId === e.id}
    category={category}
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
                  category={category}
                  item={item}
                  onClick={() => openPopup(item)}
                />
              ))}
            </div>
          </div>
        );

      default:
        return     <div className="productsBackground">
            <div className="productsWrapperGrid">
              {categoryData.items.map((item, index) => (
                <PizzaCategory
                  key={index}
                  category={category}
                  item={item}
                  onClick={() => openPopup(item)}
                />
              ))}
            </div>
          </div>;
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
        {/* <h1 className="categorySmallHeader" >צייסר ב 10</h1> */}
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
        <PopUp category={category} selectedItem={selectedItem} closePopup={closePopup} />
      )}


      {totalPrice > 0 && (
  <div className="cartSummaryContainer">
    <Link to="/cart" className="goToCartButton">
      לצפייה בעגלה ({totalPrice.toFixed(2)} ₪)
    </Link>
  </div>
)}
<br /><br /><br /><br />
<Cart/>

    </div>
  );
}

export default ItemsPage;
