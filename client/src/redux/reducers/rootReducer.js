import { combineReducers } from "redux";
import auth from "./Auth/authReducer"
import restaurant from "./Restraurants/RestaurantReducer"
import menu from "./menu/MenuReducer"
const rootReducer = combineReducers({
    auth,
    restaurant,
    menu
    
});
export default rootReducer;