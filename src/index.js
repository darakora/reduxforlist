import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import reducer from './reducer'
import {addPerson, addTodos, createTodo, setImportant, setPersons} from "./actions";
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(setPersons());
/*
setTimeout(()=>{store.dispatch(addTodos('Denis', createTodo('Sleep', '...', 'now', 'never')));}, 5000);
// store.dispatch(setImportant('Denis', 'Buh Uchet'));
console.log(store.getState());
*/
setTimeout(()=>{store.dispatch(addPerson('Dasha', createTodo('first')))}, 10000);
setTimeout(()=>{console.log(store.getState())}, 15000);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
