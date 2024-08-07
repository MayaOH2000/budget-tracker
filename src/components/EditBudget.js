import React, {useState} from "react";

const EditBudget = (props) => {

    const [value, setvalue] = useState(props.budget); 
    
// adds edit button to budget and saves new value on click
    return(
     <>
     <input
        required = 'required'
        type = 'number'
        className = 'form-control'
        id = 'value'
        value = {value}
        onChange= {(event) => setvalue (event.target.value)}
        />
    
        <button 
            type='button' 
            className='btn btn-primary mt-3' 
            onClick= {() => props.handleSaveOnClick(value)}> Save
        </button>  
     </>
    );

};

export default EditBudget;