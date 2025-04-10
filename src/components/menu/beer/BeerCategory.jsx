import "../../../css/menu.css";



function BeerCategory(props) {
  
  return (
 <div className="beerCategory">

    {props.items? props.items.map((e)=>{
        return(
            <h1 className="cw">{e.name}</h1>
        )
    }):''}
 


 </div>
  );
}

export default BeerCategory;
