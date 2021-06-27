import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
// import reportWebVitals from './reportWebVitals';
import 'tachyons';


const store = createStore(searchRobots)

// Hello is the class and the greating is a property object accessible in the Hello.js file as .prop
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
