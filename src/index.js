import './index.css';
import * as serviceWorker from './serviceWorker';
import store  from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';


export const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value = {store} >
         <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState())


store.subscribe(()=>{
  let state = store.getState()
  rerender(state)

})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
