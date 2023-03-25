import React from "react";
import { TiDelete } from 'react-icons/ti';

const ExpenseIteam = (props) => {
    return (
        //creating a list of items with the props values
     <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span className='badge badge-primary badge-pill mr-3'>
                ${props.cost}
            </span>

            {/* Display delete icon from the icon package  */}
            <TiDelete size='1.5em'></TiDelete>
        </div>
     </li>
    );
};

export default ExpenseIteam;