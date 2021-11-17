const usuarioExemplo = require('../models/Usuario')

const usuario = (app, bd) =>{

  app.get('/user', (req, res)=> {
      res.send('usuario')
  })

  app.get('/user/email/:email', (req, res)=> {
    const email = req.params.email
    const usuario = bd.usuario.filter((usuario) => usuario.email === email)
    
    if (!usuario.length) {
      res.json({
        erro: true,
        msg: 'Usuário não encontrado',
      });
      return;
    }
    res.json({
      erro: false,
      usuario: usuario[0],
    });
  })

  app.delete('/user/email/:email', (req, res)=> {
    const email = req.params.email

    for (let i = 0; i < bd.usuario.length; i++) {
      if(bd.usuario[i].email===email){
        bd.usuario.splice(i,1)
        res.json({
          erro: false,
          email: email,
        });
      }
    }

    res.json({
      erro: true,
      msg: "deu BO",
    });
  })

  app.post('/user', (req, res)=> {
      
      try{
        const corpo = req.body
        console.log(corpo)
        const user = new usuarioExemplo(corpo.nome, corpo.email, corpo.senha)
        bd.usuario.push(user)
        res.json({
          requisicao: user,
          error: false,
        })
      }
      catch(error){
        res.json({message: error.message, error: true})
      }
      
  })
  
}

module.exports = usuario