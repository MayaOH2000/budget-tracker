import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

    //Geeting dispatch from global state
    const {dispatch} = useContext(AppContext);

    //Need to know Name and Cost of expense
    const [name, setname] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();

        //creating expense object
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

    };

    return (
        <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                {/* Label for name */}
                <label for='name'>Name</label>
                <input trequired='required' 
                type = 'text' className='form-control'
                id='name' value={name}
                onChange={(event) => setname(event.target.value)}>
                </input>
            </div>
             <div className='col-sm'>
                {/* Label for cost */}
                <label for='cost'>Cost</label>
                 <input required='required'
                 type='text' className='form-control'
                 id='cost'value={cost}
                 onChange={(event) => setCost(event.target.value)}>
                 </input>
             </div>
        </div>
             <div className='row'>
                <div className='col-sm'>
                    {/* Button to submit form */}
                    <button type='submit' 
                    className='btn btn-primary mt-3'> Save
                    </button>
                </div>
             </div>
        </form>
    );
};

export default AddExpenseForm;