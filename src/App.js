import React,{useState} from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES=[
  { id:'e1', title:'Car Insurance',amount:298.88, date:new Date(2022,6,1)},
  { id:'e2',title:'Toilet papar ',amount:300.88, date:new Date(2023,6,1)},
  { id:'e3',title:'Washing Machine',amount:234.88, date:new Date(2024,6,1)},
  { id:'e4',title:'Truck',amount:233.88, date:new Date(2022,6,1)}

];
const  App=()=> {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
   setExpenses((prevExpenses)=>{
     return [expense,...prevExpenses]
    
  });
  }
  return (
    <div className="App">
   
   <div>
   <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>

    </div>
  );
}

export default App;
