const express = require('express')
const app = express()
const port = 3001
const usuario = require('./controllers/users')
const tarefa = require('./controllers/task')
const bd = require('./database/bd')


app.use(express.json())
app.use((req, res, next)=>{
  console.log('rodei a middleware bb')
  next()
})

app.get('/', (req, res)=> {
  res.send(`<h1>to do api</h1>`)
})

usuario(app, bd)
tarefa(app, bd)

app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}/`)
})