import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContexts"

export function useSummury(){
    const {transactions} = useContext(TransactionsContext)
  
    const summary = transactions.reduce((aco,transaction) =>{
        if(transaction.type === 'income'){
            aco.income += transaction.price
            aco.total += transaction.price
        }else {
            aco.outcome += transaction.price
            aco.total -= transaction.price
        }
        
        return aco
        },
        {
            income:0,
            outcome:0,
            total:0
        }
        )

    return summary
}