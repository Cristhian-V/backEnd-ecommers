const express = require('express')
const cors = require('cors')
const {db} = require('../database/bd')

class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000
    
    this.middlewares()
    this.routes()
    this.dataBase()
  }

  middlewares(){
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes(){
    this.app.get('/api/v1/login', (req, res) => {
      res.send('estoy aqui')
    })
  }

  dataBase(){
    db.authenticate()
      .then(()=>console.log('Autenticacion al TOQUE'))
      .catch((err)=>console.log(err))

    db.sync()
      .then(()=>console.log('sincronizacion al TOQUE'))
      .catch((err)=>console.log(err))
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log('estamos saliendo por el puerto ' + this.port)
    })
  }
}

module.exports = Server