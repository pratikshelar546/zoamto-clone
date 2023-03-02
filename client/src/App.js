
import './App.css';
import {Routes,Route , Navigate} from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Overview from "./components/Restaurant/Overview";
import Menu from "./components/Restaurant/Menu";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Review from './components/Restaurant/Review';
import Photos from "./components/Restaurant/Photos";
import GoogleAuth from "./pages/GoogleAuth"
 
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Navigate to="/delivery"/>} />
    <Route path='/:type' element={<Home/>} />
    <Route path='/restaurant/:id' element={<Restaurant/>} />
    <Route path='/google/token' element={<GoogleAuth/>} />
    <Route path='/restaurant/:id/overview' element={<Overview/>} />
    <Route path='/restaurant/:id/order-online' element={<OrderOnline/>} />
    <Route path='/restaurant/:id/review' element={<Review/>} />
    <Route path='/restaurant/:id/menu' element={<Menu/>} />
    <Route path='/restaurant/:id/photos' element={<Photos/>} />
    <Route path='/checkout' element={<Checkout/>} />

    <Route path='' element={<Checkout/>} />
   </Routes>
   </>
   
  );
}

export default App;
