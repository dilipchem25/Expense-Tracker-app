import  React,{ useContext, useState } from 'react';
import {TransactionContext} from './transContext';

const Child =()=>{

    let {transactions, addTransaction} = useContext(TransactionContext)
    

    let [newDesc, setDesc] =useState('');
    let [newAmount, setAmount]=useState(0)
    

    const getIncome =()=>{
        let income = 0;
        for (var i =0; i<transactions.length; i ++){
            if(transactions[i].amount>0)
            income += transactions[i].amount
        }
        return income;
    }

    const getExpense =()=>{
        let expense = 0;
        for (var i =0; i<transactions.length; i ++){
            if(transactions[i].amount<0)
            expense += transactions[i].amount
        }
        return expense;
    }

    const handleAddition = (event)=>{
        event.preventDefault()
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })

    }
    return(
        <div className = 'container'>
            <h3>Expense Tracker by Dileep</h3>

            <h3>Current Balance <br/>{getIncome()+getExpense()}</h3>
            <div className = 'expense-container'>
            <h3>Income <br/>{getIncome()}</h3>

            <h3>Expense<br/>{getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr/>
            
            <ul className = 'transaction-list'>
                {transactions.map((transObj, ind)=>{
                    return(<li key={ind}>
                        
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                
            </li> )
                })}
                
            </ul>
            <h3>Add Transaction</h3>
            <hr/>
            <form className = 'form-transaction' onSubmit={handleAddition}>
                <label>
                    Enter Description <br  />
                </label>
                <input type = 'text' onChange ={(ev)=> setDesc(ev.target.value)} required>
                
                </input>
                <label>
                    Enter Amount <br  />
                    <input type = 'number' onChange ={(ev)=> setAmount(ev.target.value)}required>
                    
                    </input>
                </label>
                <br />
                <input type = 'submit' value = 'Add Transaction' />

        </form>
        </div>
            

    )
}

export default Child;