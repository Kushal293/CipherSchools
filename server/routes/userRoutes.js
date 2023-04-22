import express from 'express';
const userRouter = express.Router(); 
import { getUser, updateUserProfile } from '../controllers/userController.js';

userRouter.get("/:userId", getUser);
userRouter.put("/:userId", updateUserProfile);

export default userRouter;