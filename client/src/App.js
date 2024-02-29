import React, {  useEffect, useState } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from './core/components/topbar/sidebar';
import Topbar from './core/components/topbar/Topbar';
import './app.css'
import Product from './core/components/modal/store/Products/Product';
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './core/spinner/spinner'
const App = () => {
    const dispatch = useDispatch();
    let persistor = persistStore(store);
    const loading = useSelector((state) => state?.products?.loading)
    const product = useSelector((state) => (state.products?.products?.products));
    const [products, setproducts] = useState('')   
    const [loadingPage, setLoadingPage] = useState(true); 
    function dispachAction() {
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
   useEffect(()=>{
     console.log(loadingPage, 'loading')
     dispachAction()
   },[loadingPage])
    return (
   <div>
     {loadingPage ? <Spinner /> : 
           <BrowserRouter>
           <div className='app'>
            <main className='flex' > 
            <Sidebar/>
            <div className='w-full'>
            <Routes>
             <Route path='/products' element={<Product product={product}/>} />
            </Routes>
            </div>
         </main>
       </div>
       </BrowserRouter>
     }
   </div>
    )
};

export default App;