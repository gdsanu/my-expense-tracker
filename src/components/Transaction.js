import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ trans }) => {
    const { delTrans } = useContext(GlobalContext);

    return (
        <div>
            <li>{trans.text} - {trans.amount} <button onClick={() => { delTrans(trans.id)}}>X</button></li>
        </div>
    )
}

export default Transaction;
