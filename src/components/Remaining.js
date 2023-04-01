import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {

    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item) =>    
    { return (total = total + item.cost);}, 0);

    //Determine background with boostrap for over or under budget
    const alertType = totalExpenses> budget ? 'alert-danger' : 'alert-success';
    
    return (<div className={`alert ${alertType}`}>
        <span>Remaining: ${budget - totalExpenses}</span>
    </div>

    );
};

export default Remaining;