import { combineReducers } from "redux";
import auth from "./Auth/authReducer"
import restaurant from "./Restraurants/RestaurantReducer"

const rootReducer = combineReducers({
    auth,
    restaurant
    
});
export default rootReducer;