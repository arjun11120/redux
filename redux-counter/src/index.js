import React from 'react';
import { Provider} from 'react-redux';
import {createStore} from "redux";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/Reducer';
import App from './App';



const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
