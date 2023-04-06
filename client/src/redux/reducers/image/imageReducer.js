import {GET_IMAGE} from "./imageType"

const initialState ={
    images:[]
};

const imageReducer =(state= initialState,action)=>{
switch (action.type) {
    case GET_IMAGE:
        return{
            ...state,
            ...action.payload,
        }
       default:
        return{
            ...state
        }
}
}

export default imageReducer