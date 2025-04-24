import "../../../css/pizza.css";



function PizzaCategory(props) {
  
  return ( 
 <div className="pizzaSquare flex-col-center">
    <div className="image">
        <img src={props.item.image} alt="" className="img round" />
    </div>

<div className="infoPizzaHolder">
<h1 className="pizzaItemHeader cw">{props.item.name}</h1>
<p className="text cw">{props.item.materials}</p>

</div>
<p className="priceHeader cw">
   שח {props.item.price}
</p>
 </div>
  );
} 

export default PizzaCategory;
