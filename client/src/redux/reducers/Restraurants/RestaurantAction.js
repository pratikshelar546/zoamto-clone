
import axios from "axios"
 import {GET_RESTAURANT ,GET_SPECIFIC_RESTAURANT} from "./RestaurantType"
// get all restaurant
export const getRestaurant = ()=>async(dispatch)=>{
    try {
        const restaurantList = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_CLIENT_URL}restaurant/Mumbai`,
        });
    //   console.log(restaurantList.data.restaurants);
        return dispatch({
            type:GET_RESTAURANT,
            payload:restaurantList.data.restaurants,
        })
        
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
    }
}

// get specific restaurant

export const getSpecificRestaurant =(_id)=> async(dispatch)=>{
    try {
        const  specificRestaurant = await axios({
            method :"GET",
            url: `${process.env.REACT_APP_CLIENT_URL}restaurant/specific/${_id}`,
        });
        // console.log(specificRestaurant.data.restaurants.menu[0].menu[0].name);
        return{
            type:GET_SPECIFIC_RESTAURANT,
            payload:specificRestaurant.data.restaurants,
        }
    } catch (error) {
        return dispatch({type:"ERROR" , payload:error})
    }
}