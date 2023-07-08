//Context API (Application Programming Interface )
//initial State can be emtpy but helps do have dummy values

import { createContext, useReducer } from "react";
import {v4 as uuidv4} from 'uuid';

//AppReducer is in charge of creating 
//the new globol state object
//Based on an action type and a payload
//Accepts current state
// Reudcer = Used to update the state, based on the action
const AppReducer = (state, action) => {
    //Decides how to update state
    switch (action.type) {
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [...state.expenses,action.payload],
        };
        
        //using filter method to remove the expense
        case 'DELETE_EXPENSE':
        return {
            ...state,
            expenses: state.expenses.filter(
                (expense) => expense.id !== action.payload
            ),
        };
        case 'SET_BUDGET':
            return{
                ...state,
                budget: action.payload,
            }

        default:
            return state;
    }
};

//returning a new state object with payload
//When we return something from a case statement,
//the reducer automatically updates the state and re-renders the components

//Setd initial state when app loads
const initialState = {
    
    //initial budget
    budget: 5000,

    //dummy value of expenses
    expenses: [
        { id: uuidv4(), name: 'Shopping', cost:120},
        { id: uuidv4(), name: 'Grocerries', cost:145},
        { id: uuidv4(), name: 'Other Expenses', cost:50},
    ],
};

//creating a context call, context = what our components import and use to get the state
export const AppContext = createContext();

//App provider, will provide the data to pass to state
export const AppProvider = (props) => {
    // Setting up useReduce hook, holds state & update state with dispatch
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //return context values and pass in values we want to use
    return(
        // Contains prop data to allow components to see and have access to
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch, //Allows us to update the state
        }} >{props.children}
        </AppContext.Provider>
    );
};