import { GET_RESTAURANT ,GET_SPECIFIC_RESTAURANT} from "./RestaurantType";

const initialState = {
  restaurant:[],
  selectedRestaurant: {},
};
const restaurantReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurant:[ ...action.payload],
      };
      case GET_SPECIFIC_RESTAURANT:
        return {
            ...state,
            selectedRestaurant: [...action.payload ],
          };
      default:
        return {
          ...state,
        };
      }
    };
    export default restaurantReducer;