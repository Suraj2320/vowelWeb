import thunk from "redux-thunk"
import { cartReducer } from "./cart/cart.reducer";



import { applyMiddleware,legacy_createStore,combineReducers,compose } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { Productreducer } from "./products/product.reducer";


const rootReducer=combineReducers({


    auth:authReducer,
    cart:cartReducer,
    product:Productreducer
   
})
const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))