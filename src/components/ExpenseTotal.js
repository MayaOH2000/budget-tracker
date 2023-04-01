import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {

    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,iteam) => 
        {return (total += iteam.cost);}, 0);

    return ( <div className='alert-primary'> 
        <span>Spent so far: ${totalExpenses}</span>
    </div>

    );
};

export default ExpenseTotal;