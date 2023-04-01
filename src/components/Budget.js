import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

//creating new componet name Budget
const Budget = () => {

    //Adding global state value into component
    const {budget} = useContext(AppContext);

    //using bootstrap to give nice background
    return (<div className='alert alert-secondary'>
        <span>Budget: ${budget}</span>
    </div>
    //added text and hard code money layout
    );
};

export default Budget;