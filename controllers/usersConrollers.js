const Users = require('../models/user.model')


const findUsers = async(req, res) =>{
  try {
    const allUsers = await Users.findAll({attributes:['id','name', 'password', 'amount', 'status']})
    return res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const findUser = async(req, res) =>{
  try {
    const user = await Users.findOne({where:{'id':req.params.id}, attributes:['name', 'password', 'amount', 'status']})
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const createUser = async(req,res) => {
  try {
    const createUser = await Users.create(req.body)
    return res.status(200).json(`${createUser.name} usuario creado satisfactoriamente`)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

module.exports = {
  findUsers, findUser, createUser
}