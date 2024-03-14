import React, {  useEffect, useState } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from './core/topbar/sidebar'
import './app.css'
import Product from './core/components/modal/store/Products/Product';
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './core/spinner/spinner'
import Categoreis from './core/components/modal/store/categories/cateegories';
import Signup from './core/components/modal/user';
import Dashboard from './core/components/modal/dashboard/dashboard';
import Login from './core/components/modal/user/login';
const App = () => {
    const dispatch = useDispatch();
    let persistor = persistStore(store);
    const loading = useSelector((state) => state?.products?.loading)
    const product = useSelector((state) => (state?.products?.products?.products));
    const categories = useSelector((state) => (state?.categories?.categories?.categories));
    const [products, setproducts] = useState('')   
    const [loadingPage, setLoadingPage] = useState(true); 
    const [token , steToken] = useState(false)
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
    const goto = localStorage.getItem('goto')
   useEffect(()=>{
     console.log(loadingPage, 'loading')
     console.log(categories, 'categories')
     dispachtProduct()
     fetchCategories()
   },[])
    return (
      <BrowserRouter>
   <div>

      {goto === false ?  <Signup /> : <Login/> }
      
      {/* { loadingPage ? <Spinner /> : 
          
           <div className='app'>
            <main className='flex' > 
            
            <div className='w-full'>
            <Routes>
             <Route path='/products' element={<Product product={product}/>} />
             <Route path='/categories' element={<Categoreis categories={categories} />} />
             <Route path='/dashboard' element={<Dashboard />} />
             <Route path='/login' element={<Login />} />
             <Route path='/signup' element={<Signup />} />
            </Routes>
            </div>
         </main>
       </div>
    } */}
     
      
   </div>
   </BrowserRouter>
    )
};

export default App;