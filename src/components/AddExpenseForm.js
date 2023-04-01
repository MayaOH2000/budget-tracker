import React, { useState } from "react";

const AddExpenseForm = () => {

    //Need to know Name and Cost of expense

    const [name, setname] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {

    };

    return (
        <form onSubmit={onSubmit}>
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