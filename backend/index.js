
const express = require('express')
const cors = require('cors')
const { Client } = require('pg')



const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.post('/data', (req, res) => {
    const userData = req.body
    saveUserDate(userData.nombre, userData.password)
  })




app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})

async function saveUserDate(name, password){

const client = new Client({
  host: 'ec2-3-229-11-55.compute-1.amazonaws.com',
  user: 'ykapccheefqopy',
  password: '14717759fbaf2535c674de8df4ffe62bcc85a5387602052c95ba23d3a3998d6c',
  database: 'd5b20rocsjrval',
  ssl:{
      rejectUnauthorized: false,
  },
});



await client.connect();

const queryToInsert = "INSERT INTO registro (nombre, password)VALUES ('"+name+"','"+password+"')"

const res = await client.query(queryToInsert)
const resultado = res.rows;
await client.end()
return(resultado)

}

