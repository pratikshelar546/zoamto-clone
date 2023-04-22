import axios from "axios"
import {GET_MENU_LIST , GET_FOOD} from "./MenuType"


export const getMenuList =(menuId)=> async(dispatch)=>{

    try {
        const menu = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_CLIENT_URL}menu/lists/${menuId}`,
               });
            //    console.log(menu.data);
               return dispatch({type:GET_MENU_LIST, payload:menu.data})

    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }

}