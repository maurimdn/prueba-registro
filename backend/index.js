
const express = require('express')
var cors = require('cors')


const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.get('/data', (req, res) => {
  res.send('Hello World!')
  
})

app.post('/data', (req, res) => {
    console.log(req.body)
  })




app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})