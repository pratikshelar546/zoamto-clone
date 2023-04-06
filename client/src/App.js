
import './App.css';
import {Routes,Route , Navigate} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./pages/Checkout";
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

// import Menu from "./components/restroDump/Menu";
// import OrderOnline from "./components/Restaurant/OrderOnline";
// import Review from './components/restroDump/Review';
// import Photos from "./components/restroDump/Photos";
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
    <Route path='/order-online' element={<Restaurant/>} />
    {/* <Route path='/restaurant/:id/review' element={<Review/>} /> */}
    {/* <Route path='/restaurant/:id/menu' element={<Menu/>} />
    <Route path='/restaurant/:id/photos' element={<Photos/>} /> */}
    <Route path='/checkout' element={<Checkout/>} />

    <Route path='' element={<Checkout/>} />
   </Routes>
   </>
   
  );
}

export default App;
