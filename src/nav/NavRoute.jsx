

import { Route, Routes,useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import OpeningPage from '../pages/OpeningPage';
import NotFound from '../pages/NotFound';
import {AnimatePresence} from 'framer-motion';
import MainMenuPage from '../pages/MainMenuPage';
import ItemsPage from '../pages/ItemsPage';
function NavRoute() {
  const location =useLocation()
  return (
    <div className="">
      <div className="position-sticky">
      <NavBar/>
      </div>
      <AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>


<Route path="*" element={<NotFound />}  />
<Route path="/" element={<OpeningPage />}  />
<Route path="/mainMenu" element={<MainMenuPage />}  />
<Route path="/item/:category" element={<ItemsPage />} />


</Routes>
</AnimatePresence>
    </div>
  );
}

export default NavRoute;
