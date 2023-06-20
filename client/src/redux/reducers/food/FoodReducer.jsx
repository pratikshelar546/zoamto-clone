import {GET_FOOD_BY_CATEGORY } from "./FoodType"

const initialState={
    categoryFood:{},
}

const FoodReducer = (state= initialState, action) => {
    // console.log(action.payload);
switch(action.type){
    case GET_FOOD_BY_CATEGORY:
        return{
            ...state,
            categoryFood:{...action.payload}
        };
        default:
            return{
                ...state
            };
}
}

export default FoodReducer

