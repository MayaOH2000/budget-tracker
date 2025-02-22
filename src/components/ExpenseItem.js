import React, {useContext} from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext);

    const handleDeleteExpenses = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        //creating a list of items with the props values
     <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span className='badge rounded-pill bg-primary'>
             ${props.cost}</span>

            {/* Display delete icon from the icon package  */}
            <TiDelete size='1.5em' onClick={handleDeleteExpenses}></TiDelete>
        </div>
     </li>
    );
};

export default ExpenseItem;