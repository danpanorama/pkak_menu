import BeerCategory from '../components/menu/beer/BeerCategory';
import Category from '../components/menu/Category';
import '../css/items.css';
import { useParams, useLocation } from 'react-router-dom';

function ItemsPage(props) {
  const { category } = useParams();
  const location = useLocation();
  const categoryData = location.state;
  console.log(categoryData)

  return (
    <div className="itemsContainer itemsPage">
      <br /><br /><br /><br />
      <h1 style={{color:"white"}}>{category}</h1>
      <div className="itemsFirstChild">
     {
         categoryData?categoryData.items.map((e,i)=>{
          return(
            <h1 className="cw">{e.name}</h1>
          )
        }):''
     }
        
      </div>
   
    </div>
  );
}


export default ItemsPage;
