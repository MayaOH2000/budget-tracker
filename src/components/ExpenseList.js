import React, {useContext, useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
//Passing AppContext to useContext
//Connects compoent to context and allows to get values from global state
    //using destruction to get values
    const {expenses} = useContext(AppContext);

    //filetring results for when searching
    const [filterExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setfilteredExpenses(expenses);
    }, 
    [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filterExpenses) =>
            filterExpenses.name.toLowerCase().includes(event.target.value)
            );
            setfilteredExpenses(searchResults);
   };

    //returning expenses values in a list using map function when searching
    return (
     <>
       <input type='text' className='form-control mb-2 mr-sm-2'
        placeholder='Type to search' onChange={handleChange} 
        /> 
        <ul className='list-group'>
            {filterExpenses.map((expense) => 
            (<ExpenseItem 
                id={expense.id}
                name={expense.name} 
                cost={expense.cost} />))}
        </ul>
     </>
    );
};

export default ExpenseList;



