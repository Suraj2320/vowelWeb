import axios from "axios"
import { GET_PRODUCT } from "./product.type"

export const postProduct = (creds) => async (dispatch) => {

    try {
        let response = await axios.post(`https://surajinter.onrender.com/product/post`, creds)
        console.log(response.data)
        alert(" Product Added successfully ")
    }
    catch (error) {
        console.log(error)
    }
}
export const getProduct= () => async (dispatch) => {     
        try {
            let response = await axios.get(`https://surajinter.onrender.com/product/get`)
            console.log(response.data)
            dispatch({ type: GET_PRODUCT, payload: response.data })
        }
        catch (error) {
            console.log(error)
        }
}


export const deleteProduct =(ProId) => async (dispatch)=>{


    return axios
    .delete(`https://surajinter.onrender.com/product/${ProId}`)
    .then((r) => {
      alert("Item Removed from cart")
      dispatch(getProduct())
    })
    .catch((e) =>console.log(e));
}