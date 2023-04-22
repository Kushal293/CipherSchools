import User from '../models/userSchema.js';
import asyncHandler from '../service/asyncHandler.js';
import CustomError from '../utils/customError.js';

export const isLogged = asyncHandler(async (req, res, next) => {
    
    console.log(req.headers);
    next();
})