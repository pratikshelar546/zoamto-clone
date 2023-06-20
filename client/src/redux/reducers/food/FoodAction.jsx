import axios from "axios";
import { GET_FOOD_BY_CATEGORY } from "./FoodType";

export const getFoodByCategory =(category)=> async(dispatch)=>{
    try {
        const foods =await axios({
            method:"GET",
            url:`${process.env.REACT_APP_CLIENT_URL}food/c/${category}`
        })
        // console.log(foods.data);
        return dispatch({type:GET_FOOD_BY_CATEGORY , payload:foods.data});
    } catch (error) {
       return dispatch({type:"ERROR",payload:error})
    }
}