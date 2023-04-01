// import logo from './logo.svg';
// import './App.css';

import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  return ( 
    //Nesting compoents in App Provider 
    //which allows componets to have accces to value object
    //Same as AppProvider is exposes
      <AppProvider>

        {/*create a continer class */}
          <div className='container'>

            {/* Title of the pages*/}
            <h1 className='mt-3'>My Budget Planner</h1>
              
              {/* Bootstrap row */}
              <div className='row mt-3'>

                  {/* Boostrap column within row */}
                <div className='col-sm'><Budget /></div>
                  <div className='col-sm'><Remaining /></div>
                    <div className='col-sm'><ExpenseTotal /></div>
                </div>
                  <h3 className='mt-3'>Expenses</h3>
                  <div className='row mt-3'>
                    <div className='col-sm'><ExpenseList /></div>
              </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                  <div className='col-sm'><AddExpenseForm /></div>
                </div>
          </div>
        </AppProvider> 
    );
};

export default App;
