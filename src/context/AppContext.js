//Context API (Application Programming Interface )
//initial State can be emtpy but helps do have dummy values

import { createContext, useReducer } from "react";

//AppReducer is in charge of creating 
//the new globol state object
//Based on an action type and a payload
//Accepts current state
const AppReducer = (state, action) => {
    //Decides how to update state
    switch (action.type) {
        case 'ADD_EXPENSE':
        
//returning a new state object with payload
//When we return something from a case statement,
//the reducer automatically updates the state and re-renders the components

        return {
            ...state,
            expenses: [...state.expenses,action.payload],
        };
        
        default:
            return state;
    }
};

const initialState = {
    
    //initial budget
    budget: 5000,

    //dummy value of expenses
    expenses: [
        { id: 12, name: 'Shopping', cost:45},
        { id: 17, name: 'Grocerries', cost:145},
        { id: 19, name: 'Other Expenses', cost:45},
    ],
};

//creating a context call
export const AppContext = createContext();

//App provider, will provide the data to pass to state
export const AppProvider = (props) => {
    // Setting up useReduce hook, holds state & update state with dispatch
    const [state, dispatch] = useReducer(AppReducer, initialState);

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