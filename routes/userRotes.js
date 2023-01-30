const { Router } = require("express");
const { findUsers, findUser, createUser } = require("../controllers/usersConrollers");


const router = Router()

router.get('/', findUsers)

router.get('/:id', findUser)

router.post('/', createUser)
/*
router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)
*/
module.exports = {
  userRouter: router
}