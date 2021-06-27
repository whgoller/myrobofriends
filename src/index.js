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

// we don't really want to send the store object down to all the smaller components, so we will wrap our <App /> componenet in a Provider componenet and pass the store to the provider componenet. the Provider componenet will take care of passing down the store to all the other components down the component tree from the app.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
