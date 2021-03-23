import React, {createContext, useReducer} from 'react';

const initialState = {
    transactions: [
        { id: 1, text: 'rent', amount: -2000 },
        { id: 2, text: 'salary', amount: 5000 },
        { id:3, text:'food', amount: -2000},
    ],
    xyz: 'Indukanta',
}

export const GlobalContext = createContext(initialState);

function reducer (state, action){
    switch (action.type) {
        case 'ADD': 
            return {
                ...state,
                transactions: [...state.transactions, action.playload]
            }
        case 'DEL':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.playload)
            };
        default: return state;
    } 
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function addTrans(trans)
    {
        dispatch({
            type: 'ADD',
            playload: trans,
        })
     }

    function delTrans(id) {
        dispatch({
            type: 'DEL',
            playload: id,
        })
     }
    return (<GlobalContext.Provider value={{ transactions: state.transactions, rand:state.xyz, addTrans, delTrans}}>{children}</GlobalContext.Provider>)
}

