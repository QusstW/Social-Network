import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let PostsData = [
  {name: "Daniil", message: "Привет, как дела?"}, //post
  {name: "Anton", message: "Оу shit"},            //post
  {name: "Ilya", message: "Здесь был Илья"}       //post
]

let dialogaData =[
  {id: 1, name:"Антоха"}, //d
  {id: 2, name:"Илюха"},  //d
  {id: 3, name:"Сеня"},  //d
  {id: 4, name:"Гена"},  //d
  {id: 5, name:"Санёк"},  //d
  {id: 6, name:"Данёк"},  //d

]

let messageData=[
  {id: 1, message:"Привет!"},
  {id: 2, message:"Как дела?"},
  {id: 3, message:"Что нового?"},

]


ReactDOM.render(
  <React.StrictMode>
    <App PostsData={PostsData} dialogaData={dialogaData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
