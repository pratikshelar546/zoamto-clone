import { json } from "react-router-dom";
import { GET_USER, SELF_DETAILS, CLEAR_USER } from "./UserType";

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case SELF_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
      case CLEAR_USER:
     
      return {
        user: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
