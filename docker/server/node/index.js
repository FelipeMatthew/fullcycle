const express = require("express");
const app = express()
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Express running on docker file</h1>")
})

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

 const mysql = require('mysql');

 const connection = mysql.createConnection(config);


const sql = `INSERT INTO people(name) values ('felipe')`;

connection.query(sql);
connection.end()

app.listen(port, () => {
  console.log("Running on " + port)
})