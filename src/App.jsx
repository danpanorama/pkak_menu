// import logo from './logo.svg';
// import './App.css';
// import NavRoute from './nav/NavRoute';
// import Cart from './components/cart/Cart';
// import ErrorBoundary from './utils/ErrorBoundary';

// function App() {
//   return (<ErrorBoundary>
//     <div className="containerAll">
     
//       <NavRoute/>
//       <Cart/>
 
//     </div> 
//     </ErrorBoundary>
//   );
// }

// export default App;


// App.jsx
import './App.css';
import NavRoute from './nav/NavRoute';
import Cart from './components/cart/Cart';
import ErrorBoundary from './utils/ErrorBoundary';
import { ErrorBox } from './components/error/ErrorBox'; // תוודא שזה הנתיב הנכון

function App() {
  return (
    <div className="containerAll">
      {/* ErrorBox תמיד מוצגת אם יש שגיאה */}
      <ErrorBox />

      {/* שאר האפליקציה עטופה בבאונדרי */}
      <ErrorBoundary>
        <NavRoute />
        {/* <Cart /> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
