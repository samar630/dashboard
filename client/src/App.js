import React, {  useEffect, useState } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Sidebar from './core/topbar/sidebar'
import './app.css'
import Signup from './core/components/user';
import Dashboard from './core/components/dashboard/dashboard';
import Login from './core/components/user/login/login';
import Product from './core/components/store/Products/Product'
import Categories from './core/components/store/categories/cateegories'
const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state?.products?.loading)
    const product = useSelector((state) => (state?.products?.products?.products));
    const categories = useSelector((state) => (state?.categories?.categories?.categories));
     const [loadingPage, setLoadingPage] = useState(true); 
    const token = localStorage.getItem('token')

    function dispachtProduct() {
      const fetchdata = async () =>{
        try{
          dispatch({
            type:'FETCH_ALL_REQUESTED'
           })
        } catch (error){
          console.log("An error occurred while loading dashboard")
        }
      };
      fetchdata().then(() =>{
        setTimeout(() =>{
          setLoadingPage(false)
        },4000)
     
      }).catch((error)=>{
        throw new Error('An error occurred while loading dashboard');
      })
    }
   
      const fetchCategories = async () =>{
        try{
          dispatch({
            type:'FETCH_ALL_REQUESTED_CATEGORIES'
           })
        } catch (error){
          console.log("An error occurred while loading dashboard")
        }
    }
    const ProtectedRoute = ({children}) =>{
      if(!token){
          return <Navigate to='/signUp' />
      }
      return children
  }
   useEffect(()=>{
     console.log(loadingPage, 'loading')
     console.log(categories, 'categories')
     dispachtProduct()
     fetchCategories()
   },[])
    return (
      <BrowserRouter>
  
          <div className='app'>
            <main className='flex' > 
            <Sidebar/>
            <div className='w-full'>
            <Routes>
              <Route path='products' element={<Product product={product}/>} /> 
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/categories' element={<Categories categories={categories} />} />
             <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            </div>
         </main>
       </div>

        
   </BrowserRouter>
    )
};

export default App;