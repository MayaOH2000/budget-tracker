// import logo from './logo.svg';
// import './App.css';

import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

const App = () => {
  return ( //create a continer class
          <div className='container'>

            {/* Title of the pages*/}
            <h1 className='mt-3'>My Budget Planner</h1>
              
              {/* Bootstrap row */}
              <div className='row mt-3'>

                  {/* Boostrap column within row */}
                <div className='col-sm'><Budget />
                  <div className='col-sm'><Remaining />
                    <div className='col-sm'><ExpenseTotal />
                    
                    </div>
                  </div>
                </div>
              </div>
          </div>
    );
};

export default App;
