const express = require("express")
const expense = express.Router()

expense.get("/", (req, res) => {
    res.send("Expenses:")
})

expense.post("/add/:id", (req, res) => {
    let expenseObj = req.params
    localStorage.setItem("expense_" + req.params.id, expenseObj)
    console.log(expenseObj)
})

module.exports = expense;