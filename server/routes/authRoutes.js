import express from 'express';
const authRouter = express.Router(); 
import { signUp, login, logout, forgotPassword, resetPassword, changePassword } from '../controllers/authController.js';
import { isLogged } from '../middlewares/authMiddleware.js';

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/password/forgot", forgotPassword)
authRouter.post("/password/reset/:resetToken", resetPassword);
authRouter.post('/login/change', isLogged, changePassword);

export default authRouter;