import { combineReducers } from "redux";
import auth from "./Auth/authReducer"
import restaurant from "./Restraurants/RestaurantReducer"
import menu from "./menu/MenuReducer"
import user from "./User/UserReducer"
import food from "./food/FoodReducer"
const rootReducer = combineReducers({
    auth,
    restaurant,
    menu,
    user,
    food
    
});
export default rootReducer;