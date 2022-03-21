import React from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
import Card from '../UI/Card'
import { useState } from 'react'

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    return (
        <>
            <li>
                <Card className='expense-item'>
                    <ExpenseDate date={props.date} />
                    <div className='expense-item__description'>
                        <h2>{title}</h2>
                        <div className='expense-item__price'>{props.amount}$</div>
                    </div>
                </Card>
            </li>
        </>
    )
}
