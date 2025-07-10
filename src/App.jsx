import logo from './logo.svg';
import './App.css';
import NavRoute from './nav/NavRoute';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="containerAll">
      <NavRoute/>
      <Cart/>
 
    </div>
  );
}

export default App;
