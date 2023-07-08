import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

//creating new componet name Budget
const Budget = () => {

    //Adding global state value into component
    const {budget, dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    //Edit Handler Function
    const handleEditClick = () => {
        setIsEditing(true);
    };

    //Save Handler Function
    const handleSaveOnClick = (value) => {
       //dispatch function triggers state changes to the store
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    //using bootstrap to give nice background
    return (<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
        {isEditing ? (
            //edit updates when click save
            <EditBudget handleSaveOnClick={handleSaveOnClick} budget={budget} />
            ) : ( 
            //View updates when click on edite 
            <ViewBudget handleEditClick={handleEditClick} budget={budget}/>    
            )}
    </div>
    );
};

export default Budget;