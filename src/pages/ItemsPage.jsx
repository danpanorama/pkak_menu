import { useState } from "react";
import CategoryHeader from "../components/headers/CategoryHeader";
import BeerCategory from "../components/menu/beer/BeerCategory";
import Category from "../components/menu/Category";
import "../css/items.css";
import { useParams, useLocation } from "react-router-dom";
import RowInformation from "../components/menu/beer/RowInformation";

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
              return (
           <RowInformation data={e} />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ItemsPage;
