const tarefa = (app, bd) =>{

  app.get('/task', (req, res)=> {
      res.send('tarefa')
  })

  app.post('/task', (req, res)=> {
      res.send('post tarefa')
  })
  
}

module.exports = tarefa

