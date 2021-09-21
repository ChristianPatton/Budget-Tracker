import React, {useState} from 'react'

export default function Transaction(props) {
    const [category, setCategory] = useState(null);
    let [amount, setAmount] = useState(0);
    return (
        <li>{props.title} - Amount: ${props.amount}</li>
    )
}
