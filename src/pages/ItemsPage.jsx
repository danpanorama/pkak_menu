import CategoryHeader from "../components/headers/CategoryHeader";
import BeerCategory from "../components/menu/beer/BeerCategory";
import Category from "../components/menu/Category";
import "../css/items.css";
import { useParams, useLocation } from "react-router-dom";

function ItemsPage(props) {
  const { category } = useParams();
  const location = useLocation();
  const categoryData = location.state;

  return (
    <div className="itemsContainer itemsPage">
      <br />
      <br />
      <br />
      <br />
    <div className="beerHeader">
    <CategoryHeader text={"בירה חבית"} />
    <p className="cw">330/500</p>
    </div>
      <div className="line"></div>
      
      <div className="itemsFirstChild">
        {categoryData
          ? categoryData.items.map((e, i) => {
          
              return <div style={{backgroundImage:`linear-gradient(45deg ,transparent 0% 5%,rgba(3, 28, 50)50% 90% ),url(${e.img})`}} className="cw itemRowTab">
               <h2 className="secondaryHeader ">
               {e.name}
             
               </h2>
               <h2>  {e.price}</h2>
                </div>;
            })
          : ""}
      </div>
    </div>
  );
}

export default ItemsPage;
