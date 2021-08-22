import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isVisible, setisVisible] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) => {
       
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setisVisible(false)
    }

    const startEditingHandler = () => {
        setisVisible(true); 
     }

     const stopEditingHandler = () => {
         setisVisible(false);
     }
    
    
    if (isVisible) {
        return (
            <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
        </div>
        )
    } else if (!isVisible)
    return(
       
    <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
    </div>

        )
};

export default NewExpense;