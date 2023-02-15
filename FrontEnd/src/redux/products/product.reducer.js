import { GET_PRODUCT, POST_PRODUCT } from "./product.type";


const initalState = {
  data: [],

};

export const Productreducer = (State = initalState, {type,payload}) => {

  switch (type) {

   case GET_PRODUCT:{

    return{
        ...State,data:payload
    }
   }

    default:
      return State;
  }
};


