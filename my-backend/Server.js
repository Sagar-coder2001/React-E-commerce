const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Sagar@2001',
  database : 'signup'
})
app.post('/signup' , (req , res) => {
  const sql = 'INSERT INTO person ( name , mobile , email , password) values(? , ? , ? , ?)'
  const values = [
    req.body.name,
    req.body.mobile,
    req.body.email,
    req.body.password
  ]
  db.query(sql , [values] ,(err , data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})
app.listen(3000 , () => {
  console.log('Listning.........');
})