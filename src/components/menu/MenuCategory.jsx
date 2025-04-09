import '../../css/menu.css';
import SecondaryButton from '../buttons/SecondaryButton';

function MenuCategory(props) {
  console.log(props)
  return (
    <button style={{backgroundImage:`url(${props.image})`}} className="menuTab">

   

      <SecondaryButton text={props.category.category} />
      
    
 
    </button>
  );
}

export default MenuCategory;
