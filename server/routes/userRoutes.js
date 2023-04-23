import express from 'express';
const userRouter = express.Router(); 
import { getUser, updateUserProfile, updateUserInterest, getFollowers } from '../controllers/userController.js';
import { resetPassword } from '../controllers/authController.js';
import { isLogged } from '../middlewares/authMiddleware.js';

userRouter.get("/profile", isLogged, getUser);
userRouter.get("/profile/followers", isLogged, getFollowers);
userRouter.put("/profile/profile", isLogged , updateUserProfile);
userRouter.put("/profile/change", isLogged ,changePassword);
userRouter.put("/profile/interests", isLogged ,updateUserInterest);

export default userRouter;