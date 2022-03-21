import Card from "../UI/Card";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


export default function Expenses(props) {
    const [filterdYear, setFilterdYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterdYear;
    });


    return (
        <>
            <Card className="expenses">
                <ExpenseFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </>
    )
}
