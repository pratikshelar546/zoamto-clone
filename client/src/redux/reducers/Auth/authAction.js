import axios from "axios";
import { SIGN_UP,SIGN_IN,GOOGLE_AUTH, SIGN_OUT } from "./authType";

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
        alert("Signin Faild please enter valid credentials");
        return dispatch({type:"ERROR", payload:error})
    }
}

// login
 export const logIn = (userData)=>async(dispatch)=>{
    try {
        const User =await axios({
            method:"POST",
            url:`${process.env.REACT_APP_CLIENT_URL}auth/signin`,
            data:{credentials:userData},
        });
        localStorage.setItem(
            "zomatoUser",
            JSON.stringify({token:User.data.token})
        );
        axios.defaults.headers.common[
            "Authorization"
        ]=`Bearer ${User.data.token}`;
        // console.log(User.data.user.fullName);
        return dispatch({type:SIGN_IN,payload:User.data});
    } catch (error) {
        alert("Login Faild please enter valid credentials");
        return dispatch({type:"ERROR", payload:error})
    }
 }
export const signout = () =>async(dispatch)=>{
    try {
        localStorage.removeItem('newUser');
        localStorage.removeItem('zomatoUser');
        return dispatch({type:SIGN_OUT, payload:{}});
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}

//  google auth
export const googleAuth = (token)=>async(dispatch)=>{
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({token}));

        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
        return dispatch({type:GOOGLE_AUTH,payload:{token}})
    } catch (error) {
        alert("Faild please enter valid credentials");
        return dispatch({type:"ERROR",payload:error})
    }
}