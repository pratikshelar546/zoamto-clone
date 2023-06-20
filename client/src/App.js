
import './App.css';
import {Routes,Route , Navigate} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./pages/Checkout";
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

import GoogleAuth from "./pages/GoogleAuth"
import Overview from './components/RestaurantsOverview/getRestaurant'
// import weOffer from './components/home/WeOffer';
 
function App() {
  return (
   <>
   <Routes>

    <Route path='/' element={<Navigate to="/delivery"/>} />
   
    <Route path='/:type' element={<Home/>} />
    <Route path='/restaurant/:id' element={<Restaurant/>} />
    <Route path='/google/token' element={<GoogleAuth/>} />
    <Route path='/restaurant/:id/overview' element={<Overview/>} />
    <Route path='/order-online' element={<Restaurant index={0} />} />
    <Route path='/dining-out' element={<Restaurant index={1} />}/>
    <Route path='/night-life' element={<Restaurant index={2}/>}/>
  
    <Route path='/checkout' element={<Checkout/>} />

    <Route path='' element={<Checkout/>} />
   </Routes>
   </>
   
  );
}

export default App;
