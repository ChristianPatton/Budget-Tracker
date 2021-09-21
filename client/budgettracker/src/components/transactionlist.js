import React, {useState} from 'react'
import Transaction from './transaction';
let liveDB = false;

export default function TransactionList() {
    let localTrans = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
    const [transactions, setTransaction] = useState(localTrans);
    let count = transactions.length;

    return (
        <div>
            <input id="expense-input" type="text" placeholder="Expense Name" />
            <input id="amount-input" type="text" placeholder="Amount" />
            <input type="button" value="Add" onClick={addTransaction} />
            <p>This is the Transaction List:</p>
            <ul>
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} title={transaction.name} amount={transaction.amt}/>
                })}
            </ul>
        </div>
    )

    function addTransaction() {
        let expName = document.getElementById("expense-input").value;
        let amtValue = document.getElementById("amount-input").value;
        count++;

        setTransaction([...transactions, {id: count, name: expName, amt: amtValue}]);

        if(liveDB) {
            fetch("http://localhost:9000/expense/add", {
              header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                amt: amtValue,
                liveDB: liveDB
              })
            })
            .then(result => {
                
            });
          } else {
            localStorage.setItem("transactions", JSON.stringify([...transactions, {id: count, name: expName, amt: amtValue}]))
          }
      
          console.log("Expense Added")
      }
}
