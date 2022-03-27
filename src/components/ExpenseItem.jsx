import React ,{useState}from 'react'
import './ExenseItem.css'

function ExpenseItem(props) {

  return (
    <>
      <div className='outerdiv'>
        <div className="expense-item">
          <div>{props.data.expenseDate}</div>
          <div className="expenseItem-detail">
            <h2 className='text-danger'>{props.data.expenseTitle}</h2>
            <div>Rs. {props.data.expenseAmount}</div>
            <button>button</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem
