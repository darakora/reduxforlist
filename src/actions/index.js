import axios from 'axios';

export const createTodo = (label, text, startData, finalData, isImportant = false, isDone = false) => {
    return  {label, text, startData, finalData, isImportant, isDone};
};

export const addPerson = (name, todolist) => {
    return {type: 'ADD_PERSON', value: {name, todolist}};
};

export const addTodos = (name, todos) => {
    return {type: 'ADD_TODOS', value: {name, todos}};
};

export const setImportant = (name, label) => {
    return {type: 'SET_IMPORTANT', value: {name, label}};
};

export const setDone = (name, label) => {
    return {type: 'SET_DONE', value: {name, label}};
};

export const setPersons = () => {
    return (dispatch) => {
        axios.get("https://reduxtodo-1186b.firebaseio.com/persons.json")
            .then((response) => {
                dispatch({type: 'SET_PERSONS', value: response.data})
            })
    }
};




