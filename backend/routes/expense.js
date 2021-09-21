const express = require("express")
const expense = express.Router()

expense.get("/", (req, res) => {
    res.send("Expenses:")
});

expense.post("/add", (req, res) => {
    let expenseObj = req.params
    if(liveDB)
    
    console.log(expenseObj)
});

module.exports = expense;