import axios from "axios";
import { SIGN_UP } from "./authType";

export const signIn = (userData)=>async(dispatch)=>{
    try {
        const User = await axios({
            method:"POST",
            url:`${process.env.REACT_APP_CLIENT_URL}auth/signup`,
            data:{credentials:userData},
        });
        localStorage.setItem(
            "zomatoUser",
            JSON.stringify({token:User.data.token})
        );
        axios.defaults.headers.common[
            "Authorization"
        ]=`Bearer ${User.data.token}`;
        return dispatch({ type:SIGN_UP,payload:User.data});
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}