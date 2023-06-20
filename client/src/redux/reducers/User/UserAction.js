import axios from "axios";

import { GET_USER, SELF_DETAILS, CLEAR_USER } from "./UserType";
// get user by id
export const getUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}User/${_id}`,
    });
    return dispatch({ type: GET_USER, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// get myself

export const getMySelf = () => async (dispatch) => {
  try {
    const myself = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}User/`,
    
      
    });
    console.log(myself.data.user);
    localStorage.setItem('newUser', JSON.stringify(myself?.data?.user))
    return dispatch({ type: SELF_DETAILS, payload: { ...myself.data.user } });
  } catch (error) {
    return dispatch({ Type: "ERROR", payload: error });
  }
};


// clear user

export const clearUser = ()=> async(dispatch)=>{
try {
  return dispatch({type:CLEAR_USER, payload:{}})
} catch (error) {
  return dispatch({type:"ERROR",payload:error})
}
}
