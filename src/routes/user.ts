import express from 'express'
import { user, addUser } from '../controllers/user.controller'

const userRouter = express.Router()

userRouter.get('/', user)
userRouter.post('/', addUser)
export default userRouter
