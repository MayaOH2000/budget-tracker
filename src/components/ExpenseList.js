import React, {useContext, useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
//Passing AppContext to useContext
//Connects compoent to context and allows to get values from global state
    //using destruction to get values
    const {expenses} = useContext(AppContext);


    //Filtering method for search list in expanse
    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);
    const[searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {
        setfilteredExpenses(expenses);
    }, [expenses]);


    //handle search filter event
    const handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(searchTerm)
        );
        setfilteredExpenses(searchResults);
    };

    //returning array values in a list using map function
    return (
     <div>
        <input 
        type = 'text'
        value = {searchTerm}
        onChange= {handleChange}
        placeholder='Search Expenses'
        className='form-control'
        />

        <ul className='list-group'>
            {filteredExpenses.map((expense) => 
            (<ExpenseItem 
                key={expense.id}
                id={expense.id}
                name={expense.name} 
                cost={expense.cost} />))}
        </ul>
     </div>
    );
};

export default ExpenseList;



