
import axios from "axios"
 import {GET_RESTAURANT ,GET_SPECIFIC_RESTAURANT} from "./RestaurantType"

export const getRestaurant = ()=>async(dispatch)=>{
    try {
        const restaurantList = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_CLIENT_URL}restaurant/mumbai`,
        });
      console.log(restaurantList.data.restaurants);
        return dispatch({
            type:GET_RESTAURANT,
            payload:restaurantList.data.restaurants,
        })
        
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
    }
}