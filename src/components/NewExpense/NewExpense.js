import "./NewExpense.css"
import { ExpenseForm } from "./ExpenseForm"


const NewExpense = (props) => {

    //get data from child and output to parent

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);
        //lift the state up     
        props.onAddExpense(expenseData)
    }

    return (
        <>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div>

        </>
    )
}
export default NewExpense