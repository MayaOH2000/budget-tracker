import React, {useContext} from 'react';
import ExpenseIteam from './ExpenseIteam';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
//Passing AppContext to useContext
//Connects compoent to context and allows to get values from global state
    //using destruction to get values
    const {expenses} = useContext(AppContext);

    //returning array values in a list using map function
    return (
        <ul className='list-group'>
            {expenses.map((expense) => 
            (<ExpenseIteam id={expense.id}
                name={expense.name} 
                cost={expense.cost} />))}
        </ul>
    );
};

export default ExpenseList;



