import User from '../models/userSchema.js';
import JWT from 'jsonwebtoken';
import asyncHandler from '../service/asyncHandler.js';
import CustomError from '../utils/customError.js';

export const isLogged = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.cookies.token ||
        (req.headers.authorization && req.headers.authorization.startsWith("Bearer")))
    {
        token = req.cookies.token || req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        throw new CustomError('can not access this route', 401);
    }

    try {
        const payloadFromJWT = JWT.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(payloadFromJWT._id, "firstname lastname email profilePicture interests followers");

        next();
    } catch (error) {
        throw new CustomError('can not access this route', 401);
    }
})