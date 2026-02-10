import axios from "axios"
import { useState } from "react"

function Form() {
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState(null)

    const handleSubmit = async () => {
        const payload {
            amount,
            description
        }

        const response = await axios.post('http://localhost:3000/transactions', payload)

        console.log(response)
    }

    return (
        <>
            <form name='transaction-form' onSubmit={() => await handleSubmit()}>
                <input name='amount' type='number' onChange={(event) => setAmount(event.currentTarget.value)} />
                <input name='description' type='text' />
                <button type='submit'>Send new transaction</button>
            </form>
        </>
    )
}

export default Form
