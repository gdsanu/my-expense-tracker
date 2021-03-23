import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTrans } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTrans = {
            id: 4,
            text,
            amount: amount*1
        }
        addTrans(newTrans);
        
    }
    return (
        <div>
            <h2>Add New Transaction</h2>
            <form onSubmit={onSubmit}>
                Text:{text} <br/>
                <input type="text" placeholder="Enter Reason:" value={text} onChange={e=>setText(e.target.value)}/> <br/><br/>
                Amount:{amount}<br/>
                <input type="text" placeholder="Enter Amount Spent" value={amount} onChange={e => setAmount(e.target.value)} /><br /><br />
                <button>ADD</button>
            </form>    
        </div>
    )
}

export default AddTransactions;
