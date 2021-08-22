import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('2020')

    const saveYearDataHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
           
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
 


    return(
        <div>
            
        <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onSaveYearData={saveYearDataHandler}/>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        </Card>
        </div>
    )
}

export default Expenses;