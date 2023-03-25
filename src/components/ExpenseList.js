import React from 'react';
import ExpenseIteam from './ExpenseIteam';

const ExpenseList = () => {
    //creating an array of expense iteams
    const expenses = [
        { id: 12, name: 'Shopping', cost:45},
        { id: 17, name: 'Grocerries', cost:145},
        { id: 19, name: 'Other Expenses', cost:45},
    ];

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



