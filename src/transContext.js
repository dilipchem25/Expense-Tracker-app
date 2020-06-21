import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transReducer'

const  initialTransactions = [
    {id: 1,amount: 500, desc:'Cash'},
    {id: 2,amount: -40, desc:'Book'},
    {id: 3,amount: -200, desc:'Cold drink'},
    {id:4, amount: -200, desc:'Bill'},
]

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({children})=>{
    let [state, dispatch]=useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: 'ADD_Transaction',
            payload:{
                amount: transObj.amount,
                desc: transObj.desc

            }
        })

    }

    return(
        <TransactionContext.Provider value = {{
            transactions: state,
             addTransaction: addTransaction

        }}>

        
            {children}

        </TransactionContext.Provider>
        
    )
}