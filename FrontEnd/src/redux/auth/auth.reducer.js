import { DELETE, GET, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "./auth.types"


let token=localStorage.getItem("token")
const initial={
    isAuth:!!token,
    token:token,
    error:false,
    message:"",
    data:[]
}
 export const authReducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload)
            return{
                ...state,isAuth:true,error:false,token:payload
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,isAuth:false,token:"",error:true
            }
        }
        case SIGNUP_SUCCESS:{
            console.log("reducer",payload)
            return{
                ...state,message:payload
            }
        }
        case LOGOUT:{
            localStorage.removeItem("token")
            return{
                ...state,isAuth:false,token:"",error:false
            }

        }
        case DELETE:{
            localStorage.removeItem("token")
            return{
                ...state,isAuth:false,token:"",error:false
            }

        }
        case GET:{

            return{
                ...state,data:payload
            }
        }
        default :return state

    }
 }