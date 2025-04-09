import '../../css/menu.css';

function MenuCategory(props) {
  return (
    <button style={{backgroundImage:`url(${props.image})`}} className="menuTab">
        {props.category}
    
 
    </button>
  );
}

export default MenuCategory;
