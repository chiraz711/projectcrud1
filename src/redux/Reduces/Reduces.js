import { getProduct } from "../Actiontype/Actiontype"
const initialState={
  product:[]
}

const getreducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case getProduct:
            return {...state,product:payload}
        case 'Post_product':
            return 
        case 'Update_product':
            return 
        case 'Delete_product':
            return 
        default:
            return state 
    }
}

export default getreducer;