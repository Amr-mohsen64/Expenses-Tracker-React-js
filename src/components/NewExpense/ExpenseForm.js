import React, { useState } from 'react'
import "./ExpenseForm.css"

export const ExpenseForm = (props) => {
    const [enterdTitle, setEnterdTitle] = useState("")
    const [enterdAmount, setEnterdAmount] = useState("")
    const [enterdDate, setEnterdDate] = useState("")


    //alternative
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: "",
    //     enterdAmount: "",
    //     enterdDate: "",
    // })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enterdTitle: event.target.value }
        // })

        setEnterdTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value
        // })

        setEnterdAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value
        // })
        setEnterdDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enterdTitle,
            amount: +enterdAmount,
            date: new Date(enterdDate)
        }

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData)

        //two way binding , add value to inputs
        setEnterdTitle("")
        setEnterdAmount("")
        setEnterdDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title </label>
                    <input value={enterdTitle} type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enterdAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enterdDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    )
}
