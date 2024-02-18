import React, {  useEffect } from 'react';
import useStyles from './styles';
import {useDispatch} from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from './core/components/topbar/sidebar';
import Topbar from './core/components/topbar/Topbar';
import './app.css'
import Product from './core/components/modal/store/Products/Product';
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
    const dispatch = useDispatch();
    // const classes = useStyles();
    let persistor = persistStore(store);
    useEffect(() => {
       dispatch({
        type:'FETCH_ALL_REQUESTED',payload:false
       })
    }, []);

    return (
    //   <Provider store={store}>
    //     <PersistGate loading={null} persistor={persistor} >
       
    //   </PersistGate>
    // </Provider>
     
     <BrowserRouter>
     <div className='app'>
     <Topbar/>
     <main className='content flex ' >
     <div>
     <Sidebar/>
     </div>
     <div className='w-full'>
     <Routes>
           <Route path='/products' element={<Product/>} />
     </Routes>
       </div>
     </main>
  </div>
  </BrowserRouter>
    );
};

export default App;