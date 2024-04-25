import { useState } from "react";
const ExpenseForm = ({addExpense}) => {
    const[title,setTitle]=useState('Food')
    const[amount,setAmount]=useState(0)
 const handleSubmit=(event)=>{
    event.preventDefault()
    console.log({title,amount})
    addExpense(title,amount)
    setTitle("");
    setAmount(0);
    console.log('submitted')
 }
const titleChange=(event)=>{

    setTitle(event.target.value)
}
const amountChange=(event)=>{
 
    setAmount(event.target.value)
}
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    );
  };
  
  export default ExpenseForm;