import asyncHandler from "../service/asyncHandler.js";
import CustomError from '../utils/customError.js';
import User from '../models/userSchema.js'

export const getUser = asyncHandler(async (req, res) => {
    const { user } = req;

    if (!user) {
        throw new CustomError("user not found", 404);
    }

    res.status(200).json({
        success: true,
        user,
    });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
    const { user } = req.user;
    
    if (!user) {
        throw new CustomError("user not found", 404);
    }

    const newuser = await User.findOneAndUpdate({
        email: user.email,
    }, {
        firstname: req.body.firstname,
        lastname: req.body.lastname, 
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });

        res.status(200).json({
            success: true,
            message: "Profile has been updated",
            user: newuser,
        });
});

export const updateUserInterest = asyncHandler(async (req, res) => {
    const { user } = req.user;
    
    if (!user) {
        throw new CustomError("user not found", 404);
    }

    const newuser = await User.findOneAndUpdate({
        email: user.email,
    }, {
        interests: req.body.interests,
    });

    if (!newuser) {
        throw new CustomError("User not found", 401);
    }

    res.status(200).json({
        success: true,
        message: "Interests has been added successfully",
        newuser,
    });

});

export const getFollowers = asyncHandler(async (req, res) => {
    const { user } = req.user;
    
    if (!user) {
        throw new CustomError("user not found", 404);
    }

    const newUser = await User.findOne({
        email: user.email
    });

    if (!newUser) {
        throw new CustomError("user not found", 404);
    }

    res.status(200).json({
            success: true,
            followers: newuser.followers,
        })
})