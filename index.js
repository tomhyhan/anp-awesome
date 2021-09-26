const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use('/static', express.static('public'));


app.get("/", (req, res) => {
  
  res.sendFile(path.join(__dirname,"pages/Dashboard.html"))
})

app.get("/purchase-order-create", (req, res) => {
  res.sendFile(path.join(__dirname,"pages/purchase_order_creation.html"))
  })

app.listen(8080, () => console.log("listening on port 8080"))