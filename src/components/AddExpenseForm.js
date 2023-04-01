import React from "react";

const AddExpenseForm = () => {

    return (
        <form>
            <div className='col-sm'>
                {/* Label for name */}
                <label for='name'>Name</label>
                <input trequired='required' 
                type = 'text' className='form-control'
                id='name'></input>
            </div>
             <div className='col-sm'>
                {/* Label for cost */}
                <label for='cost'>Cost</label>
                 <input required='required'
                 type='text' className='form-control'
                 id='cost'></input>
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