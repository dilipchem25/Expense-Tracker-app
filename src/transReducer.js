const TransactionReducer = ((state,action)=>{
    switch(action.type){
        case 'ADD_Transaction':{
            return [action.payload, ...state]
        }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)}
        default:
            return state;
    }

    }
)

export default TransactionReducer;