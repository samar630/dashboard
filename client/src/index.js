import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './core/redux/store/store';
import {Provider} from 'react-redux'
import Signup from './core/components/modal/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (document.getElementById('Stepper')) {
	ReactDOM.render(<Signup />, document.getElementById('Stepper'));
} 
root.render(
       <Provider store={store}>
          <React.StrictMode>
        <App />
        </React.StrictMode>
    </Provider>
 
);

