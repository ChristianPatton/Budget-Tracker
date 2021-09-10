const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
const expenseRoute = require("/routes/expense");

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        expense: 'Groceries',
        budgetAmount: 500
    })
  })

  app.route("/expense", expenseRoute)
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
