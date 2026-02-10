const express = require('express')

const port = 3000

const transactions = []

const app = express()
app.use(express.json())

app.get('/transactions', (req, res) => {
  res.send(transactions)
})

app.post('/transactions', (req, res) => {
    if (!req.body.amount || !req.body.description) res.status(400).send("Invalid input")

    transactions.push(req.body)

    res.status(201).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})