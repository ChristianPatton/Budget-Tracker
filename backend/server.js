const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
const expenseRoute = require("./routes/expense");
let liveDB = false;

app.use(cors())
app.use((req, res, next) => {
  liveDB = req.params.liveDB;
});

app.use('/expense', expenseRoute);

app.get('/', (req, res) => {
  res.send("Welcome to the Budget Tracker")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
