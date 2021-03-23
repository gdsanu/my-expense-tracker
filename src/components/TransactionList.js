import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions, rand} = useContext(GlobalContext);
    return (
        <div>
            <h2>History of username:{rand}</h2>
            <ul>
                {transactions.map(trans => (<Transaction key={trans.id} trans={trans}/>)) }    
            </ul>
            
        </div>
    )
}

export default TransactionList;
