import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const income = () => {
        let bal = 0;
        transactions.map((trans) => {
            if(trans.amount>0)
            bal += trans.amount;
        })
        return bal;
    }
    const expense = () => {
        let bal = 0;
        transactions.map((trans) => {
            if(trans.amount<0)
            bal += trans.amount;
        })
        return bal;
     }
    return (
        <div>
            <div>Income: Rs. { income()}
            </div>
            <div>Expense: Rs. { expense()}
            </div>
        </div>
    )
}

export default IncomeExpense;
