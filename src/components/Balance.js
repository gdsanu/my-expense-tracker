import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const balanceAvailable = () => {
        let bal = 0;
        transactions.map((trans) => {
            bal += trans.amount;
        })
        return bal;
     }
    return (
        <div>
            <h2>Your Balance</h2>
            <h1>Rs. {balanceAvailable()}</h1>
        </div>
    )
}

export default Balance;
