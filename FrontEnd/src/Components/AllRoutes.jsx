import React from "react";
import {Routes, Route} from "react-router-dom"
import { Admin } from "../Pages/Admin";
import Cart from "../Pages/Cart";
import  {SignIn}  from "../Pages/Login";
import OrderManage from "../Pages/OrderManage";
import Productmanage from "../Pages/Productmanage";
import User from "../Pages/users";

import { Signup } from "../redux/auth/auth.action";



const AllRoutes = () => {

  return (
    <Routes>
      
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin" element={<Admin/>}></Route>      
      <Route path="/admin/add" element={<Productmanage/>}></Route>
      <Route path="/admin/order" element={<OrderManage/>}></Route>

       
    </Routes>
  )
};

export default AllRoutes;
