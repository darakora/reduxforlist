// const initialState = {
//     persons: [
//         {name: 'Denis', todolist: [{label: 'Buh Uchet',
//                 text: 'Kill this prepod',
//                 startData: new Date('15.10.2019'),
//                 finalData: new Date('17.10.2019'),
//                 isImportant: true,
//                 isDone: false},
//
//                 {label: 'Buh Uchet sdacha',
//                     text: 'Sdat',
//                     startData: new Date('15.10.2019'),
//                     finalData: new Date('17.10.2019'),
//                     isImportant: true,
//                     isDone: false}
//             ]
//         },
//         {name: 'Tima', todolist: [{label: '...',
//                 text: '...',
//                 startData: new Date('15.10.2019'),
//                 finalData: new Date('nikogda'),
//                 isImportant: true,
//                 isDone: true}]
//         }
//     ]
// };

import {combineReducers} from "redux";

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PERSONS' : {
            return {persons: [...action.value]};
        }
        case 'ADD_PERSON': {
            const newState = {...state};
            const temp = {name: action.value.name, todolist: [action.value.label]};
            newState.persons.push(action.value);
            return newState;
        }
        case 'ADD_TODOS': {

            const newState = {...state};
            console.log(newState);
            const {name, todos} = action.value;
            const index = state.persons.findIndex((el) => el.name === name);
            //newState.persons[index].todolist.push(todos);
            return newState;

            // const {name, todos} = action.value;
            // const index = state.persons.findIndex((el) => el.name === name);
            // const start = state.persons.slice(0, index);
            // const end = state.persons.slice(index + 1);
            // const temp = {...state.persons[index]};
            // temp.todolist.push(todos);
            // return {persons: [...start, {...temp}, ...end]};
        }
        case 'SET_IMPORTANT': {
            if(state.persons.length){
                return state;
            }
            const {name, label} = action.value;
            const idx = state.persons.findIndex((el) => el.name === name);
            const todolist = change(state.persons[idx].todolist, label);
            const start = state.persons.slice(0, idx);
            const end = state.persons.slice(idx + 1);
            const temp = {...state.persons[idx]};
            temp.todolist = todolist;
            return {persons: [...start, temp, ...end]};
        }
        default:
            return state;
    }
};

const change = (todolist, label) => {
    const index = todolist.findIndex((el) => el.label === label);
    const temp = {...todolist[index]};
    temp.isImportant = !temp.isImportant;
    const start = todolist.slice(0, index);
    const end = todolist.slice(index+1);
    return [...start, {...temp}, ...end];
};

export default reducer;