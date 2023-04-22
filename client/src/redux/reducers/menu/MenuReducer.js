import { GET_FOOD, GET_MENU_LIST } from "./MenuType";

const initialState ={
    menuList:{},
    food:[],
};

const menuReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_MENU_LIST:
            return{
                ...state,
                menuList:{ ...action.payload},
            };
            default:
                return{
                    ...state,
                };
    }
}
export default menuReducer;