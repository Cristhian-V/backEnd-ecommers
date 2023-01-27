const express = require('express')
const cors = require('cors')
const {db} = require('../database/bd')
const { userRouter } = require('../routes/userRotes')


class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000

    this.paths = {
      users: '/api/v1/users'
    }
    
    this.middlewares()
    
    this.dataBase()

    this.routes()
  }

  middlewares(){
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes(){
    this.app.use(this.paths.users, userRouter)
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